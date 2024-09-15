"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const CustomScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ minHeight: "100vh", margin: 0, padding: 0 }}
    >
      {children}
    </div>
  );
};

export default CustomScroll;
