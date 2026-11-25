import DisplayPreview from "../../components/DisplayPreview";
import { iposCheckout, iposFree } from "../../lib/catalog";

export const metadata = {
  title: "iPos v2 | Responsive retail displays for refurbished computers",
  description:
    "Explore the paid iPos v2 retail display, try a sample sales screen, and find the original free iPos Classic edition.",
  alternates: { canonical: "/ipos/" },
};
export default function Page() {
  return (
    <>
      <section className="hero retail-hero">
        <div className="wrap product-intro">
          <a className="crumb" href="/#products">
            ← All software
          </a>
          <p className="eyebrow">
            <i /> IPOS V2 · PAID WINDOWS SOFTWARE
          </p>
          <h1>
            Give every laptop
            <br />
            <em>its own sales card.</em>
          </h1>
          <p className="lead">
            Put the price, memory and storage where the customer is already
            looking. iPos turns a display machine into a branded shop-floor
            sign.
          </p>
          <div className="actions">
            <a className="button" href={iposCheckout || "#display"}>
              {iposCheckout ? "Buy iPos v2" : "Try the v2 display"}{" "}
              <span aria-hidden="true">→</span>
            </a>
            <a className="quiet-link" href="#editions">
              Compare editions ↓
            </a>
          </div>
        </div>
      </section>
      <section className="wrap retail-preview">
        <DisplayPreview />
      </section>
      <section className="wrap product-facts">
        <div>
          <h2>Set up your stock</h2>
          <p>
            iPos Modern detects specifications on Windows. Review the details,
            add the price and describe anything a customer should know about the
            machine.
          </p>
        </div>
        <div>
          <h2>Make it yours</h2>
          <p>
            Reuse a display profile across your stock. Add your own images or
            MP4 slides and choose how long each stays on screen.
          </p>
        </div>
        <div>
          <h2>Display it offline</h2>
          <p>
            Run the display on Windows, or export a browser-ready copy for
            another machine. Local images and videos work without internet
            access.
          </p>
        </div>
      </section>
      <section id="editions" className="wrap editions">
        <h2>Choose your edition</h2>
        <div className="supportgrid">
          <div className="box">
            <p className="product-category">RESPONSIVE EDITION</p>
            <h3>iPos v2</h3>
            <p>
              For shops that want responsive screens, reusable profiles, media
              playlists and offline browser export.
            </p>
            <p className="availability"><strong>£49 one-off, before tax.</strong> Whop calculates the tax for your location.</p>
            {iposCheckout ? (
              <a className="button" href={iposCheckout}>
                Buy iPos v2 on Whop ↗
              </a>
            ) : (
              <p className="availability">
                Sales open here when the signed Windows download is ready.
              </p>
            )}
          </div>
          <div className="box">
            <p className="product-category">ORIGINAL EDITION</p>
            <h3>iPos Classic</h3>
            <p>
              Free Windows display software for showing the machine's
              specification, your shop logo, a price and notes.
            </p>
            <a className="text-action" href={iposFree}>
              Get the original iPos free ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
