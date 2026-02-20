import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Tangerang | Startup & Business Solutions",
  description: "Web developer profesional di Tangerang & Tangsel. Jasa pembuatan website startup, e-commerce, dan corporate dengan teknologi Next.js terbaru. Cepat & SEO Friendly.",
  keywords: [
    "jasa website tangerang",
    "web developer tangerang selatan",
    "jasa website tangsel",
    "bikin website bsd",
    "jasa seo tangerang",
    "pembuatan web ecommerce tangerang",
    "agency website tangerang"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/tangerang",
  },
};

export default function JasaTangerangPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Tangerang (Startup & Modern Business)",
    "description": "Layanan pengembangan website modern menggunakan teknologi Next.js untuk bisnis, startup, dan retail di wilayah Tangerang Raya.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tangerang",
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
              Jasa Pembuatan Website Tangerang: Solusi Digital untuk Startup & Bisnis Modern
            </h1>
            <Image 
              src="/tangerang-digital.webp" 
              alt="Jasa Website Profesional di Tangerang dan Tangsel" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl" 
              priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Tangerang Raya, termasuk BSD City, Alam Sutera, dan Gading Serpong, telah bertransformasi menjadi pusat inovasi digital di Banten. <strong>SerangDev</strong> menghadirkan <strong>jasa pembuatan website Tangerang</strong> yang dirancang khusus untuk memenuhi ekspektasi bisnis modern yang dinamis, cepat, dan mengutamakan estetika visual tinggi.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Teknologi Cutting-Edge untuk Ekosistem Digital Tangerang</h2>
            <p>
              Di pasar Tangerang yang sangat kompetitif, memiliki website yang sekadar online tidaklah cukup. Anda membutuhkan platform yang memiliki <strong>Core Web Vitals</strong> sempurna untuk bersaing di halaman pertama Google. Kami menggunakan teknologi berbasis React (Next.js) yang memberikan kecepatan loading di bawah 2 detik—sebuah standar wajib untuk menarik minat audiens di kawasan urban.
            </p>
            <p>
              Baik Anda menjalankan startup di Gading Serpong, toko retail di Tangsel, maupun perusahaan jasa di Karawaci, kami memastikan setiap baris kode yang kami tulis mendukung skalabilitas bisnis Anda di masa depan.
            </p>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">Layanan Spesialis Kami di Tangerang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-2 border-l-2 border-blue-500 pl-4">
                <p className="font-bold text-blue-400">Custom E-Commerce Solution</p>
                <p className="text-sm">Membangun toko online yang terintegrasi dengan payment gateway dan sistem ekspedisi otomatis untuk efisiensi penjualan.</p>
              </div>
              <div className="space-y-2 border-l-2 border-blue-500 pl-4">
                <p className="font-bold text-blue-400">Startup Landing Page</p>
                <p className="text-sm">Desain interaktif yang fokus pada konversi data (leads) untuk kebutuhan presentasi investor atau peluncuran produk.</p>
              </div>
              <div className="space-y-2 border-l-2 border-blue-500 pl-4">
                <p className="font-bold text-blue-400">SEO & Growth Hacking</p>
                <p className="text-sm">Strategi optimasi kata kunci yang kompetitif untuk memastikan brand Anda mendominasi pencarian di wilayah Tangerang Raya.</p>
              </div>
              <div className="space-y-2 border-l-2 border-blue-500 pl-4">
                <p className="font-bold text-blue-400">Web App Development</p>
                <p className="text-sm">Pengembangan aplikasi berbasis web (SaaS) yang kompleks dengan dashboard manajemen data yang intuitif.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mengapa Tangerang Memilih SerangDev?</h2>
            <p>
              Meskipun kami berbasis di Serang, tim kami memiliki mobilitas tinggi untuk melayani klien di area <strong>BSD, Bintaro, dan Karawaci</strong>. Kami menawarkan kombinasi unik: <em>Kualitas Agensi Jakarta dengan Harga Agensi Lokal Banten</em>.
            </p>
            <p>
              Kami tidak hanya membangun website, kami membangun identitas digital. Dengan pemahaman mendalam tentang perilaku konsumen urban di Tangerang, kami menciptakan UI/UX yang tidak hanya cantik secara visual, tetapi juga nyaman digunakan (user-centric design), sehingga meningkatkan retensi pengunjung pada situs Anda.
            </p>
          </section>

          <section className="text-center bg-gradient-to-br from-blue-600/20 to-transparent p-10 rounded-3xl border border-blue-600/20 space-y-6">
            <h2 className="text-3xl font-bold text-white">Siap Membangun Dominasi Digital di Tangerang?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Jangan biarkan kompetitor Anda mengambil porsi pasar lebih dulu. Konsultasikan kebutuhan website bisnis Anda sekarang secara gratis.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl">
                Dapatkan Proposal Gratis
              </button>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10 flex flex-wrap gap-6 text-sm">
            <Link href="/jasa/serang" className="text-blue-400 hover:underline">Jasa Website Serang</Link>
            <Link href="/jasa/cilegon" className="text-blue-400 hover:underline">Jasa Website Cilegon</Link>
            <Link href="/jasa/banten" className="text-blue-400 hover:underline">Jasa Website Banten</Link>
            <Link href="/jasa/biaya-pembuatan-website-serang" className="text-blue-400 hover:underline">Daftar Harga</Link>
          </section>

        </article>

        {/* SIDEBAR */}
        <div className="lg:col-span-3">
          <SiloSidebar />
        </div>
      </div>
    </>
  );
}