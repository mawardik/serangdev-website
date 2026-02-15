import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import WhyChoose from "@/components/sections/WhyChoose";
import Portfolio from "@/components/sections/Portfolio";
import HowWeWork from "@/components/sections/HowWeWork";
import TechStack from "@/components/sections/TechStack";
import Pricing from "@/components/sections/Pricing";
import Testimonial from "@/components/sections/Trust";
import FAQ from "@/components/sections/Faq";
import FinalCTA from "@/components/sections/FinalCTA";
import Experience from "@/components/sections/Experience";
import StickyWA from "@/components/ui/StickyWA";
import Footer from "@/components/sections/Footer";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/ui/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Particles />

      <main className="relative bg-transparent overflow-x-hidden">
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
