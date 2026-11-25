"use client";
import { useEffect, useState } from "react";
import { launch, regular, offersEnd } from "../lib/catalog";
export default function Offer({ teaser = false }) {
  const [now, setNow] = useState(null);
  useEffect(() => {
    function update() {
      setNow(Date.now());
    }
    update();
    const handle = setInterval(update, 15000);
    window.addEventListener("focus", update);
    return () => {
      clearInterval(handle);
      window.removeEventListener("focus", update);
    };
  }, []);
  if (now === null) return teaser ? null : <p>One-off Windows licence.</p>;
  const promo = now < offersEnd;
  const url = promo ? launch : regular;
  if (teaser) {
    return promo ? (
      <a className="offer-preview" href="/technician-toolbox/#licence">
        Black Friday launch pricing <span aria-hidden="true">→</span>
      </a>
    ) : null;
  }
  return (
    <div className="offer">
      <div className="offerline">
        <strong>{promo ? "£29" : "£49"}</strong>
        <span>One-off licence · excluding VAT</span>
      </div>
      {promo && (
        <p>
          Black Friday launch price through 30 November 2026. £49 from 1
          December.
        </p>
      )}
      <p>
        Including UK VAT,{" "}
        {promo ? "£34.80 at launch and £58.80 afterwards" : "£58.80"}. Whop
        calculates tax for your location at checkout.
      </p>
      {url ? (
        <>
          <a className="button" href={url}>
            Buy Technician Toolbox <span>↗</span>
          </a>
          <small>Checkout and purchase access via Whop.</small>
        </>
      ) : (
        <p className="availability">
          Checkout is being prepared. Sales open when the signed release is
          available.
        </p>
      )}
    </div>
  );
}
