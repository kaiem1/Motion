"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: 0,
      duration: 10,
      rotation: 760,
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 200,
        height: 200,
        background: "blue",
        margin: "10vh auto", // To make it appear after scroll
      }}
    ><h1>kaiem</h1></div>
  );
}
