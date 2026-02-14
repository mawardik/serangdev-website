import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import Particles from "@/components/ui/Particles";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
    "Jasa pembuatan website profesional di Serang & Banten. Solusi website UMKM, instansi, dan perusahaan dengan desain modern, performa cepat, dan SEO optimal.",

  keywords: [
    "jasa pembuatan website serang",
    "jasa website banten",
    "web developer serang",
    "website umkm serang",
    "jasa website profesional",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  authors: [{ name: "SerangDev" }],
  creator: "SerangDev",
  publisher: "SerangDev",

  robots: {
    index: true,
    follow: true,
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
      "Website modern dan cepat untuk UMKM & perusahaan di Serang.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://serangdev.com",
  },
};

export const viewport = {
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

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </head>

      <body className="font-sans bg-black text-white antialiased">
        <Particles />
        {children}

        {/* LocalBusiness Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SerangDev",
              image: "https://serangdev.com/logo-serangdev.png",
              url: "https://serangdev.com",
              telephone: "+62-8xxxxxxxxxx",
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
