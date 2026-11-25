import Bench from "../components/Bench";
import Offer from "../components/Offer";
import { crm } from "../lib/catalog";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap herogrid">
          <div>
            <div className="eyebrow">
              <i /> WINDOWS WORKSHOP SOFTWARE
            </div>
            <h1>
              Tools for the
              <br />
              <em>repair bench.</em>
            </h1>
            <p className="lead">
              Track an intermittent connection, keep your USB toolkit organised
              and record what you fixed with Technician Toolbox.
            </p>
            <a className="button" href="/technician-toolbox/">
              Explore Technician Toolbox <span>↗</span>
            </a>
            <Offer teaser />
          </div>
          <Bench />
        </div>
      </section>
      <section id="products" className="wrap catalog">
        <div className="sectionhead">
          <div className="eyebrow dark">
            <i /> SOFTWARE CATALOGUE
          </div>
          <h2>In the workshop</h2>
        </div>
        <div className="cards">
          {[
            [
              "tool",
              "⌁",
              "Technician Toolbox",
              "Portable Windows toolkit",
              "Launch your utilities, log connection drops and keep repair notes with the job.",
              "View Toolbox",
              "/technician-toolbox/",
            ],
            [
              "display",
              "▣",
              "iPos",
              "Retail display software",
              "Turn a display laptop into its own sales card with specs, pricing and shop branding.",
              "Explore iPos",
              "/ipos/",
            ],
            [
              "cloud",
              "▦",
              "RepairShopCRM",
              "Web-based repair management",
              "Manage tickets, customers, invoices and inventory from your browser.",
              "Visit RepairShopCRM",
              crm,
            ],
          ].map(([cl, ic, name, type, copy, action, url]) => (
            <article key={name} className={"card " + cl}>
              <div className="cardtop">
                <span className="producticon" aria-hidden="true">
                  {ic}
                </span>
                <small>{type}</small>
              </div>
              <h3>{name}</h3>
              <p>{copy}</p>
              <a href={url}>
                {action} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
      <div className="wrap legacy">
        <strong>Already using CRS for Windows?</strong>
        <a href="/support/#crs">
          Account, downloads and migration help <span>→</span>
        </a>
      </div>
    </>
  );
}
