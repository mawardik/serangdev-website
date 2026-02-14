"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: -1000,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050638]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="w-20 h-20 rounded-2xl border-2 border-purple-500/30 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    borderRadius: ["20%", "50%", "50%", "20%"] 
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-blue-500 blur-sm opacity-50"
                />
                <span className="absolute">
                    <Image
                    src="/robo.webp"
                    alt="SerangDev"
                    width={250}
                    height={80}
                    priority
                /></span>
                
              </div>
            </motion.div>

            <div className="overflow-hidden h-6">
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
                  Initializing Experience
                </span>
              </motion.div>
            </div>

            <div className="mt-6 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}