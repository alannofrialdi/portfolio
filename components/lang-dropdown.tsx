"use client";

import * as React from "react";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownLang() {
  const locale = useLocale();
  const [position, setPosition] = React.useState<string>(locale);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (locale: string) => {
    startTransition(() => {
      setPosition(locale);
      router.push(`/${locale}`);
    });

    // router.refresh();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>{position}</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 mt-4 z-50">
        <DropdownMenuRadioGroup value={position} onValueChange={handleChange}>
          <DropdownMenuRadioItem value="id">id</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">en</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
