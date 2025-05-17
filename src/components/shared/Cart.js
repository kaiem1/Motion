// components/CartDrawer.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

const CartDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={drawerRef}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-4 translate-x-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        {/* Dummy Cart Items */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-medium">Product {item}</p>
              <p className="text-sm text-gray-500">$10.00</p>
            </div>
            <p className="font-semibold">x1</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
