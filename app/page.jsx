import {
  crmPricing,
  crmSignup,
  customContact,
  iposCheckout,
  regular,
} from "../lib/catalog";
import Offer from "../components/Offer";
import HomeShowcase from "../components/HomeShowcase";

export const metadata = {
  title: { absolute: "Software4Techs | Software for independent repair shops" },
  description:
    "Compare repair shop management, portable Windows diagnostics and retail display software. Find a tool for your workshop and see how to get started.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeShowcase />

      <section id="products" className="wrap catalog">
        <div className="sectionhead">
          <h2>Choose your software</h2>
        </div>
        <div className="cards sale-cards">
          <article className="card cloud">
            <p className="product-category">Shop management · Web</p>
            <h3>RepairShopCRM</h3>
            <p>
              Take online bookings, follow each repair ticket and invoice the
              customer at collection.
            </p>
            <div className="card-offer">
              <strong>Free plan</strong>
              <span>Monthly plans for busier shops</span>
            </div>
            <a className="card-action" href={crmPricing}>
              Compare CRM plans <span aria-hidden="true">↗</span>
            </a>
            <a className="card-secondary" href={crmSignup}>
              Open a free account ↗
            </a>
          </article>
          <article className="card tool">
            <p className="product-category">
              AI-assisted diagnostics · Windows
            </p>
            <h3>AI Technician</h3>
            <p>
              Open a case in Technician Toolbox, review the machine's diagnostic
              evidence and ask a follow-up using your own OpenAI API key.
            </p>
            <Offer compact />
            <a className="card-action" href="/technician-toolbox/#licence">
              {regular ? "See licence and buy" : "See launch pricing"}{" "}
              <span aria-hidden="true">→</span>
            </a>
            <a className="card-secondary" href="/technician-toolbox/">
              Explore the diagnostics →
            </a>
          </article>
          <article className="card display">
            <p className="product-category">Retail displays · Windows</p>
            <h3>iPos v2</h3>
            <p>
              Give each refurbished PC a responsive sales display with its own
              price, specifications, photos and video.
            </p>
            <div className="card-offer">
              <strong>Paid edition</strong>
              <span>Original iPos Classic also available free</span>
            </div>
            <a className="card-action" href="/ipos/">
              {iposCheckout ? "Buy iPos v2" : "Explore iPos v2"}{" "}
              <span aria-hidden="true">→</span>
            </a>
            <a className="card-secondary" href="/ipos/#display">
              Try the display example →
            </a>
          </article>
        </div>
      </section>

      <section id="custom-apps" className="custom-section">
        <div className="wrap custom-grid">
          <div>
            <p className="eyebrow">
              <i /> CUSTOM DEVELOPMENT
            </p>
            <h2>
              Need an app for the way <em>you</em> work?
            </h2>
          </div>
          <div>
            <p>
              Tell me what takes too long, where you keep the information today
              and who needs to use it. I build Windows apps, web software and
              websites for businesses and individuals.
            </p>
            <a className="button" href={customContact}>
              Discuss a custom app or website <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="wrap about-grid">
        <img
          src="/images/repair-bench.jpg"
          width="1200"
          height="800"
          alt="A laptop opened for a workshop repair"
          loading="lazy"
        />
        <div>
          <p className="product-category">MEET THE DEVELOPER</p>
          <h2>Paul Betteridge</h2>
          <p>
            I've been developing software for over 30 years. I run iFixTech in
            Poole, Dorset, and trade futures as pbTrader. A morning on the
            repair bench can tell me more about what a tool needs than a week
            spent designing it on paper.
          </p>
          <p>
            RepairShopCRM grew out of running a repair business. Technician
            Toolbox helps with the machine on the bench, and iPos helps sell the
            machines on the shop floor.
          </p>
          <a className="text-action" href="https://paulbetteridge.com/">
            More about Paul ↗
          </a>
        </div>
      </section>
      <section className="wrap guide-feature">
        <div>
          <p className="product-category">WORKSHOP GUIDE</p>
          <h2>A repair intake checklist</h2>
          <p>
            What to record when a customer hands over a device, with a sheet you
            can print for the counter.
          </p>
        </div>
        <a className="text-action" href="/guides/repair-intake-checklist/">
          Read the checklist <span aria-hidden="true">→</span>
        </a>
      </section>
      <div className="wrap legacy">
        <strong>Already using CRS for Windows?</strong>
        <a href="/support/#crs">Account, downloads and migration help →</a>
      </div>
    </>
  );
}
