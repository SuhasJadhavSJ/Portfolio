import { skills } from "../../data/data";
import SectionHeader from "../common/SectionHeader";
import SkillCard from "../cards/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-cyber-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="02"
          title="arsenal"
          subtitle="// my toolkit & capabilities"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}