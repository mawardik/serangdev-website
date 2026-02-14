"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#portfolio" },
    { name: "Proses", href: "#how-we-work" },
    { name: "Harga", href: "#paket" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-6 pt-6">
        <nav
          className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl px-6 py-4 flex justify-between items-center ${
            scrolled
              ? "glass backdrop-blur-xl border border-white/10 shadow-xl"
              : "bg-transparent"
          }`}
        >
          <a href="/" className="flex items-center">
            <Image
              src="/serangdev-Hlight.webp"
              alt="SerangDev"
              width={150}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-sm rounded-xl hover:opacity-90 transition"
            >
              Mulai Project
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="absolute top-24 left-6 right-6 glass backdrop-blur-xl p-8 rounded-2xl md:hidden border border-white/10 shadow-xl">
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <hr className="border-white/10" />
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold"
                >
                  Konsultasi Sekarang
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
