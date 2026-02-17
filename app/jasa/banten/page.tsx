import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Bikin Web Banten Profesional & SEO Friendly | SerangDev",
  description:
    "Jasa bikin web Banten untuk UMKM, perusahaan, dan startup di Serang, Cilegon, Tangerang, Pandeglang, dan Lebak. Website cepat, modern, dan siap bersaing.",
  keywords: [
    "jasa bikin web banten",
    "jasa pembuatan website banten",
    "web developer banten",
    "developer website banten",
    "jasa website tangerang",
    "jasa website cilegon",
  ],
  alternates: {
    canonical: "https://serangdev.com/jasa/banten",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jasa Bikin Web Banten Profesional | SerangDev",
    description:
      "Solusi website profesional untuk seluruh wilayah Banten.",
    url: "https://serangdev.com/jasa/banten",
    siteName: "SerangDev",
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaBantenPage() {
  return (
    <main className="min-h-screen bg-[#050638] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Jasa Bikin Web Banten Profesional untuk UMKM & Perusahaan
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Berawal dari Serang, SerangDev kini berkembang melayani kebutuhan
            jasa pembuatan website di seluruh wilayah Banten. Kami membantu
            bisnis di Serang, Cilegon, Tangerang, Pandeglang, hingga Lebak
            membangun website profesional yang cepat, modern, dan SEO friendly.
          </p>
        </section>

        {/* EKSPANSI NARASI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Partner Digital untuk Bisnis di Seluruh Banten
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Transformasi digital tidak lagi terbatas pada kota besar. Pelaku
            usaha di berbagai wilayah Banten kini membutuhkan website yang
            mampu meningkatkan kredibilitas dan menjangkau pasar lebih luas.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Sebagai web developer Banten, kami memahami karakteristik pasar
            lokal dan kebutuhan bisnis di setiap kota. Pendekatan ini membuat
            website yang kami bangun lebih relevan dan efektif.
          </p>
        </section>

        {/* CAKUPAN WILAYAH */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Wilayah Layanan Kami di Banten
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/jasa/serang" className="text-blue-400 underline">
                Jasa Bikin Web Serang
              </Link>
            </li>
            <li>Jasa Website Cilegon</li>
            <li>Jasa Website Tangerang</li>
            <li>Jasa Website Pandeglang</li>
            <li>Jasa Website Lebak</li>
          </ul>
        </section>

        {/* VALUE DIFFERENTIATION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Mengapa Memilih Developer Website Banten dari SerangDev?
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Berbasis di Serang dengan jangkauan regional</li>
            <li>✔ Struktur SEO siap ekspansi ke skala provinsi</li>
            <li>✔ Performa tinggi & Core Web Vitals optimized</li>
            <li>✔ Desain modern & responsive</li>
            <li>✔ Pendekatan konsultatif & profesional</li>
          </ul>
        </section>

        {/* STRATEGI SKALA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Website yang Siap Berkembang Bersama Bisnis Anda
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Kami membangun website dengan struktur yang scalable. Jika bisnis
            Anda berkembang dari Serang ke kota lain di Banten, website Anda
            tetap relevan dan siap dikembangkan tanpa harus membangun ulang
            dari awal.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Inilah komitmen kami sebagai regional digital partner di Banten —
            bukan sekadar membuat website, tetapi membangun fondasi digital
            jangka panjang.
          </p>
        </section>

        <section className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-semibold">
                Fokus Lokal & Nasional
            </h2>

            <p className="text-gray-300">
                Untuk layanan lokal, kunjungi halaman{" "}
                <a href="/jasa/serang" className="text-blue-400 underline">
                jasa pembuatan website Serang
                </a>. 
                Kami juga melayani skala nasional melalui{" "}
                <a href="/jasa/umkm" className="text-blue-400 underline">
                jasa website UMKM Indonesia
                </a>.
            </p>
        </section>


        {/* CTA */}
        <section className="text-center pt-12 space-y-6">
          <h2 className="text-2xl font-semibold">
            Siap Mengembangkan Bisnis Anda di Banten?
          </h2>

          <p className="text-gray-300">
            Konsultasikan kebutuhan website Anda dan bangun kehadiran digital
            yang profesional bersama SerangDev.
          </p>
        </section>

      </div>
    </main>
  );
}
