"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#050638]" />

      {/* Glow Orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[100px] rounded-full"
        style={{ top: "-100px", left: "-100px" }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: "3px",
            height: "3px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
