import "./style.css";
import { domain, legacy } from "../lib/catalog";
export const metadata = {
  metadataBase: new URL(domain),
  title: {
    default: "Software4Techs | Software for the repair bench",
    template: "%s | Software4Techs",
  },
  description:
    "Portable Windows tools for repair technicians, retail display software and web-based repair shop management.",
};
export function Brand() {
  return (
    <span className="brand">
      <span className="mark" aria-hidden="true">
        S<span>4</span>
      </span>
      Software<span className="brand-four">4</span>Techs
    </span>
  );
}
export default function Layout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header>
          <div className="wrap bar">
            <a className="brandlink" href="/" aria-label="Software4Techs home">
              <Brand />
            </a>
            <nav aria-label="Main navigation">
              <a href="/#products">Software</a>
              <a href="/support/">Support</a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer>
          <div className="wrap foot">
            <div>
              <a className="brandlink" href="/">
                <Brand />
              </a>
              <p>Software for independent repair shops.</p>
            </div>
            <div className="footlinks">
              <a href="/support/">Support &amp; downloads</a>
              <a href={legacy}>Legacy CRS site ↗</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
