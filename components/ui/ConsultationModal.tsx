"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const whatsappNumber = "6281234567890";
  const isSubmitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset state setiap modal dibuka
  useEffect(() => {
    if (isOpen) {
      setLoading(false);
      setSuccess(false);
      setError("");
      isSubmitting.current = false;
      formRef.current?.reset();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Submit failed");
      }

      setSuccess(true);
      formRef.current?.reset();

      // Tutup modal setelah 3 detik
      setTimeout(() => {
        handleClose();
      }, 3000);

    } catch {
      setError("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setLoading(false);
      isSubmitting.current = false;
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
    setLoading(false);
    isSubmitting.current = false;
    formRef.current?.reset();
    onClose();
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo SerangDev, saya ingin konsultasi project website."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-[#0f0f14] w-full max-w-lg rounded-2xl p-8 border border-white/10 relative">

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">
          Konsultasi Project
        </h2>

        {success && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm">
            Pesan berhasil dikirim. Tim kami akan segera menghubungi Anda.
          </div>
        )}

        {error && !success && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Nama Lengkap"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Aktif"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />

          <select
            name="service"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Pilih Layanan</option>
            <option value="Website UMKM">Website UMKM</option>
            <option value="Website Profesional">Website Profesional</option>
            <option value="Custom Web App">Custom Web App</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <textarea
            name="message"
            placeholder="Ceritakan kebutuhan project Anda"
            rows={4}
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sedang Mengirim..." : "Kirim Konsultasi"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-3 text-xs text-gray-400">atau</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <button
          onClick={openWhatsApp}
          className="w-full py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-xl"
        >
          Konsultasi via WhatsApp
        </button>

      </div>
    </div>
  );
}
