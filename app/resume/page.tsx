"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResumeRedirect() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push(
            "https://drive.google.com/file/d/1RDYuPDlHVpZJaFOwhMiVuzo5KM_KbqE0/view?usp=sharing"
          );
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white text-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Redirecting you to{" "}
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-primary via-primary/80 to-primary/60">
            Shubhankit&apos;s
          </span>{" "}
          Resume
        </h1>
        <p className="text-xl mb-8">
          You will be redirected in {countdown} seconds...
        </p>
        <div className="relative">
          <div className="w-16 h-16 border-4 mx-auto border-primary border-t-secondary rounded-full animate-spin"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
