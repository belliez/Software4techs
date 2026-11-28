"""Write the public GA4 stream ID for this static Firebase Hosting release."""
import json
import os
import re
import subprocess
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

PROJECT = "software4techs"
ID_FORMAT = re.compile(r"G-[A-Z0-9]{4,20}")


def read_firebase(path, token):
    request = Request(
        f"https://firebase.googleapis.com/v1beta1/projects/{PROJECT}/{path}",
        headers={"Authorization": f"Bearer {token}"},
    )
    try:
        with urlopen(request, timeout=15) as response:
            return json.load(response)
    except HTTPError as error:
        detail = json.load(error).get("error", {})
        print(f"Firebase {path}: HTTP {error.code}: {detail.get('message', '')}")
    except (URLError, TimeoutError) as error:
        print(f"Firebase {path}: {type(error).__name__}")
    return {}


def resolve_stream():
    configured = os.getenv("GA4_MEASUREMENT_ID", "").strip()
    if configured:
        if not ID_FORMAT.fullmatch(configured):
            raise SystemExit("GA4_MEASUREMENT_ID must be a G- measurement ID")
        return configured
    token = subprocess.check_output(
        ["gcloud", "auth", "application-default", "print-access-token"], text=True
    ).strip()
    details = read_firebase("analyticsDetails", token)
    prop = details.get("analyticsProperty") or {}
    if prop:
        print(f"Linked Analytics property: {prop.get('displayName')} ({prop.get('id')})")
    streams = {m["measurementId"] for m in details.get("streamMappings", [])
               if ID_FORMAT.fullmatch(m.get("measurementId") or "")}
    if len(streams) == 1:
        return streams.pop()
    apps = read_firebase("webApps", token).get("apps", [])
    print("Registered web apps:", [app.get("displayName") for app in apps])
    if len(apps) == 1 and not streams and apps[0].get("appId"):
        config = read_firebase(f"webApps/{apps[0]['appId']}/config", token)
        candidate = config.get("measurementId") or ""
        if ID_FORMAT.fullmatch(candidate):
            return candidate
    return ""


if __name__ == "__main__":
    measurement_id = resolve_stream()
    if measurement_id:
        print("Storefront measurement ID:", measurement_id)
    else:
        print("No unique GA4 web stream available. Set GA4_MEASUREMENT_ID or connect a storefront stream.")
    Path("out/analytics.json").write_text(json.dumps({"measurementId": measurement_id}) + "\n")
