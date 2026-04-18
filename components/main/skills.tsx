import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  const allSkills = [
    ...SKILL_DATA,
    ...FRONTEND_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
  ] as const;

  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-8 overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-20"
    >
      <SkillText />

      <div className="relative z-10 flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 rounded-2xl border border-[#6f5cff30] bg-transparent p-6 md:gap-5 md:p-8">
        {allSkills.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-25">
          <video
            className="h-full w-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
