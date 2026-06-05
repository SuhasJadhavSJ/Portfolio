export default function ChallengeCard({
  challenge,
}) {
  return (
    <div className="cyber-card rounded-sm p-5 flex flex-col gap-3 group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">
            {challenge.badge}
          </span>

          <div>
            <h4 className="font-sans text-sm font-bold text-cyber-text">
              {challenge.title}
            </h4>

            <div className="font-mono text-[10px] text-cyber-muted uppercase tracking-wider">
              {challenge.platform}
            </div>
          </div>
        </div>

        <span
          className={`font-mono text-[10px] px-2 py-1 rounded-sm ${
            challenge.status === "Completed"
              ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/30"
              : challenge.status === "Ongoing" ||
                challenge.status === "In Progress"
              ? "bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/30"
              : "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30"
          }`}
        >
          {challenge.status}
        </span>
      </div>

      <p className="text-xs text-cyber-muted leading-relaxed">
        {challenge.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-cyber-border">
        {challenge.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[10px] px-2 py-0.5 border border-cyber-border text-cyber-cyan rounded-sm"
          >
            #{skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono">
        <span
          className={
            challenge.type === "Red Team"
              ? "text-cyber-magenta"
              : "text-cyber-cyan"
          }
        >
          [{challenge.type}]
        </span>

        <span className="text-cyber-muted">
          [{challenge.difficulty}]
        </span>
      </div>
    </div>
  );
}