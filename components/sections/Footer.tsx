"use client";

import Image from "next/image";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050638] text-gray-400 py-20 px-6 border-t border-white/5">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-4">
            <a href="/" className="inline-block mb-6">
              <Image
                src="/serangdev-Hlight.webp"
                alt="SerangDev"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </a>

            <p className="leading-relaxed mb-8 text-gray-400 max-w-sm">
              Membangun masa depan digital di Banten & Indonesia dengan teknologi modern, desain estetis, dan performa optimal.
            </p>

            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              {["Web Development", "UI/UX Design", "SaaS Solution", "WebApps"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              {["About Us", "Portfolio", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <MapPin className="text-purple-500 shrink-0" size={18} />
                <div>
                  Serang, Banten, Indonesia
                  <div className="text-gray-500 text-xs mt-1">
                    Jl. Raya Serang - Jakarta KM 14
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Mail className="text-purple-500 shrink-0" size={18} />
                <span>hello@serangdev.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">
              SerangDev Digital Agency
            </span>. All rights reserved.
          </div>

          <div className="flex gap-8 uppercase tracking-wide">
            <a href="#" className="hover:text-purple-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
