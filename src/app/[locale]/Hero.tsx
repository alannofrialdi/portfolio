"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CIcon } from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";
import { useParams } from "next/navigation";
import { ModeToggle } from "@/components/toggle-mode";

export default function Hero() {
  const t = useTranslations("HeroSection");
  const { locale } = useParams();

  const downloadFile = async (file: string) => {
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = file.split("/").pop() || "Alan's Resume";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <HeroHighlight>
      <div
        id="profile"
        className={`flex items-center justify-center ${
          locale === "id" ? "flex-col" : "flex-row"
        }`}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Image
            src="/img/profile.png"
            className="rounded-full dark:shadow-xl shadow-slate-800 shadow-md dark:bg-gradient-dark-mode bg-gradient-light-mode hover:scale-105 duration-300"
            width={200}
            height={100}
            alt="hero"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-[1rem] px-4 sm:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col"
          >
            {t("hello")}
            <Highlight className="text-white dark:text-black">
              {t("webDev")}
            </Highlight>
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              delay: 2.5,
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex items-center justify-center gap-4"
          >
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:translate-y-0.5 focus:outline-none focus:ring-1 dark:focus:ring-slate-400 focus:ring-slate-800 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => downloadFile("/img/profile.png")}
            >
              <CIcon icon={cilCloudDownload} size="sm" className="mr-2 w-8" />
              <span className="ml-2">{t("downloadResume")}</span>
            </button>
            <ModeToggle />
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
}
