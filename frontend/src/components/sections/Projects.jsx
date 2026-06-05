import { useMemo, useState } from "react";
import { projects } from "../../data/data";

import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filters = [
    "All",
    "Red Team",
    "Blue Team",
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.type === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="03"
          title="security_projects"
          subtitle="// hands-on lab work & research"
        />

        <div className="flex flex-wrap gap-3 mt-10 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`font-mono text-xs px-4 py-2 border rounded-sm transition-all ${
                activeFilter === filter
                  ? "border-cyber-green text-cyber-green bg-cyber-green/10"
                  : "border-cyber-border text-cyber-muted hover:border-cyber-green hover:text-cyber-green"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}