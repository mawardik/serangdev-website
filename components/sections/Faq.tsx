"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  { q: "Berapa lama proses pengerjaan website?", a: "Tergantung tingkat kompleksitasnya. Untuk Landing Page biasanya 3-7 hari kerja, sedangkan Company Profile atau Web App membutuhkan 2-4 minggu." },
  { q: "Apakah saya bisa mengelola konten sendiri?", a: "Tentu! Kami menyediakan Admin Panel (CMS) yang user-friendly sehingga Anda bisa mengubah teks dan gambar dengan mudah tanpa perlu coding." },
  { q: "Bagaimana dengan biaya maintenance?", a: "Kami memberikan gratis maintenance selama 3 bulan pertama. Setelah itu, tersedia paket maintenance tahunan yang mencakup update sistem dan backup data." },
  { q: "Apakah website sudah termasuk SEO?", a: "Ya, setiap website yang kami bangun sudah mengikuti standar SEO Google (On-Page) untuk memastikan bisnis Anda lebih mudah ditemukan di internet." },
  { q: "Apakah ada biaya tersembunyi?", a: "Tidak ada. Semua biaya (Domain, Hosting, Setup) sudah kami jelaskan di awal sesuai paket yang Anda pilih." },
  { q: "Bagaimana jika saya ingin revisi?", a: "Kami memberikan kuota revisi sesuai paket untuk memastikan desain dan fungsi website benar-benar sesuai dengan ekspektasi Anda." },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-lg -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border-white/10 text-purple-400 text-sm font-medium mb-6">
                <HelpCircle size={16} />
                <span>Support Center</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Punya pertanyaan? <br />
                <span className="text-gradient">Disini jawabannya</span>
              </h2>
              <p className="pt-6">Cek dulu di sini, siapa tahu pertanyaanmu sudah ada jawabannya. Kalau belum, chat kita aja!</p>
              <div className="mt-10 relative">
                <div className="glass p-6 rounded-[2.5rem] relative z-10 overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={80} className="text-white" />
                  </div>
                  <div className="flex gap-4 items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <HelpCircle className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Fast Response</h4>
                      <p className="text-xs text-gray-400">Konsultasi via WhatsApp</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &rdquo; Masih ragu? Tim kami siap membantu pertanyaan teknis Anda secara gratis.&rdquo;
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-lg" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 blur-3xl rounded-lg" />
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`glass rounded-[1rem] overflow-hidden border-white/5 transition-all duration-300 ${active === i ? 'border-purple-500/30 bg-white/[0.04]' : ''}`}
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full p-4 md:p-4 flex items-center justify-between text-left group"
                >
                  <span className={`font-bold transition-colors ${active === i ? 'text-purple-300' : 'text-white group-hover:text-purple-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${active === i ? 'bg-purple-500 border-purple-500 text-white' : 'border-white/10 text-gray-500'}`}>
                    {active === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-6">
                        <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-purple-500/40 before:rounded-lg">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}