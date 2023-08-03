"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About({ dictionary }: { dictionary: Record<string, any> }) {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{dictionary.title}</SectionHeading>
      <p className="mb-3">
        {dictionary.text1}{" "}
        <span className="font-medium">{dictionary.text2}</span>, {dictionary.text3} {" "}
        <span className="font-medium">{dictionary.text4}</span>. {dictionary.text5}.{" "}
        <span className="italic">{dictionary.text6}</span> {dictionary.text7}. <span className="underline">{dictionary.text8}</span> {dictionary.text10} {" "}
        <span className="font-medium">
          {dictionary.text11}
        </span>
        . {dictionary.text12}{" "}
        <span className="font-medium">{dictionary.text13}</span> {dictionary.text14}.
      </p>

      <p>
        <span className="italic">{dictionary.text15}</span>, {dictionary.text16} {" "}
        <span className="font-medium">{dictionary.text17}</span>. {dictionary.text18}{" "}
        <span className="font-medium">{dictionary.text19}</span>. {dictionary.text20}.
      </p>
    </motion.section>
  );
}
