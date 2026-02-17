import { Metadata } from "next";
import Link from "next/link";

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
  twitter: {
    card: "summary_large_image",
    title: "Jasa Bikin Web Serang Profesional",
    description:
      "Website profesional dan SEO friendly untuk bisnis di Serang.",
  },
};


export default function JasaSerangPage() {
  return (
    <main className="min-h-screen bg-[#050638] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Jasa Bikin Web Serang Profesional, Cepat & SEO Friendly
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            SerangDev adalah penyedia jasa pembuatan website di Serang yang
            berfokus pada performa, desain modern, dan optimasi mesin pencari.
            Kami membantu UMKM, perusahaan, startup, dan bisnis lokal di Serang
            memiliki website profesional yang mampu meningkatkan kredibilitas
            dan konversi penjualan secara konsisten.
          </p>
        </section>

        {/* PROBLEM SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Mengapa Bisnis di Serang Wajib Memiliki Website?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Perkembangan digital di Kota Serang dan sekitarnya semakin cepat.
            Konsumen kini mencari produk dan layanan melalui Google sebelum
            mengambil keputusan. Tanpa website, bisnis Anda berisiko kehilangan
            peluang dari calon pelanggan yang aktif mencari solusi secara
            online.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Website bukan sekadar tampilan digital, tetapi aset bisnis jangka
            panjang. Dengan website yang SEO friendly, bisnis Anda dapat
            muncul di hasil pencarian untuk kata kunci seperti
            <strong> jasa bikin web Serang </strong>
            atau <strong> web developer Serang</strong>.
          </p>
        </section>

        {/* LAYANAN */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Layanan Jasa Pembuatan Website di Serang
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>Website Company Profile</strong> — Cocok untuk perusahaan
              yang ingin meningkatkan kredibilitas dan branding profesional.
            </li>
            <li>
              <strong>Website UMKM</strong> — Solusi digital untuk pelaku usaha
              kecil agar lebih dikenal dan mudah ditemukan secara online.
            </li>
            <li>
              <strong>Toko Online / E-Commerce</strong> — Sistem penjualan
              online dengan integrasi pembayaran dan manajemen produk.
            </li>
            <li>
              <strong>Custom Web Application</strong> — Pengembangan sistem
              berbasis Laravel, Next.js, atau teknologi modern lainnya.
            </li>
          </ul>
        </section>

        {/* KEUNGGULAN */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Keunggulan Web Developer Serang dari SerangDev
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Optimasi Core Web Vitals & kecepatan tinggi</li>
            <li>✔ Desain modern, responsive & mobile-first</li>
            <li>✔ Struktur SEO teknis yang rapi</li>
            <li>✔ Keamanan dan performa teruji</li>
            <li>✔ Support dan maintenance profesional</li>
          </ul>
        </section>

        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
                Optimasi SEO Lokal untuk Bisnis di Serang
            </h2>

            <p className="text-gray-300 leading-relaxed">
                Tidak cukup hanya memiliki website profesional Serang, bisnis Anda juga
                harus mudah ditemukan di Google. Kami menerapkan strategi SEO lokal agar
                website Anda berpotensi muncul ketika calon pelanggan mencari kata kunci
                seperti <strong>jasa pembuatan website di Serang</strong>,
                <strong> web developer Serang</strong>, atau
                <strong> bikin website Serang</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
                Optimasi ini meliputi struktur heading yang rapi, metadata yang tepat,
                kecepatan loading tinggi, hingga integrasi Google Search Console dan
                Google Analytics. Dengan pendekatan ini, website Anda tidak hanya tampil
                menarik, tetapi juga memiliki fondasi SEO yang kuat untuk bersaing di
                tingkat lokal maupun regional Banten.
            </p>

            <p className="text-gray-300 leading-relaxed">
                Jika bisnis Anda berkembang ke luar kota, struktur yang kami bangun juga
                siap dikembangkan untuk menjangkau pasar yang lebih luas, termasuk sebagai
                developer website Banten yang kompetitif di tingkat provinsi.
            </p>
        </section>

        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
                Teknologi Modern dengan Standar Performa Tinggi
            </h2>

            <p className="text-gray-300 leading-relaxed">
                Sebagai penyedia jasa web UMKM Serang dan perusahaan, kami menggunakan
                teknologi modern seperti Next.js, Laravel, dan WordPress sesuai kebutuhan
                proyek. Setiap website dibangun dengan pendekatan mobile-first dan
                berfokus pada Core Web Vitals agar memiliki performa optimal di perangkat
                mobile maupun desktop.
            </p>

            <p className="text-gray-300 leading-relaxed">
                Website yang cepat bukan hanya meningkatkan pengalaman pengguna, tetapi
                juga berdampak langsung pada peringkat di mesin pencari. Inilah mengapa
                kami mengutamakan optimasi struktur kode, kompresi gambar, dan manajemen
                asset yang efisien.
            </p>

            <p className="text-gray-300 leading-relaxed">
                Dengan kombinasi desain modern dan struktur teknis yang solid, SerangDev
                hadir sebagai solusi <strong>website profesional Serang</strong> yang
                tidak hanya menarik secara visual, tetapi juga siap mendukung pertumbuhan
                bisnis secara jangka panjang.
            </p>
        </section>

        {/* PROSES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Proses Pembuatan Website di Serang
          </h2>

          <ol className="space-y-4 text-gray-300 list-decimal pl-6">
            <li>Konsultasi kebutuhan bisnis</li>
            <li>Perencanaan struktur & desain</li>
            <li>Pengembangan & optimasi</li>
            <li>Testing performa & SEO teknis</li>
            <li>Launch & monitoring</li>
          </ol>
        </section>

        {/* INTERNAL LINKING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Area Layanan Sekitar Serang
          </h2>

          <p className="text-gray-300">
            Kami juga melayani pengembangan website untuk wilayah sekitar
            seperti{" "}
            <Link href="/lokasi/cilegon" className="text-blue-400 underline">
              Cilegon
            </Link>{" "}
            dan{" "}
            <Link href="/lokasi/pandeglang" className="text-blue-400 underline">
              Pandeglang
            </Link>.
            Untuk solusi website UMKM, Anda juga dapat melihat layanan{" "}
            <Link href="/jasa/umkm" className="text-blue-400 underline">
              Jasa Website UMKM
            </Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            FAQ Jasa Bikin Web Serang
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Berapa biaya jasa bikin website di Serang?</strong><br />
              Biaya tergantung pada kompleksitas fitur dan kebutuhan desain.
              Kami menyediakan paket fleksibel sesuai kebutuhan bisnis.
            </p>

            <p>
              <strong>Berapa lama proses pembuatan website?</strong><br />
              Umumnya 2–4 minggu tergantung tingkat kompleksitas.
            </p>

            <p>
              <strong>Apakah website sudah termasuk SEO?</strong><br />
              Ya, kami menerapkan struktur SEO teknis dasar agar website siap
              bersaing di mesin pencari.
            </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold">
                Layanan Website Lainnya
            </h2>

            <p className="text-gray-300">
                Selain melayani jasa pembuatan website di Serang, kami juga menyediakan
                layanan skala provinsi melalui halaman{" "}
                <a href="/jasa/banten" className="text-blue-400 underline">
                jasa website Banten
                </a>{" "}
                serta solusi umkm melalui{" "}
                <a href="/jasa/umkm" className="text-blue-400 underline">
                jasa website untuk UMKM seluruh Indonesia
                </a>.
            </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6 pt-12">
          <h2 className="text-2xl font-semibold">
            Siap Meningkatkan Bisnis Anda di Serang?
          </h2>
          <p className="text-gray-300">
            Konsultasikan kebutuhan website Anda bersama tim SerangDev dan
            dapatkan solusi digital yang tepat untuk bisnis Anda.
          </p>
        </section>

      </div>
    </main>
  );
}
