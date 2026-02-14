"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Konfigurasi Bintang/Partikel Kecil
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
    }));
  }, []);

  // Konfigurasi Cahaya Ambient (Orbs)
  const orbs = [
    { color: "bg-purple-600/20", size: "w-[500px] h-[500px]", x: [0, 100, 0], y: [0, 50, 0], duration: 25 },
    { color: "bg-blue-600/15", size: "w-[600px] h-[600px]", x: [100, 0, 100], y: [100, 0, 100], duration: 30 },
    { color: "bg-indigo-600/10", size: "w-[400px] h-[400px]", x: [50, 50, 50], y: [0, 100, 0], duration: 20 },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050638]">
      
      {/* 1. Ambient Animated Orbs (Cahaya Latar Belakang) */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          animate={{
            x: orb.x.map((val) => `${val}%`),
            y: orb.y.map((val) => `${val}%`),
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute ${orb.color} ${orb.size} blur-[120px] rounded-full opacity-50`}
          style={{ left: "-10%", top: "-10%" }}
        />
      ))}

      {/* 2. Floating Particles (Bintang-Bintang) */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              y: [0, -100, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>

      {/* 3. Noise Overlay (Efek Grain agar terlihat sinematik) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </div>
  );
}