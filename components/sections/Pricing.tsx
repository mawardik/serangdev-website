"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, ArrowRight, ChevronDown } from "lucide-react";

const packages = [
  {
    name: "Starter Personal",
    badge: "Personal / Profesional",
    price: "Rp 1.9jt",
    desc: "Website profesional untuk personal branding dan jasa individu.",
    features: [
      "1–5 Halaman Website",
      "Responsive Mobile First",
      "Basic SEO Setup",
      "Integrasi WhatsApp & Google Maps",
      "Free Domain .com (1 Tahun)",
      "Hosting Basic (1 Tahun)",
      "SSL (HTTPS)"
    ],
    highlight: false,
  },
  {
    name: "UMKM Growth",
    badge: "UMKM & Bisnis",
    price: "Rp 3.5jt",
    desc: "Solusi lengkap untuk UMKM yang ingin scale dan meningkatkan kredibilitas.",
    features: [
      "Up to 10 Halaman",
      "Custom UI Design Branding",
      "CMS / Admin Panel",
      "Optimasi Kecepatan",
      "SEO On-Page Optimization",
      "Google Analytics Setup",
      "Free Maintenance 1 Bulan",
      "SSL (HTTPS)"
    ],
    highlight: true,
  },
  {
    name: "Institusi & Pendidikan",
    badge: "Sekolah / Desa / Instansi",
    price: "Rp 9.9jt",
    desc: "Website resmi untuk lembaga pendidikan dan instansi pemerintah.",
    features: [
      "Unlimited Structured Pages",
      "Sistem Berita & Pengumuman",
      "Role & Permission Management",
      "Download Dokumen / PPID",
      "Training Admin Panel",
      "Backup & Security Setup",
      "Maintenance 3 Bulan",
      "SSL (HTTPS)"
    ],
    highlight: false,
  },
  {
    name: "Enterprise Custom",
    badge: "Perusahaan & Umum",
    price: "Custom Quote",
    desc: "Full custom system untuk perusahaan skala menengah besar.",
    features: [
      "Custom Web Application",
      "Laravel / Vue.js Fullstack",
      "REST API Development",
      "Advanced Security (OWASP)",
      "High Performance Optimization",
      "Cloud / VPS Deployment",
      "Technical Documentation",
      "Dedicated Technical Support"
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="paket" className="relative py-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
            Saatnya Bisnis Anda Naik Level
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Website bukan hanya formalitas. Dengan strategi yang tepat, website Anda 
            bisa menjadi mesin marketing 24 jam yang meningkatkan kredibilitas, 
            memperluas jangkauan, dan mendatangkan lebih banyak pelanggan.
          </p>

          <p className="mt-4 text-purple-400 text-sm font-medium">
            Cocok untuk personal, UMKM, instansi, dan perusahaan di seluruh Indonesia.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isOpen = expanded === index;
            const visibleFeatures = isOpen ? pkg.features : pkg.features.slice(0, 4);

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`relative rounded-[2.5rem] p-8 border flex flex-col transition-all
                ${pkg.highlight
                    ? "glass border-purple-500/50 bg-purple-500/5"
                    : "glass border-white/5 bg-white/[0.02]"
                  }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Sparkles size={14} /> PALING POPULER
                    </span>
                  </div>
                )}

                <span className="text-xs text-purple-400 font-semibold mb-2">
                  {pkg.badge}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-sm text-gray-400 mb-6">
                  {pkg.desc}
                </p>

                <div className="mb-6">
                  <span className="text-2xl font-black text-white">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {visibleFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}

                  <AnimatePresence>
                    {isOpen &&
                      pkg.features.slice(4).map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-start gap-3 text-sm text-gray-300 overflow-hidden"
                        >
                          <Check className="w-4 h-4 text-purple-400 mt-1" />
                          <span>{feat}</span>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>

                {pkg.features.length > 4 && (
                  <button
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="flex items-center gap-2 text-sm text-purple-400 mb-6 hover:text-white transition"
                  >
                    {isOpen ? "Tutup" : "Lihat Selengkapnya"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}

                {/* CTA */}
                <a
                  href={`https://wa.me/628xxxxxxxxxx?text=Halo SerangDev, saya tertarik dengan paket ${pkg.name}`}
                  target="_blank"
                  className={`mt-auto group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all
                  ${pkg.highlight
                      ? "bg-white text-black hover:bg-purple-50"
                      : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-16">
          *Semua paket termasuk SSL (HTTPS) dan setup awal tanpa biaya tambahan.
        </p>

      </div>
    </section>
  );
}
