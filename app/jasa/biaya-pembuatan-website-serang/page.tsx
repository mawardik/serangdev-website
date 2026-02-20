import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiloSidebar from "@/components/layout/SiloSidebar";

export const metadata: Metadata = {
  title: "Biaya Pembuatan Website Serang & Banten 2026 | Harga Transparan",
  description: "Daftar harga & biaya pembuatan website di Serang, Banten. Mulai dari paket UMKM hingga Corporate. Transparan, tanpa biaya tersembunyi, dan hasil profesional.",
  keywords: [
    "biaya pembuatan website serang",
    "harga jasa website banten",
    "paket website murah serang",
    "rincian biaya bikin web",
    "jasa website banten harga",
    "estimasi harga website perusahaan"
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/biaya-pembuatan-website-serang",
  },
};

export default function BiayaWebsitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Daftar Harga Jasa Website",
    "priceCurrency": "IDR",
    "description": "Rincian biaya pembuatan website profesional di wilayah Serang dan Banten untuk berbagai sektor bisnis.",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": 1
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 max-w-7xl mx-auto px-4 pt-10 pb-20 text-justify">
        
        <article className="lg:col-span-7 space-y-12">
          
          <section className="py-0 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-0 text-left">
              Biaya Pembuatan Website di Serang: Panduan Harga Transparan & Edukasi Investasi Digital 2026
            </h1>
            <Image 
              src="/pricing-header.webp" 
              alt="Estimasi Biaya Pembuatan Website Serang Banten" 
              width={900} height={500} 
              className="rounded-xl border border-white/10 shadow-2xl" 
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              Banyak calon klien di Serang dan Banten bertanya, <em>Berapa sebenarnya biaya pembuatan website yang ideal?</em>. Jawaban singkatnya: Tergantung kebutuhan. Namun, di <strong>SerangDev</strong>, kami percaya bahwa transparansi adalah kunci kerja sama jangka panjang. Kami akan membedah rincian biaya secara jujur agar Anda tidak terjebak dengan harga murah yang berakhir mengecewakan.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Mengapa Harga Website Sangat Bervariasi?</h2>
            <p>
              Di pasar Banten, Anda mungkin menemukan penawaran mulai dari Rp500 ribu hingga Rp50 juta. Perbedaan ini bukan sekadar margin keuntungan agensi, melainkan komponen teknis yang ada di dalamnya. Website murah biasanya menggunakan template gratisan yang berat, lambat, dan rentan terhadap peretasan.
            </p>
            <p>
              Sebaliknya, investasi pada <strong>jasa website profesional</strong> mencakup biaya lisensi teknologi, desain UI/UX yang dikustomisasi, penulisan konten SEO, hingga optimasi server agar website tidak <em>down</em> saat diakses banyak orang. Di SerangDev, setiap rupiah yang Anda keluarkan dialokasikan untuk performa dan keamanan.
            </p>
          </section>

          <section className="py-0 space-y-6">
            <h2 className="text-3xl font-semibold text-white text-left">Estimasi Paket Investasi SerangDev</h2>
            <div className="overflow-x-auto border border-white/10 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 text-blue-400">
                  <tr>
                    <th className="p-4 border-b border-white/10">Kategori Paket</th>
                    <th className="p-4 border-b border-white/10">Estimasi Biaya</th>
                    <th className="p-4 border-b border-white/10">Cocok Untuk</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="p-4">Paket UMKM / Landing Page</td>
                    <td className="p-4">Rp 1.500.000 - Rp 3.500.000</td>
                    <td className="p-4">Promosi Produk, Portofolio Personal</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="p-4">Paket Company Profile</td>
                    <td className="p-4">Rp 5.000.000 - Rp 15.000.000</td>
                    <td className="p-4">Perusahaan Korporat, Pabrik, Yayasan</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="p-4">Sistem Informasi / Web Apps</td>
                    <td className="p-4">Rp 15.000.000++</td>
                    <td className="p-4">Sekolah (PPDB), Instansi, E-Commerce Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 italic text-center">
              *Harga di atas adalah estimasi awal. Biaya akhir ditentukan setelah sesi konsultasi detail.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Rincian Komponen Biaya yang Anda Bayar</h2>
            <p>Agar Anda memiliki gambaran utuh, berikut adalah komponen yang membentuk struktur <strong>biaya pembuatan website di Banten</strong>:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-2">1. Infrastruktur (Domain & Hosting)</h4>
                <p className="text-sm">Biaya tahunan untuk menyewa alamat (misal .com atau .id) dan ruang penyimpanan data di server lokal atau global yang cepat.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-2">2. Desain & Pengembangan</h4>
                <p className="text-sm">Proses pengkodean menggunakan teknologi Next.js untuk memastikan website interaktif, responsif di HP, dan sangat ringan.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-2">3. Optimasi SEO Dasar</h4>
                <p className="text-sm">Pemasangan meta tag, konfigurasi sitemap, dan pendaftaran ke Google Search Console agar website langsung terindeks.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-2">4. Keamanan (SSL & Firewall)</h4>
                <p className="text-sm">Enkripsi data pengunjung (ikon gembok) dan perlindungan dari serangan malware atau peretasan massal.</p>
              </div>
            </div>
          </section>

          <section className="py-0 space-y-6 text-gray-300">
            <h2 className="text-3xl font-semibold text-white text-left">Website: Pengeluaran atau Investasi?</h2>
            <p>
              Banyak pengusaha di Serang melihat website sebagai beban biaya. Namun, mari kita lihat dari sudut pandang <strong>Return on Investment (ROI)</strong>. Sebuah website yang menduduki peringkat satu di Google untuk kata kunci jasa Anda di Serang, dapat mendatangkan prospek (leads) secara otomatis selama 24 jam sehari tanpa biaya iklan tambahan.
            </p>
            <p>
              Jika satu proyek yang Anda dapatkan dari website bernilai puluhan juta, maka biaya pembuatan website tersebut sebenarnya sudah kembali modal hanya dalam satu atau dua kali transaksi saja. Inilah alasan mengapa perusahaan besar tidak keberatan mengeluarkan biaya lebih untuk kualitas yang terjamin.
            </p>
          </section>

          <section className="py-0 space-y-6 text-gray-300 border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-semibold text-white">Waspadai Biaya Tersembunyi (Hidden Costs)</h2>
            <p>
              Beberapa agensi menawarkan harga sangat murah di awal, namun menagih biaya tambahan yang tidak masuk akal untuk hal-hal seperti:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Biaya update konten yang mahal.</li>
              <li>Biaya perbaikan jika website error.</li>
              <li>Biaya perpanjangan tahunan yang melonjak berkali-kali lipat.</li>
            </ul>
            <p>
              Di <strong>SerangDev</strong>, semua rincian biaya perpanjangan dan perawatan disampaikan di depan dalam kontrak kerja sama. Tidak ada kejutan biaya di akhir tahun.
            </p>
          </section>
          
          <section className="text-center bg-gradient-to-r from-blue-700/20 to-blue-900/20 p-10 rounded-3xl border border-blue-500/20 space-y-6">
            <h2 className="text-3xl font-bold text-white">Dapatkan Estimasi Biaya Akurat Sekarang</h2>
            <p className="text-gray-300">Setiap bisnis memiliki kebutuhan unik. Ceritakan visi Anda dan kami akan buatkan penawaran harga yang sesuai dengan budget dan target Anda.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                Konsultasi Biaya Gratis
              </button>
              <Link href="/jasa/serang" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10 block">
                Lihat Area Layanan
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