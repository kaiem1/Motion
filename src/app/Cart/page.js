// components/Cart.tsx
"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 bg-white shadow-xl rounded-full p-3 cursor-pointer"
    >
      <ShoppingCart size={24} />
    </motion.div>
  );
}
