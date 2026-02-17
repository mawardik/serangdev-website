import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Website UMKM Profesional & Terjangkau | SerangDev",
  description:
    "Jasa pembuatan website UMKM profesional dan SEO friendly untuk membantu meningkatkan penjualan dan kredibilitas bisnis Anda di seluruh Indonesia.",
  keywords: [
    "jasa website umkm",
    "jasa pembuatan website umkm",
    "bikin website untuk umkm",
    "website murah untuk umkm",
    "website umkm profesional",
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/umkm",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jasa Website UMKM Profesional | SerangDev",
    description:
      "Solusi website profesional untuk UMKM di seluruh Indonesia.",
    url: "https://serangdev.com/jasa/umkm",
    siteName: "SerangDev",
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaUMKMPage() {
  return (
    <main className="min-h-screen bg-[#050638] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Jasa Website UMKM Profesional & Terjangkau
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Kami menyediakan jasa pembuatan website UMKM yang dirancang untuk
            membantu pelaku usaha meningkatkan kredibilitas, memperluas pasar,
            dan meningkatkan penjualan secara online. Website bukan lagi
            kebutuhan sekunder, melainkan fondasi utama pertumbuhan bisnis di
            era digital.
          </p>
        </section>

        {/* MASALAH UMKM */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Tantangan UMKM di Era Digital
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Banyak UMKM masih mengandalkan media sosial sebagai satu-satunya
            saluran pemasaran. Padahal, tanpa website profesional, bisnis Anda
            sulit membangun kredibilitas jangka panjang dan sulit ditemukan di
            Google.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Website UMKM profesional memungkinkan bisnis Anda tampil lebih
            terpercaya, memiliki katalog produk yang rapi, dan siap menerima
            calon pelanggan dari seluruh Indonesia.
          </p>
        </section>

        {/* SOLUSI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Solusi Website untuk UMKM di Seluruh Indonesia
          </h2>

          <p className="text-gray-300 leading-relaxed">
            SerangDev membantu UMKM dari berbagai kota di Indonesia untuk
            memiliki website yang cepat, mobile-friendly, dan SEO optimized.
            Dengan struktur yang tepat, website Anda berpotensi muncul pada
            pencarian seperti <strong>jasa website UMKM</strong> atau
            <strong> bikin website untuk UMKM</strong>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Kami memahami keterbatasan anggaran UMKM, sehingga solusi yang
            kami tawarkan tetap terjangkau tanpa mengorbankan kualitas dan
            performa.
          </p>
        </section>

        {/* FITUR */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Fitur Website UMKM yang Kami Tawarkan
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Desain modern & responsive</li>
            <li>✔ Halaman profil usaha</li>
            <li>✔ Katalog produk / jasa</li>
            <li>✔ Integrasi WhatsApp</li>
            <li>✔ Optimasi SEO dasar</li>
            <li>✔ Kecepatan loading tinggi</li>
          </ul>
        </section>

        {/* MANFAAT */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Manfaat Website bagi UMKM
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Dengan website profesional, UMKM dapat meningkatkan kepercayaan
            pelanggan, menjangkau pasar lebih luas, serta membangun brand yang
            lebih kuat. Website juga memberikan kontrol penuh atas aset
            digital bisnis Anda.
          </p>
        </section>

        <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold">
                Dukungan Regional & Lokal
            </h2>

            <p className="text-gray-300">
                Jika Anda berada di Banten, kami juga menyediakan layanan regional melalui{" "}
                <a href="/jasa/banten" className="text-blue-400 underline">
                jasa website Banten
                </a>, serta layanan khusus kota melalui{" "}
                <a href="/jasa/serang" className="text-blue-400 underline">
                jasa pembuatan website Serang
                </a>.
            </p>
        </section>


        {/* CTA */}
        <section className="text-center pt-12 space-y-6">
          <h2 className="text-2xl font-semibold">
            Siap Meningkatkan UMKM Anda Secara Digital?
          </h2>

          <p className="text-gray-300">
            Konsultasikan kebutuhan website UMKM Anda dan bangun fondasi
            digital yang kuat bersama SerangDev.
          </p>
        </section>

      </div>
    </main>
  );
}
