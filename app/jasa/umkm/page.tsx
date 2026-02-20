import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Website UMKM Profesional & Terjangkau | SerangDev",
  description:
    "Jasa pembuatan website UMKM profesional dan SEO friendly untuk membantu meningkatkan penjualan dan kredibilitas bisnis Anda di seluruh Indonesia.",
  keywords: [
    "jasa website umkm",
    "jasa pembuatan website umkm",
    "bikin website untuk umkm",
    "website murah untuk umkm",
    "website umkm profesional",
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/umkm",
  },
};

export default function JasaUMKMPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website UMKM",
    "description": "Solusi website profesional, cepat, dan SEO friendly untuk pelaku UMKM di Indonesia.",
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
    "areaServed": {
        "@type": "Country",
        "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Web Dev",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Katalog UMKM"
          }
        }
      ]
    }
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
              Jasa Website UMKM Profesional & Terjangkau
            </h1>
            <Image
              src="/umkm.webp"
              alt="Jasa Website UMKM Profesional SerangDev"
              width={900}
              height={500}
              className="rounded-xl border border-white/10 shadow-lg"
              priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Website bukan lagi sekadar pelengkap, melainkan aset digital utama
              bagi UMKM yang ingin berkembang. Dengan website profesional,
              bisnis Anda terlihat lebih terpercaya di mata pelanggan.
            </p>
          </section>

          <section className="py-0 space-y-6">
            <h2 className="text-3xl font-semibold text-white">Mengapa UMKM Membutuhkan Website?</h2>
            <div className="space-y-5">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium text-blue-400">1. Kehilangan Traffic Organik</h3>
                    <p className="text-gray-300 leading-relaxed">
                    Tanpa website, bisnis sulit muncul di pencarian seperti <strong>jasa website UMKM</strong>. Ini membuat potensi pelanggan lari ke kompetitor.
                    </p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium text-blue-400">2. Ketergantungan Media Sosial</h3>
                    <p className="text-gray-300 leading-relaxed">
                    Media sosial memiliki algoritma yang berubah-ubah. Website adalah rumah milik Anda sendiri yang aman dari perubahan pihak ketiga.
                    </p>
                </div>
            </div>
          </section>

          <section className="py-0 bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Fitur Website UMKM SerangDev</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Desain Modern & Responsive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Katalog Produk Integrasi WA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Optimasi SEO On-Page 100%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Hosting & Domain Aman</span>
              </li>
            </ul>
          </section>

          <section className="py-0 space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold text-white">Layanan Kami di Wilayah Lain</h2>
            <p className="text-gray-300 italic">
              Kami juga melayani area spesifik untuk hasil SEO yang lebih lokal dan tertarget:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/jasa/serang" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Jasa Website Serang
              </Link>
              <Link href="/jasa/banten" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Jasa Website Banten
              </Link>
            </div>
          </section>

        </article>

        <div className="lg:col-span-3">
          <SiloSidebar />
        </div>
      </div>
    </>
  );
}