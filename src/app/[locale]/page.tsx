import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Image from "next/image";
import Hero from "./Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const navItems = [
    {
      name: "Profile",
      link: "#profile",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/contact",
      // icon: (
      //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ];
  const t = useTranslations("HeroSection");
  return (
    <main className="min-h-screen h-[200vh] relative">
      <FloatingNav navItems={navItems} />

      <Hero />
    </main>
  );
}
