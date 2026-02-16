import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import StickyWA from "@/components/ui/StickyWA";
import Footer from "@/components/sections/Footer";

const LogoSlider = dynamic(() => import("@/components/sections/LogoSlider"), { ssr: false });
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Testimonial = dynamic(() => import("@/components/sections/Trust"));
const FAQ = dynamic(() => import("@/components/sections/Faq"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));

const Particles = dynamic(() => import("@/components/ui/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Particles />
      <main className="relative overflow-x-hidden">
        <Header />
        <Hero />
        <LogoSlider />
        <WhyChoose />
        <Portfolio />
        <Experience />
        <HowWeWork />
        <TechStack />
        <Pricing />
        <Testimonial />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyWA />
      </main>
    </>
  );
}
