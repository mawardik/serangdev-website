import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serangdev.com"),

  title: {
    default: "SerangDev | Jasa Pembuatan Website Profesional Serang & Banten",
    template: "%s | SerangDev",
  },

  description:
    "Jasa pembuatan website profesional di Serang & Banten. Website cepat, modern, SEO friendly untuk UMKM, Instansi Pemerintah, Lembaga Pendidikan & perusahaan.",

  keywords: [
    "jasa pembuatan website serang",
    "jasa website banten",
    "web developer serang",
    "website umkm serang",
    "jasa website profesional",
    "jasa website Sekolah",
    "jasa website Perusahaan",
    "jasa website custom",
    "jasa website Dinas",
  ],

  authors: [{ name: "SerangDev" }],
  creator: "SerangDev",
  publisher: "SerangDev",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://serangdev.com",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://serangdev.com",
    title: "SerangDev | Website Profesional Serang & Banten",
    description:
      "Website modern, cepat, dan SEO optimized untuk UMKM & perusahaan.",
    siteName: "SerangDev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SerangDev Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SerangDev | Jasa Website Profesional",
    description:
      "Website cepat & modern untuk bisnis di Serang & Banten.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050638",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={bricolage.variable}>
      <head>
        {/* Google Tag Manager Script (HEAD) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T3THR8BD');
          `}
        </Script>
      </head>

      <body className="bg-[#050638] text-white antialiased">

        {/* Google Tag Manager (NOSCRIPT - BODY) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3THR8BD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Schema.org LocalBusiness */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SerangDev",
              url: "https://www.serangdev.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Serang",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              areaServed: "Banten",
              description:
                "Jasa pembuatan website profesional untuk UMKM dan perusahaan di Serang & Banten.",
            }),
          }}
        />
      </body>
    </html>
  );
}
