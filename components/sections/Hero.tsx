import { ArrowRight, Cpu, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-[128px] opacity-60" />
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply blur-[128px] opacity-60" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-[128px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10 animate-fade-in-up">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Halo SerangDev
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Smart Affordable <br />
            <span className="text-gradient">Website Solution</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Bangun ekosistem digital bisnis Anda dengan teknologi modern. 
            Cepat, aman, dan dirancang untuk skalabilitas tinggi.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#paket"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lihat Paket
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition text-white font-semibold"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative grid grid-cols-2 gap-4 md:gap-6 pt-12 md:pt-0">

          <div className="glass p-6 md:p-8 rounded-[2rem] flex flex-col justify-between h-64 group transition hover:-translate-y-2 hover:scale-[1.02] duration-300">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition duration-500">
              <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                Lighting Fast
              </h3>
              <p className="text-sm text-gray-400 mt-2">Score 90+ Pagespeed</p>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-[2rem] flex flex-col justify-between h-64 translate-y-12 group transition hover:-translate-y-2 hover:scale-[1.02] duration-300">
            <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center group-hover:bg-green-400/20 transition duration-500">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                Secure Core
              </h3>
              <p className="text-sm text-gray-400 mt-2">End-to-end Encryption</p>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-[2rem] col-span-2 flex items-center gap-6 mt-16 md:mt-8 group transition hover:scale-[1.01] duration-300 relative overflow-hidden">
            <div className="p-4 bg-purple-500/20 rounded-2xl transition group-hover:scale-110 duration-300">
              <Cpu className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                Modern Tech Stack
              </h3>
              <p className="text-sm text-gray-400 font-mono tracking-tighter">
                Laravel • Next.js • React • Vue
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
