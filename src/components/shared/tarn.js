"use client";

import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Tarn = () => {
  const boxRef = useRef(null);

  useEffect(() => {
  
  gsap.to(boxRef.current, {
    duration: 5,
    x: "+=800", // প্রতি সাইকেলে ৫০০px ডানে যাবে
    repeat: -2, // অসীম বার রিপিট করবে
    ease: "none", // একটানা মুভমেন্ট, কোনো থামা/বাউন্স না
  });
}, []);

  return (
    <div style={{ padding: '50px' }}>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          background: 'teal',
          borderRadius: '10px',
        }}
      ></div>
    </div>
  );
};

export default Tarn;
