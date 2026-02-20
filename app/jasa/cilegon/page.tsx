import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Cilegon | Solusi Digital Industri & Vendor",
  description: "Jasa website profesional di Cilegon. Spesialis website company profile pabrik, sistem informasi logistik, dan vendor industri. Cepat, aman, dan SEO Friendly.",
  keywords: [
    "jasa website cilegon",
    "web developer cilegon",
    "bikin website perusahaan cilegon",
    "jasa seo cilegon",
    "website vendor industri cilegon",
    "pembuatan web profile pabrik cilegon"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/cilegon",
  },
};

export default function JasaCilegonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Cilegon (Industrial Focus)",
    "description": "Layanan pengembangan website dan sistem informasi khusus untuk sektor industri, manufaktur, dan vendor di Kota Cilegon.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cilegon",
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
              Jasa Pembuatan Website Cilegon: Mitra Digital Sektor Industri & Manufaktur
            </h1>
            <Image 
              src="/cilegon-industrial.webp" 
              alt="Jasa Website Profesional di Kota Cilegon" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl opacity-80" 
              priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Sebagai kota industri terbesar di Banten, Cilegon memiliki standar bisnis yang sangat tinggi. <strong>SerangDev</strong> hadir untuk memberikan layanan <strong>jasa website Cilegon</strong> yang berfokus pada kebutuhan vendor industri, perusahaan manufaktur, dan layanan logistik pelabuhan. Kami memahami bahwa bagi bisnis di Cilegon, website adalah alat vital untuk memenangkan tender dan membangun kepercayaan klien internasional.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Solusi Web untuk Vendor & Perusahaan di Merak - Ciwandan</h2>
            <p>
              Cilegon bukan sekadar kota biasa. Dari kawasan industri <strong>Krakatau Steel</strong> hingga area pelabuhan <strong>Merak dan Ciwandan</strong>, setiap unit bisnis membutuhkan kehadiran digital yang solid. Website yang kami bangun tidak hanya mengedepankan estetika, tetapi juga fungsionalitas teknis yang mendukung profil perusahaan dalam proses prakualifikasi vendor (Vendor Management System).
            </p>
            <p>
              Dengan menggunakan teknologi <strong>Next.js</strong>, kami memastikan website perusahaan Anda memiliki performa terbaik dengan kecepatan akses yang luar biasa, memberikan kesan modern bagi calon mitra kerja Anda dari dalam maupun luar negeri.
            </p>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">Layanan Unggulan Kami di Cilegon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Website Company Profile Industri</p>
                <p className="text-sm">Desain elegan dan profesional yang mencerminkan kapabilitas alat berat, infrastruktur, atau layanan manufaktur Anda.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Sistem Katalog Produk & Jasa</p>
                <p className="text-sm">Presentasi katalog layanan vendor secara sistematis agar mudah dipahami oleh procurement manager perusahaan besar.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Optimasi SEO Lokal Cilegon</p>
                <p className="text-sm">Menempatkan bisnis Anda di peringkat atas pencarian saat klien mencari mitra kerja di wilayah Cilegon dan sekitarnya.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Maintenance & Support</p>
                <p className="text-sm">Layanan pemeliharaan website rutin untuk memastikan aset digital Anda selalu online dan aman dari ancaman siber.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mengapa Memilih Web Developer Lokal Cilegon?</h2>
            <p>
              Memilih <strong>jasa pembuatan website di Cilegon</strong> yang mengerti karakteristik wilayah adalah sebuah keuntungan. Kami siap melakukan kunjungan (on-site visit) ke kantor atau pabrik Anda di Kawasan Industri Krakatau (KIEC), Kawasan Industri Warna Sari, hingga Ciwandan untuk mendiskusikan kebutuhan sistem Anda secara langsung.
            </p>
            <p>
              Kedekatan lokasi memungkinkan koordinasi yang lebih cepat dan dukungan teknis yang lebih responsif dibandingkan agensi di luar wilayah Banten. Kami bukan hanya sekadar vendor, tapi partner digital yang tumbuh bersama ekosistem industri Cilegon.
            </p>
          </section>

          <section className="text-center bg-blue-600/10 p-10 rounded-3xl border border-blue-600/20 space-y-6">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Perkuat Kredibilitas Bisnis Anda di Cilegon</h2>
            <p className="text-gray-300">Jadwalkan sesi konsultasi gratis dan survei kebutuhan sistem digital untuk perusahaan Anda hari ini.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl uppercase">
                Konsultasi Proyek Cilegon
              </button>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10 flex flex-wrap gap-6 text-sm">
            <Link href="/jasa/serang" className="text-blue-400 hover:underline">Jasa Website Serang</Link>
            <Link href="/jasa/banten" className="text-blue-400 hover:underline">Jasa Website Banten</Link>
            <Link href="/jasa/website-perusahaan" className="text-blue-400 hover:underline">Website Corporate</Link>
            <Link href="/jasa/biaya-pembuatan-website-serang" className="text-blue-400 hover:underline">Info Harga</Link>
          </section>

        </article>

        <div className="lg:col-span-3">
          <SiloSidebar />
        </div>
      </div>
    </>
  );
}