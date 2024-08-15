"use client";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useTranslations } from "next-intl";
import Profile from "./Profile";
import { useState, useCallback, useMemo } from "react";
import Projects from "./Projects";

export default function Hero() {
  const heroTranslations = useTranslations("HeroSection");
  const memoizedTranslations = useMemo(
    () => heroTranslations,
    [heroTranslations],
  );
  const [loading, setLoading] = useState(false);

  const downloadFile = useCallback(async (file: string) => {
    try {
      setLoading(true);
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "Alan's Resume";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download file:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <HeroHighlight>
      <Profile
        t={memoizedTranslations}
        downloadFile={downloadFile}
        loading={loading}
      />
      <Projects />
    </HeroHighlight>
  );
}
