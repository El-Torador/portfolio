"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects({ dictionary }: { dictionary: Record<string, any> }) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{dictionary.title}</SectionHeading>
      <div className="flex flex-col">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project dictionary={dictionary} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
