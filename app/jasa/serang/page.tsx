import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Bikin Web Serang Profesional & SEO Friendly | SerangDev",
  description:
    "Jasa bikin web Serang profesional untuk UMKM, perusahaan, dan toko online. Website cepat, modern, SEO friendly, dan siap meningkatkan penjualan bisnis Anda.",
  keywords: [
    "jasa bikin web serang",
    "jasa pembuatan website serang",
    "web developer serang",
    "bikin website murah serang",
    "jasa website serang terpercaya",
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/serang",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jasa Bikin Web Serang Profesional | SerangDev",
    description:
      "Solusi website profesional di Serang untuk UMKM dan perusahaan.",
    url: "https://serangdev.com/jasa/serang",
    siteName: "SerangDev",
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaSerangPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Serang",
    "description": "Layanan web developer profesional di Kota Serang untuk profil perusahaan, UMKM, dan e-commerce.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "url": "https://serangdev.com",
      "logo": "https://serangdev.com/serangdev-Hlight.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Serang",
        "addressLocality": "Serang",
        "addressRegion": "Banten",
        "postalCode": "42111",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.12, 
        "longitude": 106.15
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Serang" },
      { "@type": "City", "name": "Cilegon" },
      { "@type": "State", "name": "Banten" }
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
              Jasa Bikin Web Serang Profesional, Cepat & SEO Friendly
            </h1>

            <Image
              src="/webapp.webp"
              alt="Jasa Bikin Website Profesional di Serang oleh SerangDev"
              width={900}
              height={500}
              className="rounded-xl border border-white/10 shadow-lg"
              priority
            />

            <p className="text-lg text-gray-300 leading-relaxed">
              SerangDev adalah mitra strategis untuk <strong>jasa pembuatan website di Serang</strong> yang
              berfokus pada performa tinggi dan desain modern. Kami membantu pelaku bisnis di Kota Serang
              memiliki aset digital yang tidak hanya estetik, tetapi juga mampu menduduki peringkat teratas di Google.
            </p>
          </section>

          <section className="py-0 space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Mengapa Bisnis di Serang Wajib Memiliki Website?
            </h2>

            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-blue-400">Pencarian Lokal yang Tinggi</h3>
                <p className="text-gray-300 leading-relaxed">
                  Konsumen di Serang kini mencari layanan melalui smartphone. Tanpa website yang dioptimasi secara lokal, 
                  bisnis Anda kehilangan ribuan calon pelanggan yang mencari kata kunci <strong>web developer Serang</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-blue-400">Kredibilitas Bisnis di Mata Instansi</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bagi perusahaan di Serang yang menyasar klien korporat atau instansi, memiliki *Company Profile* digital 
                  adalah syarat mutlak untuk membangun kepercayaan dan memenangkan tender atau kerjasama bisnis.
                </p>
              </div>
            </div>
          </section>

          <section className="py-0 bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Solusi Digital SerangDev</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-1">
                <p className="font-bold text-blue-400">Company Profile</p>
                <p className="text-sm">Branding profesional untuk perusahaan & instansi di Serang.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-blue-400">E-Commerce</p>
                <p className="text-sm">Toko online lengkap dengan integrasi ongkir & payment gateway.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-blue-400">Landing Page</p>
                <p className="text-sm">Halaman penawaran fokus tinggi untuk konversi iklan (Ads).</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-blue-400">Custom Web App</p>
                <p className="text-sm">Pengembangan sistem berbasis Next.js atau Laravel sesuai kebutuhan.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Keunggulan Web Developer Serang Kami</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">✔ Optimasi Core Web Vitals</li>
              <li className="flex items-center gap-2">✔ Desain Mobile-First & Responsive</li>
              <li className="flex items-center gap-2">✔ Skema SEO Teknis 100%</li>
              <li className="flex items-center gap-2">✔ Keamanan Data & SSL Gratis</li>
              <li className="flex items-center gap-2">✔ Support Maintenance Berkala</li>
            </ul>
          </section>

          <section className="py-0 space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold text-white">Layanan Terkait</h2>
            <p className="text-gray-300 italic">
              Butuh jangkauan yang lebih luas atau spesifik? Cek layanan kami lainnya:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/jasa/banten" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Jasa Website Banten
              </Link>
              <Link href="/jasa/umkm" className="px-5 py-2 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-600/30 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                Jasa Website UMKM
              </Link>
            </div>
          </section>

          <section className="py-0 text-center bg-blue-600/5 p-10 rounded-2xl border border-blue-600/20 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Siap Go Digital Bersama SerangDev?</h2>
            <p className="text-gray-300 max-w-lg mx-auto">
              Jangan biarkan kompetitor mendahului Anda. Bangun kehadiran online profesional untuk bisnis Anda di Serang sekarang juga.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
              Konsultasi Gratis
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