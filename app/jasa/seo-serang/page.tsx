import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa SEO Serang #1 | Optimasi Website Masuk Halaman 1 Google",
  description: "Jasa SEO Serang profesional untuk meningkatkan peringkat website di Google. Fokus pada konversi, optimasi lokal Banten, dan strategi SEO white-hat.",
  keywords: [
    "jasa seo serang",
    "ahli seo banten",
    "konsultan seo serang",
    "jasa optimasi website serang",
    "pakar seo banten",
    "seo agency serang",
    "jasa google maps serang"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/seo-serang",
  },
};

export default function JasaSeoSerangPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO & Optimasi Website Serang",
    "description": "Layanan optimasi mesin pencari (SEO) komprehensif untuk bisnis di Serang dan Banten guna mendominasi hasil pencarian Google.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Serang",
        "addressRegion": "Banten"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20 text-justify">
        
        <article className="lg:col-span-7 space-y-12">
          
          <section className="py-0 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0 text-left">
              Jasa SEO Serang: Dominasi Peringkat Google & Lipat Gandakan Omzet
            </h1>
            <Image 
              src="/seo-serang.webp" 
              alt="Strategi Jasa SEO Serang Banten" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl" 
              priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Memiliki website tanpa optimasi SEO ibarat membangun ruko mewah di tengah hutan. Tidak ada yang berkunjung, dan tidak ada penjualan. <strong>Jasa SEO Serang</strong> dari SerangDev hadir untuk menempatkan bisnis Anda tepat di depan calon pelanggan yang sedang mencari produk atau layanan Anda melalui Google.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mengapa Bisnis Anda Membutuhkan SEO Lokal di Serang?</h2>
            <p>
              Perilaku konsumen di Banten telah berubah. Saat ini, orang tidak lagi mencari jasa lewat brosur, melainkan lewat pencarian <em>Jasa [Produk] Terdekat</em> atau <em>Terbaik di Serang</em>. Jika website Anda tidak muncul di halaman pertama, Anda secara sukarela memberikan pelanggan tersebut kepada kompetitor Anda.
            </p>
            <p>
              Strategi <strong>SEO Lokal</strong> yang kami terapkan fokus pada optimasi <strong>Google Maps (GMB)</strong> dan kata kunci berbasis wilayah. Ini adalah cara paling efektif dan efisien bagi UMKM maupun korporasi di Serang untuk memenangkan persaingan pasar regional.
            </p>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">4 Pilar Utama Strategi SEO SerangDev</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-2 border-b border-white/5 pb-4 md:border-b-0">
                <p className="font-bold text-blue-400">1. Technical SEO Audit</p>
                <p className="text-sm">Memperbaiki struktur kode website agar ramah terhadap bot Google, meningkatkan kecepatan loading, dan memastikan website mobile-friendly.</p>
              </div>
              <div className="space-y-2 border-b border-white/5 pb-4 md:border-b-0">
                <p className="font-bold text-blue-400">2. On-Page Optimization</p>
                <p className="text-sm">Optimasi konten dengan riset kata kunci yang tepat, penggunaan heading tag (H1-H3), dan penulisan meta description yang memicu klik.</p>
              </div>
              <div className="space-y-2 border-b border-white/5 pb-4 md:border-b-0">
                <p className="font-bold text-blue-400">3. Local Citation & GMB</p>
                <p className="text-sm">Mengelola Google Business Profile bisnis Anda agar muncul di Local Pack (Peta) saat orang mencari layanan di area Serang dan sekitarnya.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">4. High-Quality Backlinking</p>
                <p className="text-sm">Membangun otoritas website melalui tautan berkualitas dari situs relevan, meningkatkan kepercayaan Google terhadap brand Anda.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Investasi Jangka Panjang yang Menghasilkan</h2>
            <p>
              Berbeda dengan iklan berbayar (FB Ads atau Google Ads) yang traffic-nya akan berhenti saat saldo Anda habis, SEO adalah investasi jangka panjang. Website yang telah dioptimasi dengan benar akan terus mendatangkan pengunjung berkualitas secara gratis selama bertahun-tahun.
            </p>
            <p>
              Sebagai <strong>pakar SEO di Banten</strong>, kami mengutamakan teknik <em>White-Hat SEO</em> yang aman dari algoritma Google. Kami tidak menjanjikan peringkat nomor 1 dalam semalam, karena SEO yang berkualitas membutuhkan proses riset, eksekusi, dan monitoring yang konsisten.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Pertanyaan Umum Mengenai SEO</h2>
            <div className="space-y-4">
              <details className="group bg-white/5 p-4 rounded-lg border border-white/10 cursor-pointer">
                <summary className="font-bold text-white group-hover:text-blue-400 transition-colors">Berapa lama hasil SEO terlihat?</summary>
                <p className="mt-2 text-sm leading-relaxed">Biasanya hasil mulai terlihat signifikan pada bulan ke-3 hingga ke-6, tergantung pada tingkat persaingan kata kunci dan kondisi awal website Anda.</p>
              </details>
              <details className="group bg-white/5 p-4 rounded-lg border border-white/10 cursor-pointer">
                <summary className="font-bold text-white group-hover:text-blue-400 transition-colors">Apakah ada jaminan halaman 1 Google?</summary>
                <p className="mt-2 text-sm leading-relaxed">Secara resmi, tidak ada agensi yang bisa memberikan jaminan mutlak karena algoritma adalah milik Google. Namun, dengan strategi yang tepat, peluang Anda untuk mendominasi halaman pertama sangatlah besar.</p>
              </details>
            </div>
          </section>

          <section className="text-center bg-blue-600 p-10 rounded-3xl space-y-6 shadow-2xl shadow-blue-600/20">
            <h2 className="text-3xl font-bold text-white">Konsultasi Strategi SEO Gratis</h2>
            <p className="text-white/90">Biarkan tim ahli kami menganalisis website Anda dan memberikan rekomendasi strategi SEO yang tepat untuk mengalahkan kompetitor Anda.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold transition-all hover:bg-gray-100">
                Analisis Website Saya
              </button>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10 flex flex-wrap gap-6 text-sm">
            <Link href="/jasa/serang" className="text-blue-400 hover:underline">Jasa Website Serang</Link>
            <Link href="/jasa/banten" className="text-blue-400 hover:underline">Web Developer Banten</Link>
            <Link href="/jasa/biaya-pembuatan-website-serang" className="text-blue-400 hover:underline">Harga Paket SEO</Link>
          </section>

        </article>

        <div className="lg:col-span-3">
          <SiloSidebar />
        </div>
      </div>
    </>
  );
}