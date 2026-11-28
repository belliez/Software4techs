"use client";

import { useEffect, useRef, useState } from "react";

const preferenceKey = "s4t-analytics-v1";
const tagElementId = "s4t-google-tag";
const idPattern = /^G-[A-Z0-9]{4,20}$/;
const denied = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

function getPreference() {
  try {
    return window.localStorage.getItem(preferenceKey);
  } catch {
    return null;
  }
}

function startAnalytics(id) {
  if (document.getElementById(tagElementId)) return;
  window["ga-disable-" + id] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", denied);
  window.gtag("consent", "update", { ...denied, analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_path: "/",
  });
  const tag = document.createElement("script");
  tag.id = tagElementId;
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(tag);
}

function stopAnalytics(id) {
  window["ga-disable-" + id] = true;
  const names = ["_ga", "_ga_" + id.slice(2)];
  for (const name of names) {
    const expired = name + "=; Max-Age=0; Path=/; SameSite=Lax";
    document.cookie = expired;
    document.cookie = expired + "; Domain=" + location.hostname;
    document.cookie = expired + "; Domain=software4techs.com";
  }
  if (document.getElementById(tagElementId)) window.location.reload();
}

export default function AnalyticsPreferences() {
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const manageButton = useRef(null);
  const heading = useRef(null);

  useEffect(() => {
    const abort = new AbortController();
    async function load() {
      const response = await fetch("/analytics.json", { signal: abort.signal });
      if (!response.ok) return;
      const { measurementId } = await response.json();
      if (abort.signal.aborted || !idPattern.test(measurementId)) return;
      setId(measurementId);
      const saved = getPreference();
      if (saved === "allow") startAnalytics(measurementId);
      else if (saved !== "decline") setOpen(true);
    }
    load().catch(() => {});
    return () => abort.abort();
  }, []);

  useEffect(() => {
    if (!id) return;
    function sync(event) {
      if (event.key !== preferenceKey && event.key !== null) return;
      const choice = getPreference();
      if (choice === "allow") startAnalytics(id);
      else stopAnalytics(id);
      setOpen(choice !== "allow" && choice !== "decline");
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [id]);

  function choose(preference) {
    try {
      window.localStorage.setItem(preferenceKey, preference);
    } catch {
      // The visitor's choice still applies to this document.
    }
    setOpen(false);
    if (document.activeElement?.closest("#analytics-choices")) {
      manageButton.current?.focus({ preventScroll: true });
    }
    if (preference === "allow") startAnalytics(id);
    else stopAnalytics(id);
  }

  if (!id) return null;
  return (
    <>
      <button type="button" className="analytics-manage" ref={manageButton}
        aria-controls="analytics-choices" aria-expanded={open}
        onClick={() => {
          setOpen(true);
          requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
        }}>
        Analytics preferences
      </button>
      {open && (
        <section id="analytics-choices" className="analytics-panel" aria-labelledby="analytics-heading">
          <h2 id="analytics-heading" tabIndex={-1} ref={heading}>Visitor analytics</h2>
          <p>May we use Google Analytics cookies to see how people find Software4Techs and which pages they visit? You can change your choice in the footer.</p>
          <div className="analytics-actions">
            <button type="button" onClick={() => choose("allow")}>Allow analytics</button>
            <button type="button" onClick={() => choose("decline")}>Decline analytics</button>
          </div>
        </section>
      )}
    </>
  );
}
