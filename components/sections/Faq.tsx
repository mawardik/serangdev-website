import { Plus, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama proses pengerjaan website?",
    a: "Tergantung tingkat kompleksitasnya. Untuk Landing Page biasanya 3-7 hari kerja, sedangkan Company Profile atau Web App membutuhkan 2-4 minggu.",
  },
  {
    q: "Apakah saya bisa mengelola konten sendiri?",
    a: "Tentu! Kami menyediakan Admin Panel (CMS) yang user-friendly sehingga Anda bisa mengubah teks dan gambar dengan mudah tanpa perlu coding.",
  },
  {
    q: "Bagaimana dengan biaya maintenance?",
    a: "Kami memberikan gratis maintenance selama 3 bulan pertama. Setelah itu, tersedia paket maintenance tahunan yang mencakup update sistem dan backup data.",
  },
  {
    q: "Apakah website sudah termasuk SEO?",
    a: "Ya, setiap website yang kami bangun sudah mengikuti standar SEO Google (On-Page) untuk memastikan bisnis Anda lebih mudah ditemukan di internet.",
  },
  {
    q: "Apakah ada biaya tersembunyi?",
    a: "Tidak ada. Semua biaya (Domain, Hosting, Setup) sudah kami jelaskan di awal sesuai paket yang Anda pilih.",
  },
  {
    q: "Bagaimana jika saya ingin revisi?",
    a: "Kami memberikan kuota revisi sesuai paket untuk memastikan desain dan fungsi website benar-benar sesuai dengan ekspektasi Anda.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/10 blur-[80px] rounded-lg -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border-white/10 text-purple-400 text-sm font-medium mb-6">
              <HelpCircle size={16} />
              <span>Support Center</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Punya pertanyaan? <br />
              <span className="text-gradient">Disini jawabannya</span>
            </h2>

            <p className="pt-6 text-gray-400">
              Cek dulu di sini, siapa tahu pertanyaanmu sudah ada jawabannya.
              Kalau belum, chat kita aja!
            </p>

            <div className="mt-10 glass p-6 rounded-[2rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Sparkles size={80} className="text-white" />
              </div>

              <div className="flex gap-4 items-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
                  <HelpCircle className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Response</h4>
                  <p className="text-xs text-gray-400">
                    Konsultasi via WhatsApp
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic">
                “Masih ragu? Tim kami siap membantu pertanyaan teknis Anda secara gratis.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group glass rounded-xl border border-white/5 p-6 transition-all duration-300 open:border-purple-500/30"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h2 className="font-semibold text-white group-open:text-purple-300 transition-colors">
                    {faq.q}
                  </h2>
                  <span className="ml-4 w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 group-open:bg-purple-500 group-open:text-white group-open:border-purple-500 transition-all">
                    <Plus size={16} className="group-open:rotate-45 transition-transform duration-300" />
                  </span>
                </summary>

                <div className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  <h3>{faq.a}</h3>
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
