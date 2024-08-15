"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { CIcon } from "@coreui/icons-react";
import { cilCloudDownload } from "@coreui/icons";
import { useParams } from "next/navigation";
import { ModeToggle } from "@/components/toggle-mode";

interface ProfileProps {
  t: any;
  loading: boolean;
  downloadFile: (file: string) => void;
}
export default function Profile({ t, downloadFile, loading }: ProfileProps) {
  const { locale } = useParams();

  const renderWhenLoading = () => {
    if (loading) {
      return <span>{locale === "id" ? "Mengunduh..." : "Downloading..."}</span>;
    }
  };

  return (
    <>
      <div
        id="profile"
        className={`flex min-h-screen  items-center justify-center flex-col`}
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
            className="rounded-full dark:shadow-xl shadow-slate-800 shadow-md dark:bg-gradient-dark-mode bg-gradient-light-mode hover:scale-105 duration-300 mb-4"
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
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white dark:text-slate-400 transition-colors focus:translate-y-0.5 focus:outline-none focus:ring-1 dark:focus:ring-slate-400 focus:ring-slate-800 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => downloadFile("/img/profile.png")}
            >
              {loading ? (
                renderWhenLoading()
              ) : (
                <span>{t("downloadResume").toUpperCase()}</span>
              )}
              <CIcon
                icon={cilCloudDownload}
                size="sm"
                className="ml-2 h-6 w-6"
              />
            </button>
            <ModeToggle />
          </motion.div>
        </div>
      </div>
    </>
  );
}
