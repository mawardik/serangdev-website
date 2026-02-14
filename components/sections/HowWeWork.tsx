"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Konsultasi", desc: "Diskusi mendalam untuk memahami visi dan kebutuhan bisnis Anda." },
  { icon: PenTool, title: "Design UI/UX", desc: "Pembuatan prototipe desain modern yang fokus pada user experience." },
  { icon: Code, title: "Development", desc: "Proses coding menggunakan tech-stack terbaru yang cepat dan aman." },
  { icon: Rocket, title: "Launch", desc: "Website siap online dengan optimasi SEO dan dukungan teknis penuh." },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-32 px-6 ai-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">How We Work</h2>
          <p className="mt-4 text-gray-400">Proses transparan untuk hasil yang maksimal.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 -translate-y-16" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] relative z-10 text-center group hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                <step.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              
              <span className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold text-purple-400">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}