export default function ContactCard({
  contact,
}) {
  return (
    <a
      href={contact.href}
      target={
        contact.href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel="noopener noreferrer"
      className="cyber-card p-5 rounded-sm flex items-center gap-4 text-left group"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center text-xl font-bold"
        style={{
          backgroundColor: `${contact.color}15`,
          color: contact.color,
          border: `1px solid ${contact.color}40`,
        }}
      >
        {contact.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted">
          {contact.label}
        </div>

        <div className="text-sm text-cyber-text truncate group-hover:text-cyber-green transition-colors">
          {contact.value}
        </div>
      </div>

      <span
        className="text-sm group-hover:text-cyber-green transition-colors"
        style={{
          color: contact.color,
        }}
      >
        →
      </span>
    </a>
  );
}