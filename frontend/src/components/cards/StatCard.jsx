export default function StatCard({
  label,
  value,
  color,
}) {
  return (
    <div
      className="cyber-card p-5 rounded-sm border-l-4"
      style={{
        borderLeftColor: color,
      }}
    >
      <div
        className="font-mono text-4xl font-bold"
        style={{
          color,
        }}
      >
        {value}
      </div>

      <div className="font-mono text-xs text-cyber-muted uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}