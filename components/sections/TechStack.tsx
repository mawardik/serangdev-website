const specs = [
  { label: "Performance", score: 98, color: "from-green-400 to-emerald-600" },
  { label: "SEO Score", score: 100, color: "from-blue-400 to-indigo-600" },
  { label: "Accessibility", score: 95, color: "from-purple-400 to-pink-600" },
];

export default function TechSpec() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Technology priority,{" "}
            <span className="text-gradient">Performa Tanpa Batas</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Kami tidak berkompromi dengan kualitas. Setiap baris kode dioptimalkan
            untuk kecepatan akses maksimal, keamanan tingkat tinggi, dan ramah
            terhadap mesin pencari (Google).
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              "Next.js 14",
              "React",
              "Tailwind CSS",
              "Laravel",
              "PostgreSQL",
              "PHP",
              "Wordpress",
              "Framework Lainnya",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-gray-300 bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="glass p-10 rounded-[3rem] space-y-8 relative animate-fade-in-up">
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />

          {specs.map((spec, i) => (
            <div key={i}>
              <div className="flex justify-between mb-3 items-end">
                <span className="text-white font-bold">{spec.label}</span>
                <span className="text-2xl font-black text-white">
                  {spec.score}%
                </span>
              </div>

              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <div
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    "--target-scale": spec.score / 100,
                  } as React.CSSProperties}
                  className={`h-full bg-gradient-to-r ${spec.color} progress-bar`}
                />
              </div>
            </div>
          ))}

          <p className="text-[10px] text-gray-500 font-mono text-center mt-4">
            *Berdasarkan audit Google Lighthouse 2026
          </p>
        </div>
      </div>
    </section>
  );
}
