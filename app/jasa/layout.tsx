import Image from "next/image";
import Link from "next/link";

export default function JasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050638] text-white">

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <Link href="/" className="inline-block">
          <Image
            src="/serangdev-Hlight.webp"
            alt="SerangDev Logo"
            width={160}
            height={50}
            priority
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>

      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-400">
          © {new Date().getFullYear()} SerangDev. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
