import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Website Perusahaan (Corporate) Profesional | SerangDev",
  description: "Solusi pembuatan website company profile korporat profesional di Serang & Banten. Fokus pada kredibilitas B2B, keamanan data, dan optimasi SEO tingkat tinggi.",
  keywords: ["jasa website perusahaan", "jasa website company profile", "pembuatan website corporate", "web developer perusahaan banten", "jasa website profesional serang", "corporate web design indonesia"],
  alternates: { canonical: "https://serangdev.com/jasa/website-perusahaan" },
};

export default function JasaPerusahaanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Perusahaan (Corporate)",
    "description": "Layanan pengembangan website company profile profesional untuk korporasi, pabrik, dan instansi di wilayah Banten.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "url": "https://serangdev.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Serang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    },
    "areaServed": ["Serang", "Cilegon", "Tangerang", "Banten"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Web Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Company Profile Development" } }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20">
        <article className="lg:col-span-7 space-y-12 text-justify">
          <section className="py-0 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0 text-left">
              Jasa Website Perusahaan & Company Profile Profesional: Membangun Otoritas Digital
            </h1>
            <Image src="/compro.webp" alt="Jasa Website Perusahaan Profesional SerangDev" width={900} height={500} className="rounded-xl border border-white/10 shadow-lg" priority />
            <p className="text-lg text-gray-300 leading-relaxed">
              Dalam ekosistem bisnis modern, website bukan sekadar `&quot;`brosur digital`&quot;`. Bagi sebuah korporasi, website adalah representasi integritas, profesionalisme, dan kesiapan teknologi. <strong>SerangDev</strong> hadir sebagai mitra strategis dalam <strong>jasa pembuatan website perusahaan</strong> yang berfokus pada penguatan identitas brand dan konversi hubungan B2B yang solid.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white">Mengapa Kredibilitas Digital Menentukan Masa Depan Perusahaan Anda?</h2>
            <p>
              Banyak perusahaan di kawasan industri seperti Cikande, Cilegon, dan Tangerang yang memiliki performa operasional luar biasa namun memiliki wajah digital yang tertinggal. Klien besar, investor, dan calon mitra strategis selalu melakukan riset mendalam melalui mesin pencari sebelum memutuskan untuk bekerja sama.
            </p>
            <p>
              Website korporat yang lambat, tidak aman, atau menggunakan template pasaran akan memberikan sinyal negatif terhadap kualitas manajemen perusahaan. SerangDev mengeliminasi risiko tersebut dengan membangun arsitektur web berbasis <strong>Next.js</strong> yang memberikan kecepatan akses instan dan keamanan tingkat tinggi.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white">Standar Pengembangan Web Corporate Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">High-End Security</h3>
                <p className="text-sm">Implementasi SSL enkripsi 256-bit dan proteksi dari serangan DDoS untuk menjaga integritas data perusahaan.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">Enterprise SEO</h3>
                <p className="text-sm">Optimasi metadata dan struktur skema organisasi agar nama perusahaan mendominasi halaman pertama Google.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">Performance First</h3>
                <p className="text-sm">Skor Core Web Vitals yang hijau untuk memastikan pengalaman pengguna yang mulus di semua perangkat.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white">Fitur Eksklusif untuk Skala Korporasi</h2>
            <p>Kami memahami bahwa kebutuhan setiap perusahaan unik. Oleh karena itu, kami menyediakan modul kustom yang mendukung operasional bisnis:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span><strong>Custom Branding UI/UX:</strong> Desain yang selaras dengan filosofi dan warna brand perusahaan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span><strong>Investor Relations:</strong> Area khusus untuk laporan keuangan tahunan dan prospektus perusahaan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span><strong>Career Management:</strong> Sistem rekrutmen internal untuk menjaring talenta terbaik secara mandiri.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span><strong>Global Language Support:</strong> Fitur multibahasa untuk menjangkau pasar internasional dengan akurasi tinggi.</span>
              </li>
            </ul>
          </section>

          <section className="py-0 space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold text-white">Dominasi Pasar Regional Banten dan Nasional</h2>
            <p className="text-gray-300 leading-relaxed">
              Sebagai <strong>web developer perusahaan di Banten</strong>, SerangDev memiliki kedekatan geografis untuk melakukan diskusi mendalam secara tatap muka dengan manajemen Anda. Kami melayani korporasi di Kawasan Industri Modern Cikande, KIEC Cilegon, hingga BSD City. Kombinasi kedekatan lokal dan standar teknologi global menjadikan kami partner digital paling ideal.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/jasa/serang" className="text-blue-400 hover:underline">Jasa Website Serang</Link>
              <span className="text-gray-600">|</span>
              <Link href="/jasa/banten" className="text-blue-400 hover:underline">Jasa Website Banten</Link>
            </div>
          </section>

          <section className="text-center bg-gradient-to-br from-blue-600/20 to-transparent p-10 rounded-2xl border border-blue-600/20 space-y-6">
            <h2 className="text-3xl font-bold text-white">Konsultasikan Visi Digital Perusahaan Anda</h2>
            <p className="text-gray-300">Jadwalkan pertemuan virtual atau tatap muka dengan tim engineer kami hari ini.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl">
              Hubungi Corporate Consultant
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