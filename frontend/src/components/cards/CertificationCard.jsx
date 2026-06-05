export default function CertificationCard({
  cert,
}) {
  return (
    <div className="cyber-card p-4 rounded-sm flex items-center gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 bg-cyber-green/10 border border-cyber-green/30 rounded-sm flex items-center justify-center text-2xl group-hover:bg-cyber-green/20 transition-colors">
        {cert.icon}
      </div>

      <div className="flex-1">
        <div className="font-sans text-sm font-semibold text-cyber-text">
          {cert.name}
        </div>

        <div className="font-mono text-xs text-cyber-muted">
          {cert.detail}
        </div>
      </div>

      <span className="font-mono text-xs text-cyber-green">
        ✓
      </span>
    </div>
  );
}