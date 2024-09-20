"use client";
import React from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyCLI = () => {
  const command = "npx shubhcodes";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command).then(() => {
      toast.success("Copied to clipboard");
    });
  };

  return (
    <>
      <div className="md:flex items-center justify-between bg-secondary rounded-md border-primary/30 border px-3 p-2 md:w-[60%] hidden mx-auto md:mx-0 max-w-md">
        <code className="text-primary text-sm font-mono">{command}</code>
        <button
          onClick={copyToClipboard}
          className="text-primary hover:text-primary/40 transition-colors duration-200 focus:outline-none focus:ring-0 rounded"
          aria-label="Copy to clipboard"
        >
          <Copy className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default CopyCLI;
