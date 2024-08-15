import { unstable_setRequestLocale } from "next-intl/server";
import { HomeIcon as IconHome, UserIcon, FolderCodeIcon } from "lucide-react";
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
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <UserIcon className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#projects",
      icon: (
        <FolderCodeIcon className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
    </>
  );
}
