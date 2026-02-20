import { Metadata } from "next";
import Image from "next/image";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Maintenance Website Serang | Perawatan & Keamanan Web 24/7",
  description: "Layanan jasa maintenance website profesional di Serang & Banten. Meliputi update konten, backup rutin, security hardening, dan optimasi kecepatan.",
  keywords: [
    "jasa maintenance website serang",
    "perawatan website banten",
    "jasa update konten web",
    "keamanan website perusahaan",
    "jasa perbaikan website error",
    "maintenance web bulanan"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/maintenance-website",
  },
};

export default function MaintenanceWebsitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Maintenance & Pemeliharaan Website",
    "description": "Layanan pemeliharaan website teknis secara berkala untuk menjaga performa dan keamanan aset digital.",
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
              Jasa Maintenance Website: Menjaga Performa & Keamanan Aset Digital Anda
            </h1>
            <Image 
              src="/maintenance-web.webp" 
              alt="Jasa Perawatan Website Profesional SerangDev" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl" 
              priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Website adalah investasi jangka panjang yang memerlukan perawatan rutin. Tanpa pemeliharaan yang tepat, website perusahaan Anda akan melambat, rentan terhadap serangan <em>malware</em>, dan kehilangan peringkat di Google. <strong>SerangDev</strong> hadir dengan layanan <strong>jasa maintenance website</strong> menyeluruh untuk memastikan bisnis Anda tetap online tanpa gangguan teknis.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mengapa Website Anda Membutuhkan Maintenance Rutin?</h2>
            <p>
              Dunia digital terus berubah. Browser diperbarui, algoritma Google berganti, dan ancaman siber semakin canggih setiap harinya. Mengabaikan maintenance website sama saja dengan membiarkan aset bisnis Anda mengalami penyusutan nilai.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">Kecepatan</h3>
                <p className="text-sm text-gray-400">Pembersihan database dan cache secara rutin agar loading tetap instan.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">Keamanan</h3>
                <p className="text-sm text-gray-400">Update security patch untuk menutup celah peretasan dan injeksi script.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-blue-400 font-bold mb-2">Reputasi</h3>
                <p className="text-sm text-gray-400">Menghindari broken link atau error yang bisa merusak kepercayaan klien.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">Apa Saja yang Kami Lakukan?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Backup Data Mingguan/Bulanan secara otomatis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Update Konten, Gambar, dan Informasi Bisnis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Monitoring Uptime 24/7 (Cegah Web Down).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✔</span> 
                <span>Perbaikan Error/Bug dan Optimasi Database.</span>
              </li>
            </ul>
          </section>

          <section className="text-center bg-blue-600/10 p-10 rounded-3xl border border-blue-600/20 space-y-6">
            <h2 className="text-2xl font-bold text-white">Fokuslah pada Bisnis, Biarkan Kami yang Mengurus Teknis</h2>
            <p className="text-gray-300">Dapatkan laporan bulanan mengenai kesehatan website Anda bersama tim engineer SerangDev.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl">
              Hubungi Admin Maintenance
            </button>
          </section>
        </article>
        <div className="lg:col-span-3"><SiloSidebar /></div>
      </div>
    </>
  );
}