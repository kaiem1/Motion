"use client"; // Required in Next.js app directory (for client components)

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Body() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,
      duration: 1,
      backgroundColor: "#00FF00",
      borderRadius: "20px",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        background: "red",
        margin: 50,
      }}
    />
  );
}
