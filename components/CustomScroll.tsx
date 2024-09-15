"use client";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Import the types from locomotive-scroll
import type LocomotiveScroll from "locomotive-scroll";

const CustomScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locomotiveScroll, setLocomotiveScroll] =
    useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let instance: LocomotiveScroll | null = null;

    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;

      if (scrollRef.current) {
        instance = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });

        setLocomotiveScroll(instance);
      }
    });

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ minHeight: "fit-content" }}
    >
      {children}
    </div>
  );
};

export default CustomScroll;
