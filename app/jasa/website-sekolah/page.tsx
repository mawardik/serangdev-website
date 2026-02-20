import { Metadata } from "next";
import Image from "next/image";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Sekolah & PPDB Online | SerangDev",
  description: "Layanan jasa website sekolah modern di Banten dengan fitur PPDB online, e-learning, dan manajemen administrasi digital untuk institusi pendidikan.",
  keywords: ["jasa website sekolah", "bikin web sekolah banten", "jasa ppdb online serang", "website sekolah profesional", "jasa website kampus", "sistem informasi sekolah"],
  alternates: { canonical: "https://serangdev.com/jasa/website-sekolah" },
};

export default function JasaSekolahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Sekolah & Kampus",
    "description": "Solusi digital lengkap untuk institusi pendidikan, mulai dari profil sekolah hingga sistem pendaftaran siswa baru secara online.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SerangDev",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Serang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20">
        <article className="lg:col-span-7 space-y-12 text-justify">
          <section className="py-0  space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0 text-left">
              Jasa Website Sekolah: Transformasi Digital Pendidikan Modern
            </h1>
            <Image src="/sekolah.webp" alt="Jasa Website Sekolah Profesional SerangDev" width={900} height={500} className="rounded-xl border border-white/10 shadow-lg" priority />
            <p className="text-lg text-gray-300 leading-relaxed">
              Dunia pendidikan saat ini dituntut untuk bergerak lebih cepat dan transparan. <strong>SerangDev</strong> hadir memberikan solusi melalui <strong>jasa pembuatan website sekolah</strong> yang dirancang untuk memperkuat branding institusi sekaligus menyederhanakan proses administrasi antara guru, siswa, dan orang tua murid.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Website Sebagai Pusat Informasi & Pemasaran Institusi</h2>
            <p>
              Bagi institusi pendidikan seperti TK, SD, SMP, SMA/SMK hingga Perguruan Tinggi, memiliki website resmi bukan lagi pilihan, melainkan kebutuhan primer. Website berfungsi sebagai jendela utama bagi calon wali murid untuk melihat fasilitas, prestasi, dan kualitas kurikulum sekolah Anda sebelum mereka memutuskan untuk mendaftar.
            </p>
            <p>
              Dengan optimasi SEO lokal yang kami terapkan, sekolah Anda akan lebih mudah ditemukan ketika masyarakat mencari kata kunci seperti Sekolah terbaik di Banten atau SMK Unggulan di Serang. Ini adalah investasi jangka panjang untuk menjaga kuantitas pendaftar siswa baru setiap tahunnya.
            </p>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">Fitur Unggulan Ekosistem Digital Sekolah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-2">
                <p className="font-bold text-blue-400">PPDB Online Terintegrasi</p>
                <p className="text-sm">Sistem pendaftaran mandiri yang memungkinkan orang tua mengunggah berkas tanpa harus datang ke sekolah, lengkap dengan dashboard verifikasi admin.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">E-Learning & LMS</p>
                <p className="text-sm">Ruang digital untuk berbagi materi pembelajaran, tugas, dan ujian online yang aman dan terstruktur bagi seluruh jenjang kelas.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Manajemen Alumni & Prestasi</p>
                <p className="text-sm">Database alumni yang solid dan galeri prestasi siswa untuk membangun kepercayaan publik secara berkesinambungan.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Integrasi Domain .SCH.ID</p>
                <p className="text-sm">Bantuan penuh pengurusan administrasi domain resmi sekolah Indonesia untuk menjamin keaslian identitas digital institusi.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Teknologi Web Pendidikan yang Tangguh</h2>
            <p>
              Kami memahami bahwa saat musim pendaftaran (PPDB), traffic website sekolah akan meningkat drastis. Oleh karena itu, kami membangun website sekolah menggunakan infrastruktur yang mampu menangani beban pengunjung tinggi tanpa mengalami *crash*. Kecepatan loading adalah prioritas kami agar orang tua siswa tidak kesulitan saat mengakses formulir pendaftaran melalui smartphone.
            </p>
          </section>

          <section className="text-center bg-blue-600/5 p-10 rounded-2xl border border-blue-600/20 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Wujudkan Sekolah Digital Bersama SerangDev</h2>
            <p className="text-gray-300 max-w-xl mx-auto italic">Membangun masa depan pendidikan dimulai dari keterbukaan informasi dan kemudahan teknologi.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg">
              Dapatkan Penawaran Sekolah
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