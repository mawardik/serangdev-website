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
    "SerangDev adalah web development agency di Serang & Banten yang menyediakan jasa pembuatan website profesional, cepat, modern, dan SEO friendly untuk UMKM, Instansi Pemerintah, Sekolah, Perusahaan & Personal Brand.",

  keywords: [
    "jasa pembuatan website serang",
    "jasa website banten",
    "web developer serang",
    "jasa website umkm",
    "jasa website sekolah",
    "jasa website perusahaan",
    "jasa website dinas",
    "web agency banten",
    "website profesional serang",
  ],

  authors: [{ name: "SerangDev", url: "https://serangdev.com" }],
  creator: "SerangDev",
  publisher: "SerangDev",
  applicationName: "SerangDev",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  category: "technology",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://serangdev.com",
    siteName: "SerangDev",
    title:
      "SerangDev | Jasa Pembuatan Website Profesional Serang & Banten",
    description:
      "Web development agency profesional di Serang & Banten. Website cepat, modern, SEO optimized untuk UMKM & Instansi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SerangDev Web Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SerangDev | Jasa Pembuatan Website Profesional Serang & Banten",
    description:
      "Website profesional, modern & SEO optimized untuk UMKM dan Instansi di Serang & Banten.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050638",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SerangDev",
    url: "https://serangdev.com",
    logo: "https://serangdev.com/serangdev-Hcolor.png",
    description:
      "Web development agency profesional di Serang & Banten yang menyediakan jasa pembuatan website modern dan SEO friendly.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Serang",
      addressRegion: "Banten",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Jasa Pembuatan Website",
    provider: {
      "@type": "Organization",
      name: "SerangDev",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    description:
      "Jasa pembuatan website profesional untuk UMKM, Instansi Pemerintah, Sekolah, dan Perusahaan di seluruh Indonesia.",
  };

  return (
    <html lang="id" className={bricolage.variable}>
      <head>
        {/* Google Tag Manager */}
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
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3THR8BD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </body>
    </html>
  );
}
