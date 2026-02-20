import { Metadata } from "next";
import Image from "next/image";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Redesain Website Serang | Update Tampilan Modern & Mobile Friendly",
  description: "Ubah tampilan website lama Anda menjadi lebih modern, responsif, dan konversi tinggi. Jasa desain ulang website (Redesign) di Banten menggunakan teknologi terbaru.",
  keywords: [
    "jasa redesain website serang",
    "desain ulang website banten",
    "update tampilan web lama",
    "jasa migrasi web ke nextjs",
    "redesign company profile serang"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/redesain-website",
  },
};

export default function RedesainWebsitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Redesain Website (Web Redesign)",
    "description": "Layanan pembaruan visual dan teknis untuk website lama agar lebih modern dan berorientasi pada konversi.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20 text-justify">
        <article className="lg:col-span-7 space-y-12">
          
          <section className="py-0 space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0">
              Jasa Redesain Website: Transformasi Visual & Performa untuk Bisnis Anda
            </h1>
            <Image 
              src="/redesain-web.webp" 
              alt="Jasa Redesain Website SerangDev" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl"
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Apakah website Anda terasa jadul, lambat, atau sulit dibuka di smartphone? Jangan biarkan kesan pertama calon klien hancur karena tampilan yang tidak profesional. <strong>SerangDev</strong> menawarkan <strong>jasa redesain website</strong> untuk mengubah platform lama Anda menjadi mesin penjualan yang modern, cepat, dan berstandar global.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Kapan Website Anda Perlu Didesain Ulang?</h2>
            <p>
              Tanda-tanda website Anda membutuhkan penyegaran (redesign) bukan hanya soal tampilan yang membosankan, tetapi juga soal efektivitas bisnis:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">01.</span>
                <span><strong>Tidak Responsif:</strong> Website berantakan saat dibuka di HP atau tablet.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">02.</span>
                <span><strong>Loading Lambat:</strong> Skor Google PageSpeed yang buruk (warna merah).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">03.</span>
                <span><strong>Navigasi Membingungkan:</strong> Pengunjung kesulitan menemukan informasi yang mereka cari.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">04.</span>
                <span><strong>Perubahan Branding:</strong> Identitas bisnis Anda sudah berkembang namun website tidak mengikutinya.</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-blue-900/20 to-transparent p-10 rounded-2xl border border-blue-500/20 space-y-6">
            <h2 className="text-2xl font-bold text-white">Apa yang Anda Dapatkan dari Redesain?</h2>
            <p className="text-gray-300">Kami tidak hanya mengganti warna. Kami melakukan migrasi ke teknologi modern seperti <strong>Next.js dan Tailwind CSS</strong> untuk memastikan website Anda memiliki performa terbaik dan SEO yang kuat sejak hari pertama peluncuran kembali.</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/5 px-4 py-2 rounded-full text-xs border border-white/10">UI/UX Terkini</span>
              <span className="bg-white/5 px-4 py-2 rounded-full text-xs border border-white/10">Skor SEO 100%</span>
              <span className="bg-white/5 px-4 py-2 rounded-full text-xs border border-white/10">Integrasi WhatsApp</span>
              <span className="bg-white/5 px-4 py-2 rounded-full text-xs border border-white/10">Loading &lt; 2 Detik</span>
            </div>
          </section>

          <section className="text-center py-10">
            <h2 className="text-2xl font-bold text-white mb-6">Siap Memberikan Wajah Baru pada Bisnis Anda?</h2>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold transition-all shadow-xl">
              Minta Proposal Redesain
            </button>
          </section>
        </article>
        <div className="lg:col-span-3"><SiloSidebar /></div>
      </div>
    </>
  );
}