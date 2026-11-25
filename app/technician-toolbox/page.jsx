import Bench from "../../components/Bench";
import Offer from "../../components/Offer";
export const metadata = {
  title: "AI Technician | Technician Toolbox for Windows",
  description:
    "Work through Windows faults with diagnostic evidence, repair notes and AI follow-up questions. Use your own OpenAI API key with Technician Toolbox.",
  alternates: { canonical: "/technician-toolbox/" },
};
export default function Page() {
  return (
    <>
      <section className="hero sub">
        <div className="wrap herogrid">
          <div>
            <a className="crumb" href="/">
              ← All software
            </a>
            <p className="eyebrow">
              <i /> TECHNICIAN TOOLBOX · WINDOWS X64
            </p>
            <h1>
              AI
              <br />
              <em>Technician.</em>
            </h1>
            <p className="lead">
              When a customer says “it only happens sometimes”, start a case.
              Collect local Windows evidence, ask a focused follow-up using your
              OpenAI key and record the checks that narrowed down the fault.
            </p>
            <a href="#licence" className="button">
              View licence &amp; pricing <span>↓</span>
            </a>
          </div>
          <Bench />
        </div>
      </section>
      <section className="wrap detail">
        <div>
          <h2>Work through a repair with AI Technician</h2>
          <div className="feature">
            <h3>Start with what the machine tells you</h3>
            <p>
              Open a case and collect a local diagnostic baseline. Bring the
              customer's symptoms and your observations into the same
              investigation.
            </p>
          </div>
          <div className="feature">
            <h3>Ask the next question</h3>
            <p>
              Use the evidence to ask for possible causes and a suggested next
              check. Compare the answer with your own measurements and keep the
              findings with the case. Optional AI runs on your OpenAI account.
            </p>
          </div>
          <div className="feature">
            <h3>Catch intermittent faults</h3>
            <p>
              Leave the connectivity logger running while you work. Review
              outages alongside upload and download tests.
            </p>
          </div>
          <div className="feature">
            <h3>Keep your tools in reach</h3>
            <p>
              Organise your own Windows utilities by folder and keep frequently
              used tools close to hand.
            </p>
          </div>
          <div className="feature">
            <h3>Record the repair</h3>
            <p>
              Keep observations, tests and fixes in a job timeline. Optional AI
              features use your own OpenAI API key. OpenAI bills usage to your
              account.
            </p>
          </div>
        </div>
        <aside id="licence" className="box">
          <p className="eyebrow dark">WINDOWS · X64</p>
          <h2>Toolbox licence</h2>
          <Offer />
          <p>
            The current download is the signed Windows x64 Workshop Preview
            1.5.0. Extract the ZIP and open <strong>Start-AI-Technician.cmd</strong>
            {" "}to start a case. Updates within this major version are included.
          </p>
          <a href="/support/">Help with a purchase →</a>
        </aside>
      </section>
    </>
  );
}
