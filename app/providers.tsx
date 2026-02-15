"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import Particles from "@/components/ui/Particles";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(1000 - elapsed, 0);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <Loader show={loading} />
      <Particles />
      {children}
    </>
  );
}
