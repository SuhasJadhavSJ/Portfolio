export default function EducationCard({
  education,
}) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-5 h-5 bg-cyber-bg border-2 border-cyber-green rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
      </div>

      <div className="cyber-card p-5 rounded-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">
            {education.icon}
          </span>

          <span className="font-mono text-xs text-cyber-green">
            {education.period}
          </span>
        </div>

        <h4 className="font-sans font-bold text-cyber-text mb-1">
          {education.degree}
        </h4>

        <p className="text-sm text-cyber-muted mb-2">
          {education.institution}
        </p>

        <span className="font-mono text-xs text-cyber-cyan">
          {education.score}
        </span>
      </div>
    </div>
  );
}