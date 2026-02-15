import { Award, Globe, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Counter from "@/components/ui/Counter";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  color: string;
};

const stats: Stat[] = [
  { label: "Tahun Pengalaman", value: 5, suffix: "+", icon: Award, color: "from-purple-500 to-indigo-500" },
  { label: "Website Dibangun", value: 120, suffix: "+", icon: Globe, color: "from-blue-500 to-cyan-500" },
  { label: "Klien Puas", value: 80, suffix: "+", icon: Users, color: "from-emerald-500 to-teal-500" },
  { label: "Project On-Time", value: 99, suffix: "%", icon: Clock, color: "from-orange-500 to-yellow-500" },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dedikasi <span className="text-gradient">Kami</span> <br />
              Dalam Inovasi Digital
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Kami tidak hanya sekadar membangun website. Kami menciptakan aset digital yang terukur untuk membantu bisnis Anda tumbuh lebih cepat dan efisien.
            </p>

            <div className="mt-10 p-6 glass rounded-3xl border-white/5 inline-flex items-center gap-4">
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold">80+ Pemilik Bisnis</span> telah mempercayakan project mereka.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className="glass p-6 md:p-8 rounded-[2.5rem] relative group border-white/5 
                  transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-950/80 rounded-[0.9rem] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="mt-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-[2.5rem]`} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
