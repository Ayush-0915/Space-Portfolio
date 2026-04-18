import { About } from "@/components/main/about";
import { ContactMe } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Testimonials } from "@/components/main/testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 md:gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        <Testimonials />
        <ContactMe />
      </div>
    </main>
  );
}
