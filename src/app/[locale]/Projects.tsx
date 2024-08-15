import Project from "./Project";
import React, { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

function wordsGenerator(text: Array<string>, className?: string) {
  let words = [];
  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1) {
      words.push({
        text: text[text.length - 1],
        className,
      });
    } else {
      words.push({
        text: text[i],
      });
    }
  }

  return words;
}

export default function Projects() {
  const locale = useLocale();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };

  const wordsArray = useMemo(() => {
    return locale === "en" ? ["MY", "PROJECTS"] : ["PROJEK", "SAYA"];
  }, [locale]);

  return (
    <section
      id="projects"
      className="min-h-screen mb-6 flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold text-center lg:text-4xl mb-6 uppercase md:mb-10">
        <TypewriterEffectSmooth
          words={wordsGenerator(
            wordsArray,
            "dark:text-gradient-dark-mode text-gradient-light-mode",
          )}
        />
      </h1>
      <div className="grid m-auto grid-cols-1 gap-6 p-10 lg:p-0">
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <Button
        variant="outline"
        className="mt-10 flex items-center justify-center group overflow-hidden"
        onClick={handleClick}
      >
        SEE MORE PROJECTS{" "}
        <ChevronRightCircle
          className={`ml-2 h-4 w-4 transition-transform duration-300 ${
            isClicked ? "translate-x-1" : ""
          }`}
        />
      </Button>
    </section>
  );
}
