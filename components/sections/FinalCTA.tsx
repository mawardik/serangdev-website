"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 text-center overflow-hidden">
      
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Siap Membawa Bisnis Anda <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Go Digital?
          </span>
        </h2>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Jangan biarkan kompetitor mendahului Anda. Konsultasikan kebutuhan sistem digital Anda hari ini bersama tim ahli SerangDev.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="https://wa.me/628568709200"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Tanya Dulu
          </a>

        </div>
      </div>
    </section>
  );
}
