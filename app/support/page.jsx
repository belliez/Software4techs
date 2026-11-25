import { account, crm, legacy, support } from "../../lib/catalog";
export const metadata = {
  title: "Support and existing customers",
  alternates: { canonical: "/support/" },
};
export default function Page() {
  return (
    <section className="wrap help">
      <a className="crumb" href="/">
        ← All software
      </a>
      <p className="eyebrow dark">
        <i /> CUSTOMER SUPPORT
      </p>
      <h1>
        Support &amp;
        <br />
        downloads.
      </h1>
      <div className="supportgrid">
        <div className="box">
          <h2>Technician Toolbox</h2>
          <p>
            After purchase, sign in to Whop with the email address used at
            checkout. Open Technician Toolbox in your purchases to find the
            download.
          </p>
          <a href="https://whop.com/hub/">Open my Whop purchases ↗</a>
        </div>
        <div className="box" id="crs">
          <h2>CRS for Windows</h2>
          <p>
            Your existing account and subscription are managed on the original
            CRS site. RepairShopCRM is the web-based successor.
          </p>
          <a href={account}>Legacy customer account ↗</a>
          <a href={support}>CRS support ↗</a>
          <a href={crm}>Explore RepairShopCRM ↗</a>
        </div>
        <div className="box">
          <h2>iPos</h2>
          <p>
            Find the original display setup guide and installation information.
          </p>
          <a href={legacy + "shop/ipos/"}>iPos setup guide ↗</a>
        </div>
        <div className="box">
          <h2>OpenAI usage</h2>
          <p>
            Standard Toolbox diagnostics run without an OpenAI API key. Optional
            AI usage is billed through your own OpenAI account.
          </p>
          <a href="/technician-toolbox/">Toolbox details →</a>
        </div>
      </div>
    </section>
  );
}
