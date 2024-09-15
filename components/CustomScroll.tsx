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
  const [debugInfo, setDebugInfo] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let instance: LocomotiveScroll | null = null;

    const updateScroll = () => {
      if (instance && scrollRef.current) {
        instance.update();

        // Debug information
        const containerHeight = scrollRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollMax = containerHeight - viewportHeight;
        setDebugInfo(
          `Container: ${containerHeight}px, Viewport: ${viewportHeight}px, Max Scroll: ${scrollMax}px`
        );
      }
    };

    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;

      if (scrollRef.current) {
        instance = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.05,
          scrollFromAnywhere: true,
          smartphone: { smooth: true },
          tablet: { smooth: true, breakpoint: 1024 },
          reloadOnContextChange: true,
          initPosition: { x: 0, y: 0 },
        });

        setLocomotiveScroll(instance);

        // Initial update
        updateScroll();

        // Recalculate on window resize
        window.addEventListener("resize", updateScroll);

        // Recalculate heights periodically
        const intervalId = setInterval(updateScroll, 1000);

        // Listen for scroll events
        instance.on(
          "scroll",
          (args: { scroll: { y: number }; limit: { y: number } }) => {
            const { scroll, limit } = args;
            console.log(`Scroll position: ${scroll.y}, Limit: ${limit.y}`);
          }
        );

        return () => {
          window.removeEventListener("resize", updateScroll);
          clearInterval(intervalId);
          if (instance) {
            instance.destroy();
          }
        };
      }
    });
  }, []);

  return (
    <>
      <div
        data-scroll-container
        ref={scrollRef}
        style={{
          minHeight: "100vh",
          height: "auto",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {/* Debug overlay */}
      <div
        style={{
          position: "fixed",
          bottom: 10,
          left: 10,
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "5px",
          fontSize: "12px",
          zIndex: 9999,
        }}
      >
        {debugInfo}
      </div>
    </>
  );
};

export default CustomScroll;
