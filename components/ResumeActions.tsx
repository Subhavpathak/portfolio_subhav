"use client";

import { Printer } from "lucide-react";

export function ResumeActions() {
  return (
    <button type="button" className="print-button" onClick={() => window.print()}>
      <Printer className="h-5 w-5" />
      Print or save as PDF
    </button>
  );
}
