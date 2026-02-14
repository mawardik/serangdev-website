"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Siap Membawa Bisnis Anda <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Go Digital?
          </span>
        </motion.h2>

        <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Jangan biarkan kompetitor mendahului Anda. Konsultasikan kebutuhan sistem digital Anda hari ini bersama tim ahli SerangDev.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-2"
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition backdrop-blur-md flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Tanya Dulu
          </a>
        </motion.div>

      </div>
    </section>
  );
}