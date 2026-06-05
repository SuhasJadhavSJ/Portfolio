export default function SkillCard({ skill }) {
  return (
    <div className="cyber-card p-6 rounded-sm relative group">
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-10 text-6xl flex items-center justify-center"
        style={{
          color: skill.color,
        }}
      >
        {skill.icon}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-2xl"
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </span>

        <h3
          className="font-mono text-sm font-bold uppercase tracking-wider"
          style={{
            color: skill.color,
          }}
        >
          {skill.category}
        </h3>
      </div>

      <ul className="space-y-2">
        {skill.items.map((item) => (
          <li
            key={item}
            className="text-sm text-cyber-text flex items-start gap-2"
          >
            <span
              className="font-mono text-xs mt-1"
              style={{
                color: skill.color,
              }}
            >
              ▸
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className="mt-4 h-px opacity-50"
        style={{
          background: `linear-gradient(90deg, ${skill.color}, transparent)`,
        }}
      ></div>
    </div>
  );
}