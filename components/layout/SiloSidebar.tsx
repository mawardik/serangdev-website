import Link from "next/link";

const SiloSidebar = () => {
  // Money Pages Berdasarkan Industri
  const services = [
    { name: "Website UMKM Indonesia", href: "/jasa/umkm" },
    { name: "Website Perusahaan (Corporate)", href: "/jasa/website-perusahaan" },
    { name: "Website Sekolah & PPDB", href: "/jasa/website-sekolah" },
    { name: "Website Instansi Pemerintahan", href: "/jasa/website-instansi" },
  ];

  const locations = [
    { name: "Jasa Website Serang", href: "/jasa/serang" },
    { name: "Jasa Website Banten", href: "/jasa/banten" },
    { name: "Jasa Website Cilegon", href: "/jasa/cilegon" },
    { name: "Jasa Website Tangerang", href: "/jasa/tangerang" },
  ];

  const clusters = [
    { name: "Biaya Pembuatan Website", href: "/jasa/biaya-pembuatan-website-serang" },
    { name: "Jasa SEO Banten", href: "/jasa/seo-serang" },
    { name: "Maintenance Website", href: "/jasa/maintenance-website" },
    { name: "Redesain Website", href: "/jasa/redesain-website" },
  ];

  return (
    <aside className="space-y-8 sticky top-10">
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">
          Layanan Spesialis
        </h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link 
                href={service.href} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm border-l-2 border-l-blue-500">
        <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">
          Pusat Informasi
        </h3>
        <ul className="space-y-3">
          {clusters.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group font-medium"
              >
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">
          Area Layanan
        </h3>
        <ul className="space-y-3">
          {locations.map((loc) => (
            <li key={loc.href}>
              <Link 
                href={loc.href} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                {loc.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-600 p-6 rounded-xl text-center space-y-3 shadow-lg shadow-blue-600/20">
        <p className="text-white font-bold text-sm leading-tight">Siap Memulai Proyek Anda?</p>
        <Link 
          href="https://wa.me/628568709200"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold w-full block hover:bg-gray-100 transition-all"
        >
          WhatsApp Sekarang
        </Link>
      </div>
    </aside>
  );
};

export default SiloSidebar;