"use client";
import { useEffect, useState } from "react";
import { launch, regular, offersEnd } from "../lib/catalog";

export default function Offer({ compact = false }) {
  const [launchPeriod, setLaunchPeriod] = useState(null);
  useEffect(() => {
    function refresh() {
      setLaunchPeriod(Date.now() < offersEnd);
    }
    refresh();
    const remaining = offersEnd - Date.now();
    const timeout =
      remaining >= 0 && remaining < 2147483647
        ? window.setTimeout(refresh, remaining + 1)
        : null;
    window.addEventListener("focus", refresh);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("focus", refresh);
    };
  }, []);
  const price = launchPeriod ? "£29" : "£49";
  const total = launchPeriod ? "£34.80" : "£58.80";
  const url = launchPeriod ? launch : regular;
  if (compact)
    return (
      <div className="card-offer">
        <strong>
          {launchPeriod === null
            ? "One-off licence"
            : price + " + applicable tax"}
        </strong>
        <span>
          {regular ? "One-time purchase" : "Paid edition coming soon"}
        </span>
      </div>
    );
  return (
    <div className="offer">
      <div className="offerline">
        <strong>{launchPeriod === null ? "One-off licence" : price}</strong>
        {launchPeriod !== null && <span>One-off licence · before tax</span>}
      </div>
      {launchPeriod && (
        <p>
          Black Friday price through Monday 30 November 2026. £49 before tax
          from 1 December.
        </p>
      )}
      {launchPeriod !== null && (
        <p className="tax-note">
          UK total with VAT: {total}. Whop calculates the tax for your location.
        </p>
      )}
      {regular && launchPeriod !== null ? (
        <>
          <a className="button" href={url}>
            Buy Technician Toolbox <span aria-hidden="true">↗</span>
          </a>
          <small>
            Pay once through Whop. Find the download in your purchases.
          </small>
        </>
      ) : (
        !regular && (
          <p className="availability">
            <strong>Paid edition coming soon.</strong> Purchases open here when
            the Windows release is ready.
          </p>
        )
      )}
      {regular && launchPeriod === null && (
        <a href={regular}>Check the current price on Whop</a>
      )}
    </div>
  );
}
