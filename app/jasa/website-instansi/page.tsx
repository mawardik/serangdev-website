import { Metadata } from "next";
import Image from "next/image";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Instansi & Desa Terpercaya | SerangDev",
  description: "Layanan website resmi untuk instansi pemerintah, organisasi, dan sistem informasi desa (SID) di Banten. Aman, transparan, dan sesuai standar UU KIP.",
  keywords: [
    "jasa website instansi",
    "jasa website desa banten",
    "bikin website organisasi serang",
    "sistem informasi desa serang",
    "website pemerintahan profesional",
    "jasa website pemerintah banten"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/website-instansi",
  },
};

export default function JasaInstansiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Instansi & Pemerintahan",
    "description": "Pengembangan website resmi untuk instansi pemerintah dan badan publik dengan standar keamanan tinggi.",
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
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20">
        
        <article className="lg:col-span-7 space-y-12 text-justify">
          
          <section className="py-0 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0 text-left">
              Jasa Website Sistem Informasi Pemerintah: Mewujudkan Digitalisasi Publik yang Transparan
            </h1>
            <Image
              src="/instansi.webp" 
              alt="Jasa Website Instansi Pemerintahan SerangDev"
              width={900} height={500} className="rounded-xl border border-white/10 shadow-lg" priority
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Kepercayaan masyarakat terhadap institusi publik dan pemerintahan dimulai dari kemudahan akses informasi. <strong>SerangDev</strong> hadir sebagai mitra teknologi untuk mendukung percepatan transformasi digital melalui <strong>jasa pembuatan website instansi</strong> dan organisasi yang aman, kredibel, dan fungsional sesuai standar regulasi yang berlaku.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Urgensi Website Resmi bagi Sektor Publik</h2>
            <p>
              Di era keterbukaan informasi, setiap badan publik, organisasi profesi, hingga pemerintah desa diwajibkan memiliki kanal komunikasi resmi. Website bukan hanya berfungsi sebagai profil, tetapi juga sebagai media akuntabilitas kinerja kepada publik. Bagi pemerintah desa, penggunaan <strong>Sistem Informasi Desa (SID)</strong> menjadi kunci untuk menyederhanakan birokrasi dan administrasi kependudukan.
            </p>
            <p>
              Kami memahami bahwa sektor publik memiliki standar keamanan data yang jauh lebih ketat. SerangDev menerapkan protokol pengamanan berlapis untuk memastikan aset digital instansi Anda terlindungi dari serangan siber yang dapat merusak citra lembaga di mata masyarakat.
            </p>
          </section>

          <section className="bg-white/5 p-7 md:p-10 rounded-2xl border border-white/10 space-y-6 not-prose">
            <h2 className="text-2xl font-semibold text-white">Komitmen Standar UU KIP & Keamanan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Arsip & Dokumen Publik</p>
                <p className="text-sm">Penyediaan fitur publikasi dokumen (PDF) untuk pengumuman APBD, RKP, atau laporan kegiatan yang mudah diunduh masyarakat.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Proteksi Keamanan Siber</p>
                <p className="text-sm">Implementasi SSL Certificate, proteksi brute force, dan pemantauan server secara berkala untuk menjaga stabilitas web pemerintah.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Layanan Administrasi</p>
                <p className="text-sm">Fitur permohonan surat menyurat online bagi warga untuk mempercepat pelayanan publik di semua tingkatan.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-blue-400">Aksesibilitas Tinggi</p>
                <p className="text-sm">Optimasi tampilan (UI/UX) yang ramah bagi semua kalangan, termasuk kemudahan navigasi bagi masyarakat awam.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mendukung Domain Pemerintah & Desa (.GO.ID / .DESA.ID)</h2>
            <p>
              Keabsahan sebuah website instansi dan desa sangat bergantung pada penggunaan ekstensi domain resmi. SerangDev membantu proses administrasi dan persyaratan teknis pendaftaran domain <strong>.go.id</strong> untuk lembaga pemerintah dan <strong>.desa.id</strong> untuk pemerintah desa melalui koordinasi dengan pihak terkait (PANDI/Kominfo).
            </p>
            <p>
              Selain itu, kami menyediakan layanan pelatihan (training) bagi operator instansi atau admin desa agar mereka mampu mengelola konten website secara mandiri, mulai dari mengunggah berita kegiatan hingga memperbarui data publikasi secara rutin.
            </p>
          </section>

          <section className="py-0 space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold text-white">Partner Digital untuk Instansi di Wilayah Banten</h2>
            <p className="text-gray-300 leading-relaxed">
              Dengan basis operasional di Kota Serang, kami memiliki aksesibilitas yang cepat untuk melayani instansi dan pemerintah daerah di seluruh Provinsi Banten. Kami siap mendiskusikan kebutuhan digitalisasi instansi Anda melalui kunjungan langsung untuk memastikan solusi yang kami berikan sesuai dengan karakteristik daerah.
            </p>
          </section>

          <section className="text-center bg-blue-600/5 p-10 rounded-2xl border border-blue-600/20 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Siap Membangun Kredibilitas Publik?</h2>
            <p className="text-gray-300 max-w-xl mx-auto italic">
              Transformasi digital bukan lagi pilihan bagi instansi pemerintah, melainkan kewajiban untuk melayani rakyat dengan lebih baik.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl">
              Konsultasi Proyek Instansi
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