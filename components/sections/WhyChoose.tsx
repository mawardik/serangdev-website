"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Smartphone } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    desc: "Dibangun dengan arsitektur modern menggunakan Laravel, Next.js, dan best practice development.",
  },
  {
    icon: Rocket,
    title: "Super Fast Performance",
    desc: "Optimasi performa tinggi dengan standar SEO dan Core Web Vitals terbaik.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Keamanan aplikasi menjadi prioritas dengan sistem proteksi berlapis.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    desc: "Tampilan optimal di desktop, tablet, dan mobile dengan pendekatan mobile-first.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 ai-bg overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gradient"
        >
          Kenapa Pilih SerangDev?
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto px-6">
          Kami tidak hanya membuat website, kami membangun sistem digital yang siap berkembang bersama bisnis Anda.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] text-left flex flex-col items-start group transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}