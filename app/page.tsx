"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import Particles from "@/components/ui/Particles";
import Loader from "@/components/ui/Loader";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#050638] overflow-x-hidden"
          >
            <Particles />
            <StickyWA />
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
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}