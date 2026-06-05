export default function PathCard({ path }) {
  return (
    <div className="cyber-card p-5 rounded-sm relative">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">
          {path.icon}
        </span>

        <span
          className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
          style={{
            color: path.color,
            backgroundColor: `${path.color}20`,
            border: `1px solid ${path.color}40`,
          }}
        >
          {path.status}
        </span>
      </div>

      <div className="font-sans text-sm font-bold text-cyber-text mb-2">
        {path.name}
      </div>

      <ul className="space-y-1">
        {path.topics.map((topic) => (
          <li
            key={topic}
            className="text-xs text-cyber-muted flex items-center gap-1.5"
          >
            <span
              className="text-[8px]"
              style={{
                color: path.color,
              }}
            >
              ▸
            </span>

            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}