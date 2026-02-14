"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Globe, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  color: string;
};

const stats: Stat[] = [
  { label: "Tahun Pengalaman", value: 5, suffix: "+", icon: Award, color: "from-purple-500 to-indigo-500" },
  { label: "Website Dibangun", value: 120, suffix: "+", icon: Globe, color: "from-blue-500 to-cyan-500" },
  { label: "Klien Puas", value: 80, suffix: "+", icon: Users, color: "from-emerald-500 to-teal-500" },
  { label: "Project On-Time", value: 99, suffix: "%", icon: Clock, color: "from-orange-500 to-yellow-500" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Experience() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dedikasi <span className="text-gradient">Kami</span> <br />Dalam Inovasi Digital
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Kami tidak hanya sekadar membangun website. Kami menciptakan aset digital yang terukur untuk membantu bisnis Anda tumbuh lebih cepat dan efisien.
            </p>
            
            <div className="mt-10 p-6 glass rounded-3xl border-white/5 inline-flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gray-800 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold">80+ Pemilik Bisnis</span> telah mempercayakan project mereka.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                  className="glass p-6 md:p-8 rounded-[2.5rem] relative group border-white/5"
                >
                  {/* Icon with Color Glow */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-slate-950/80 rounded-[0.9rem] flex items-center justify-center backdrop-blur-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                  
                  {/* Subtle Border Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2.5rem]`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}