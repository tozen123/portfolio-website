"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;

      if (blob1.current) {
        blob1.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        ref={blob1}
        className="transition-transform duration-100 ease-linear absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_#1f4037_0%,_#99f2c8_100%)] opacity-20 blur-[120px]"
      ></div>
      <div
        ref={blob2}
        className="transition-transform duration-100 ease-linear absolute right-[5%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_#99f2c8_0%,_#1f4037_100%)] opacity-20 blur-[120px]"
      ></div>
    </div>
  );
}
