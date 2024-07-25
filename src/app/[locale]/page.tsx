import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Image from "next/image";
import Hero from "./Hero";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HeroSection");
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
