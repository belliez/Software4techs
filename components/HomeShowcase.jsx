"use client";
import { useState } from "react";
import { crmPricing, crmSignup } from "../lib/catalog";

const products = [
  {
    name: "RepairShopCRM",
    category: "REPAIR SHOP MANAGEMENT",
    title: "From first booking",
    accent: "to paid invoice.",
    copy: "Give customers a booking link. Keep the device, job notes, parts and invoice on one repair ticket, so whoever is at the counter can answer “Is it ready?”",
    primary: "Compare CRM plans",
    url: crmPricing,
    secondary: "Open a free account",
    more: crmSignup,
  },
  {
    name: "AI Technician",
    category: "TECHNICIAN TOOLBOX FOR WINDOWS",
    title: "Give your next diagnosis",
    accent: "a second pair of eyes.",
    copy: "Start with the symptoms and evidence from the PC on your bench. Ask AI Technician what to check next, record what you found and pick up the case on your next visit. Bring your own OpenAI API key.",
    primary: "Explore AI Technician",
    url: "/technician-toolbox/",
    secondary: "See licence details",
    more: "/technician-toolbox/#licence",
  },
  {
    name: "iPos v2",
    category: "RESPONSIVE RETAIL DISPLAY SOFTWARE",
    title: "Let the laptop",
    accent: "do the selling.",
    copy: "Turn a refurbished PC into its own sales display. Put the specs, selling price, photos and video right where a customer is looking. Use a responsive layout across different screen sizes.",
    primary: "Explore paid iPos v2",
    url: "/ipos/",
    secondary: "Try a sample display",
    more: "/ipos/#display",
  },
];

export default function HomeShowcase() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];
  return (
    <section className="store-hero">
      <div className="wrap">
        <div
          className="product-picker"
          role="group"
          aria-label="Featured products"
        >
          {products.map((p, i) => (
            <button
              type="button"
              key={p.name}
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="store-hero-grid">
          <div className="store-hero-copy">
            <p className="eyebrow">
              <i />
              {product.category}
            </p>
            <h1>
              {product.title}
              <br />
              <em>{product.accent}</em>
            </h1>
            <p className="lead">{product.copy}</p>
            <div className="actions">
              <a className="button" href={product.url}>
                {product.primary} <span aria-hidden="true">→</span>
              </a>
              <a className="quiet-link" href={product.more}>
                {product.secondary} <span aria-hidden="true">↗</span>
              </a>
            </div>
            {selected === 0 && (
              <small className="signup-note">
                Free plan available. Choose Register on the account screen.
              </small>
            )}
          </div>
          {selected === 0 && (
            <figure className="crm-shot">
              <a
                href="/images/repairshopcrm.jpg"
                aria-label="Enlarge the RepairShopCRM screenshot"
              >
                <img
                  width="1510"
                  height="704"
                  src="/images/repairshopcrm.jpg"
                  alt="RepairShopCRM in the iFixTech workshop, adding labour or diagnostics to a repair"
                  fetchPriority="high"
                />
              </a>
              <figcaption>
                Adding a service to a repair <span>·</span> Select to enlarge
              </figcaption>
            </figure>
          )}
          {selected === 1 && (
            <div className="case-demo">
              <div className="consolehead">
                <span>AI TECHNICIAN</span>
                <span>EXAMPLE CASE</span>
              </div>
              <div className="case-body">
                <small>REPORTED SYMPTOM</small>
                <h2>“The internet keeps dropping.”</h2>
                <small>OBSERVATION</small>
                <p>
                  The connection log shows a two-minute outage. The customer
                  noticed it during a video call.
                </p>
                <small>FOLLOW-UP QUESTION</small>
                <p>Did other devices lose connectivity at the same time?</p>
              </div>
            </div>
          )}
          {selected === 2 && (
            <figure className="displaydemo hero-display">
              <div className="consolehead">
                <span>iPos v2</span>
                <span>EXAMPLE RETAIL DISPLAY</span>
              </div>
              <div className="displayinner">
                <small>REFURBISHED LAPTOP</small>
                <h2>Business notebook</h2>
                <div className="spec">
                  <span>Memory</span>
                  <b>16 GB</b>
                </div>
                <div className="spec">
                  <span>Storage</span>
                  <b>512 GB SSD</b>
                </div>
                <div className="retail-output">£299</div>
              </div>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
