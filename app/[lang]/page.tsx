import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { getDictionary } from "./dictionaries";

export default async function Home({ params } : { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  return (
    <main className="flex flex-col items-center px-4">
      <Intro dictionary={dict.intro} />
      <SectionDivider />
      <About dictionary={dict.about} />
      <Projects dictionary={dict.projects} />
      <Skills dictionary={dict.skills} />
      <Experience dictionary={dict.experiences} />
      <Contact dictionary={dict.contact} />
    </main>
  );
}
