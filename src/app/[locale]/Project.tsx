"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectProps {
  id: number;
  title: string;
  year: string;
  tech: Array<string>;
  link: string;
  img: string;
}

export default function Project(project: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.4, 1] }}
      className="w-fit h-fit"
    >
      <Link href={project.link} target="_blank">
        <BackgroundGradient className="rounded-xl p-[0.4rem] dark:bg-gradient-dark-mode bg-gradient-light-mode ">
          <Image
            className="rounded-t-lg"
            src={project.img}
            alt={project.title}
            width={500}
            height={500}
          />
          <div className="flex flex-col text-white my-2  dark:text-black-100 items-center justify-center">
            <h1 className="text-center lg:text-[1.4rem] mb-2 text-lg font-bold">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center">
              {project.tech.map((tech, i) => (
                <span
                  className="mr-2 mt-2 inline-flex item italic bg-gradient-zinc place-items-center rounded-full text-black px-3 py-1"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BackgroundGradient>
      </Link>
    </motion.div>
  );
}
