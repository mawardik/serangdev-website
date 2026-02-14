"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ComponentType } from "react";
import { AppWindow, ArrowUpRight, Building2, GraduationCap, Layout, Store, type LucideProps } from "lucide-react";

type Project = {
  title: string;
  category: string;
  desc: string;
  size: string;
  icon: ComponentType<LucideProps>;
  image: string;
  color: string;
};



const projects: Project[] = [
  { 
    title: "UMKM Digital", 
    category: "UMKM Solution", 
    desc: "Optimasi jualan online dengan katalog interaktif dan checkout WhatsApp.",
    size: "col-span-1 md:col-span-2 row-span-2", 
    icon: Store,
    image: "/umkm.webp",
    color: "from-purple-600/20 to-blue-600/20"
  },
  { 
    title: "Portal Instansi & Dinas", 
    category: "Government", 
    desc: "Sistem informasi publik yang transparan dan informatif.",
    size: "col-span-1 row-span-1", 
    icon: Building2,
    image: "instansi.webp",
    color: "from-slate-800/50 to-slate-900/50"
  },
  { 
    title: "Sistem Informasi Sekolah", 
    category: "Education", 
    desc: "Digitalisasi edukasi, profil sekolah, dan pendaftaran online.",
    size: "col-span-1 row-span-1", 
    icon: GraduationCap,
    image: "sekolah.webp",
    color: "from-blue-600/20 to-cyan-600/20"
  },
  { 
    title: "Company Profile Corporate", 
    category: "Enterprise", 
    desc: "Membangun kredibilitas bisnis dengan tampilan website kelas dunia.",
    size: "col-span-1 md:col-span-2 row-span-1", 
    icon: Layout,
    image: "compro.webp",
    color: "from-indigo-600/20 to-purple-600/20"
  },
  { 
    title: "Custom Web Application", 
    category: "Special Project", 
    desc: "Solusi sistem kustom sesuai alur bisnis unik Anda.",
    size: "col-span-1 row-span-1", 
    icon: AppWindow,
    image: "webapp.webp",
    color: "from-emerald-600/20 to-teal-600/20"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Layanan <span className="text-gradient">& Solusi</span>
            </h2>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              Apapun bidang bisnis Anda, kami hadir dengan teknologi modern untuk menghadirkan solusi digital terbaik.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <a href="#contact" className="group flex items-center gap-2 text-white bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300">
              Konsultasi <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative group overflow-hidden rounded-[2.5rem] ${project.size} glass border-white/10`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-500">
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}