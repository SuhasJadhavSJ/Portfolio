import { useMemo, useState } from "react";

import {
  tryhackmePaths,
  ctfChallenges,
} from "../../data/data";

import SectionHeader from "../common/SectionHeader";
import PathCard from "../cards/PathCard";
import ChallengeCard from "../cards/ChallengeCard";

export default function CTFSection() {
  const [filter, setFilter] =
    useState("All");

  const categories = [
    "All",
    "Red Team",
    "Blue Team",
  ];

  const filteredChallenges = useMemo(() => {
    if (filter === "All") {
      return ctfChallenges;
    }

    return ctfChallenges.filter(
      (challenge) => challenge.type === filter
    );
  }, [filter]);

  return (
    <section
      id="ctf"
      className="relative py-24 px-6 bg-cyber-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="04"
          title="ctf_challenges_&_rooms"
          subtitle="// capture the flag · tryhackme rooms solved"
        />

        {/* TryHackMe Paths */}
        <div className="mt-12 mb-10">
          <h3 className="font-mono text-sm text-cyber-cyan uppercase tracking-wider mb-4">
            // tryhackme_learning_paths
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tryhackmePaths.map((path) => (
              <PathCard
                key={path.name}
                path={path}
              />
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilter(category)
              }
              className={`font-mono text-xs px-4 py-2 border rounded-sm transition-all ${
                filter === category
                  ? "border-cyber-green text-cyber-green bg-cyber-green/10"
                  : "border-cyber-border text-cyber-muted hover:border-cyber-green hover:text-cyber-green"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChallenges.map(
            (challenge, index) => (
              <ChallengeCard
                key={index}
                challenge={challenge}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}