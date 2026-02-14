"use client";

import { motion } from "framer-motion";

const logos = ["Google Cloud", "DigitalOcean", "Vercel", "Stripe", "Midtrans", "Laravel", "React"];

export default function LogoSlider() {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <div className="flex overflow-hidden group">
          {/* Duplikasi array untuk efek infinite loop yang mulus */}
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30, // Kecepatan scroll
              ease: "linear",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span 
                key={index} 
                className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}