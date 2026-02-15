import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Website kami jadi lebih profesional dan cepat. Traffic naik 30% dalam sebulan.",
    name: "Andi Saputra",
    role: "Owner Kopi Serang",
    rating: 5,
  },
  {
    text: "SerangDev sangat responsif. Sistem booking yang dibuat berjalan lancar tanpa bug.",
    name: "Siti Aminah",
    role: "Direktur Travel",
    rating: 5,
  },
  {
    text: "Harga terjangkau untuk kualitas code sebersih ini. SEO-nya juga sangat powerfull.",
    name: "Budi Santoso",
    role: "Founder Startup",
    rating: 5,
  },
  {
    text: "Desain UI/UX nya world class. Tidak terlihat kaku seperti website instansi biasanya.",
    name: "Dinas Pariwisata",
    role: "Kepala Bidang",
    rating: 5,
  },
];

export default function Trust() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dipercaya oleh <span className="text-gradient">Industri</span>
          </h2>
          <p className="text-gray-400">
            Kata mereka yang telah bertransformasi digital bersama kami.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-start min-w-[85%] sm:min-w-[60%] lg:min-w-[32%] 
              glass-panel p-8 rounded-3xl border border-white/5 
              hover:border-purple-500/30 transition-all duration-300 flex flex-col"
            >
              <Quote className="absolute opacity-5 w-12 h-12" />

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-purple-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
