import PrintGuide from "../../../components/PrintGuide";
import { crmSignup } from "../../../lib/catalog";
export const metadata = {
  title: "Repair intake checklist for the workshop counter",
  description:
    "A printable device intake checklist for repair shops. Record the reported fault, accessories, condition, contact details and agreed next step.",
  alternates: { canonical: "/guides/repair-intake-checklist/" },
};
const fields = [
  [
    "Job reference and date",
    "Give the customer and the device the same job reference.",
  ],
  [
    "Customer and contact method",
    "Record a name, the preferred contact method and where to send the estimate.",
  ],
  [
    "Device and accessories",
    "Note make, model, serial number and anything left with the device, including its charger or case.",
  ],
  [
    "Condition at intake",
    "Record visible damage and the state of the screen, hinges and ports with the customer present.",
  ],
  [
    "Reported fault",
    "Write down the customer's description, when it last happened, and what they were doing at the time.",
  ],
  [
    "Agreed next step",
    "Record the diagnostic work agreed, any spending limit and when the customer can expect an update.",
  ],
];
export default function Page() {
  return (
    <article className="wrap intake-guide">
      <a className="crumb" href="/#products">
        ← All software
      </a>
      <p className="product-category">WORKSHOP GUIDE</p>
      <h1>Repair intake checklist</h1>
      <p className="guide-lead">
        Use one sheet per device. Fill it in at the counter so the technician
        can start the job and the customer knows what happens next.
      </p>
      <PrintGuide />
      <div className="check-fields">
        {fields.map(([title, copy]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
            <div className="writing-line" aria-hidden="true" />
          </section>
        ))}
      </div>
      <aside className="guide-cta">
        <h2>Prefer to keep it with the ticket?</h2>
        <p>
          RepairShopCRM keeps the customer's details, device history and repair
          notes together. Choose Register to open your shop account.
        </p>
        <a className="text-action" href={crmSignup}>
          Start with RepairShopCRM ↗
        </a>
      </aside>
    </article>
  );
}
