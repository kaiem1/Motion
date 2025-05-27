"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char");
    gsap.from(chars, {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      // ease: "back.out(1.7)",
      duration: 0.8,
      ease: "none",
      // repeat: -1,
    });
  }, []);

  return (
    <h1 ref={containerRef} style={{ fontSize: "2rem", textAlign: "center" }}>
      {text.split("").map((char, index) => (
        <span key={index} className="char" style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
