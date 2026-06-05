export default function ProjectCard({ project }) {
  return (
    <div className="cyber-card rounded-sm overflow-hidden flex flex-col">
      <div
        className="p-6 border-b border-cyber-border"
        style={{
          background: `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`,
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <span className="text-4xl">
            {project.icon}
          </span>

          <span
            className="font-mono text-xs px-3 py-1 rounded-sm font-semibold"
            style={{
              color: project.color,
              backgroundColor: `${project.color}20`,
              border: `1px solid ${project.color}50`,
            }}
          >
            {project.type.toUpperCase()}
          </span>
        </div>

        <h3 className="font-sans text-xl font-bold text-cyber-text mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-cyber-muted">
          {project.description}
        </p>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Highlights */}
        <div>
          <div className="font-mono text-xs text-cyber-cyan uppercase tracking-wider mb-2">
            // key_highlights
          </div>

          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-cyber-text flex items-start gap-2"
              >
                <span className="font-mono text-cyber-green mt-0.5">
                  [{String(index + 1).padStart(2, "0")}]
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MITRE */}
        <div>
          <div className="font-mono text-xs text-cyber-cyan uppercase tracking-wider mb-2">
            // mitre_att&ck
          </div>

          <div className="flex flex-wrap gap-2">
            {project.mitre.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2 py-1 border border-cyber-border text-cyber-text rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className="font-mono text-xs text-cyber-cyan uppercase tracking-wider mb-2">
            // tools_used
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="tag-pill font-mono text-xs px-3 py-1 border border-cyber-border text-cyber-muted rounded-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}