import { profile } from "../../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-cyber-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <div className="font-mono text-xs text-cyber-muted">
          <span className="text-cyber-green">
            ©
          </span>{" "}
          {new Date().getFullYear()}{" "}
          {profile.name}. Built with React +
          Tailwind.
        </div>

        <div className="font-mono text-xs text-cyber-muted">
          <span className="text-cyber-green">
            //
          </span>{" "}
          crafted with{" "}
          <span className="text-cyber-magenta">
            ♥
          </span>{" "}
          and lots of{" "}
          <span className="text-cyber-cyan">
            caffeine
          </span>
        </div>
      </div>
    </footer>
  );
}