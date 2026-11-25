"use client";
export default function PrintGuide() {
  return (
    <button className="button print-button" onClick={() => window.print()}>
      Print the checklist
    </button>
  );
}
