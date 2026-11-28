"""Exercise the exported storefront in Chrome with a local GA4 fixture."""
import json
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

STREAM = "G-LOCALTEST01"


class Fixture(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ("/analytics.json", "/__/firebase/init.json"):
            data = json.dumps({"projectId": "software4techs",
                               "measurementId": self.server.stream}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
        else:
            super().do_GET()

    def log_message(self, *_):
        pass


server = ThreadingHTTPServer(("127.0.0.1", 0), partial(Fixture, directory=str(Path("out"))))
server.stream = STREAM
Thread(target=server.serve_forever, daemon=True).start()
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-background-networking")
options.add_argument("--window-size=390,844")
url = f"http://127.0.0.1:{server.server_port}/?utm_source=workshop&utm_medium=email"
driver = webdriver.Chrome(options=options)
try:
    # Keep synthetic QA traffic off Google while checking real browser behaviour.
    driver.execute_cdp_cmd("Network.enable", {})
    driver.execute_cdp_cmd("Network.setBlockedURLs", {"urls": ["*googletagmanager.com*", "*google-analytics.com*"]})
    wait = WebDriverWait(driver, 12)
    tag = "#s4t-google-tag"
    def button(label):
        return driver.find_element(By.XPATH, f"//button[normalize-space(.)='{label}']")
    def visible(css):
        return wait.until(lambda d: d.find_element(By.CSS_SELECTOR, css).is_displayed())
    def private_page():
        assert not driver.find_elements(By.CSS_SELECTOR, tag)
        assert not driver.execute_script("return Boolean(window.gtag)")
    driver.get(url)
    visible("#analytics-choices")
    private_page()
    button("Decline analytics").click()
    driver.refresh()
    visible(".analytics-manage")
    private_page()
    button("Analytics preferences").click()
    button("Allow analytics").click()
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, tag))
    assert driver.find_element(By.CSS_SELECTOR, tag).get_attribute("src").endswith("?id=" + STREAM)
    assert driver.execute_script("return dataLayer.filter(x => x[0] === 'config' && x[1] === arguments[0]).length", STREAM) == 1
    assert "utm_source=workshop" in driver.current_url
    driver.refresh()
    wait.until(lambda d: d.find_elements(By.CSS_SELECTOR, tag))
    driver.add_cookie({"name": "_ga", "value": "local-test", "path": "/"})
    button("Analytics preferences").click()
    button("Decline analytics").click()
    wait.until(lambda d: not d.find_elements(By.CSS_SELECTOR, tag))
    visible(".analytics-manage")
    private_page()
    assert driver.get_cookie("_ga") is None
    server.stream = ""
    driver.get(url)
    wait.until(lambda d: d.execute_script("return performance.getEntriesByName(location.origin + '/__/firebase/init.json').length"))
    private_page()
    assert not driver.find_elements(By.CSS_SELECTOR, ".analytics-manage")
    print("Consent, decline, opt-in, withdrawal, repeat visits and missing stream passed.")
finally:
    driver.quit()
    server.shutdown()
