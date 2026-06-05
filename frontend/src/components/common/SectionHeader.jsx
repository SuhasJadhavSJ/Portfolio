export default function SectionHeader({
  tag,
  title,
  subtitle,
}) {
  return (
    <div className="space-y-2">
      <div className="font-mono text-xs text-cyber-muted flex items-center gap-3">
        <span className="text-cyber-green">
          // {tag}
        </span>

        <span className="flex-1 h-px bg-cyber-border"></span>
      </div>

      <h2 className="font-sans text-4xl md:text-5xl font-bold text-cyber-text">
        <span className="gradient-text">
          {title}
        </span>
      </h2>

      <p className="font-mono text-sm text-cyber-muted">
        {subtitle}
      </p>
    </div>
  );
}