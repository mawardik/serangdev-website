import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Bikin Web Banten Profesional & SEO Friendly | SerangDev",
  description:
    "Jasa bikin web Banten untuk UMKM, perusahaan, dan startup di Serang, Cilegon, Tangerang, Pandeglang, dan Lebak. Website cepat, modern, dan siap bersaing.",
  keywords: [
    "jasa bikin web banten",
    "jasa pembuatan website banten",
    "web developer banten",
    "developer website banten",
    "jasa website tangerang",
    "jasa website cilegon",
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/banten",
  },
};

export default function JasaBantenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Banten",
    "description": "Layanan web development profesional untuk wilayah Provinsi Banten (Serang, Cilegon, Tangerang, Lebak, Pandeglang).",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "url": "https://serangdev.com",
      "logo": "https://serangdev.com/serangdev-Hlight.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Serang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Banten" },
      { "@type": "City", "name": "Serang" },
      { "@type": "City", "name": "Cilegon" },
      { "@type": "City", "name": "Tangerang" },
      { "@type": "City", "name": "Pandeglang" },
      { "@type": "City", "name": "Lebak" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20">
        <article className="lg:col-span-7 space-y-12">
          <section className="py-0 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0">
              Jasa Bikin Web Banten Profesional untuk UMKM & Perusahaan
            </h1>

            <Image
              src="/umkm.webp"
              alt="Jasa Pembuatan Website Profesional di Banten"
              width={900}
              height={500}
              className="rounded-xl border border-white/10 shadow-lg"
              priority
            />

            <p className="text-lg text-gray-300 leading-relaxed">
              Berawal dari Serang, <strong>SerangDev</strong> kini melayani kebutuhan
              jasa pembuatan website di seluruh wilayah Banten. Kami membantu
              bisnis di Serang, Cilegon, Tangerang, Pandeglang, hingga Lebak
              membangun kehadiran digital yang modern dan kompetitif.
            </p>
          </section>

          <section className="py-0 space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Partner Digital untuk Bisnis di Seluruh Banten
            </h2>

            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-blue-400">Standarisasi Web Developer Banten</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sebagai <strong>web developer Banten</strong>, kami menerapkan standar performa tinggi pada setiap proyek. 
                  Website yang kami bangun dipastikan memiliki kecepatan akses maksimal agar mampu bersaing di pasar regional maupun nasional.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-blue-400">Strategi Lokal yang Terukur</h3>
                <p className="text-gray-300 leading-relaxed">
                  Kami memahami karakteristik market di Provinsi Banten. Setiap elemen desain dan konten disusun untuk 
                  memikat audiens lokal sekaligus ramah terhadap mesin pencari (SEO).
                </p>
              </div>
            </div>
          </section>

          <section className="py-0 bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Cakupan Wilayah Layanan di Banten</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/jasa/serang" className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all text-center">
                <span className="text-blue-400 font-bold block">Serang</span>
                <span className="text-xs text-gray-400">Pusat Layanan</span>
              </Link>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center opacity-70">
                <span className="text-gray-300 font-bold block">Cilegon</span>
                <span className="text-xs text-gray-500">Web Profile</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center opacity-70">
                <span className="text-gray-300 font-bold block">Tangerang</span>
                <span className="text-xs text-gray-500">E-Commerce</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center opacity-70">
                <span className="text-gray-300 font-bold block">Pandeglang</span>
                <span className="text-xs text-gray-500">UMKM Digital</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center opacity-70">
                <span className="text-gray-300 font-bold block">Lebak</span>
                <span className="text-xs text-gray-500">Custom Web</span>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Mengapa Memilih SerangDev?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">✔ Berbasis di Serang (Lokal Banten)</li>
              <li className="flex items-center gap-2">✔ Struktur SEO Skala Provinsi</li>
              <li className="flex items-center gap-2">✔ Core Web Vitals Optimized</li>
              <li className="flex items-center gap-2">✔ Desain Modern & Responsive</li>
              <li className="flex items-center gap-2">✔ Konsultasi Strategi Digital</li>
            </ul>
          </section>

          <section className="py-0 space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold text-white">Layanan Spesifik</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/jasa/serang" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Fokus Kota Serang
              </Link>
              <Link href="/jasa/umkm" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Solusi UMKM Nasional
              </Link>
            </div>
          </section>

          <section className="text-center bg-blue-600/5 p-10 rounded-2xl border border-blue-600/20 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Konsultasikan Proyek Website Anda</h2>
            <p className="text-gray-300 max-w-lg mx-auto italic">
              Kami bukan sekadar vendor, kami adalah partner pertumbuhan digital bisnis Anda di wilayah Banten.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
              Hubungi Kami Sekarang
            </button>
          </section>

        </article>

        <div className="lg:col-span-3">
          <SiloSidebar />
        </div>

      </div>
    </>
  );
}