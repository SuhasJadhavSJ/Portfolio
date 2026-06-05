import SectionHeader from "../common/SectionHeader";
import StatCard from "../cards/StatCard";

export default function About() {
  const stats = [
    {
      label: "Hands-on Labs",
      value: "4+",
      color: "#00ff88",
    },
    {
      label: "TryHackMe Rooms",
      value: "50+",
      color: "#00d9ff",
    },
    {
      label: "MITRE Techniques",
      value: "15+",
      color: "#ff00aa",
    },
    {
      label: "Certifications",
      value: "5",
      color: "#ffcc00",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="01"
          title="about_me"
          subtitle="// who am I?"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2 space-y-4 text-cyber-text leading-relaxed">
            <p>
              <span className="text-cyber-green font-mono">
                $
              </span>{" "}
              Final-year B.Tech Computer Science student
              with hands-on{" "}
              <span className="text-cyber-magenta">
                offensive
              </span>{" "}
              and{" "}
              <span className="text-cyber-cyan">
                defensive
              </span>{" "}
              security experience across home labs,
              TryHackMe simulations, and structured
              incident response exercises.
            </p>

            <p>
              Proficient in{" "}
              <span className="text-cyber-green">
                SIEM monitoring
              </span>{" "}
              (Wazuh, Splunk),{" "}
              <span className="text-cyber-green">
                network traffic analysis
              </span>{" "}
              (Wireshark), and{" "}
              <span className="text-cyber-green">
                vulnerability assessment
              </span>{" "}
              (Nmap, OpenVAS).
            </p>

            <p>
              I am actively training for{" "}
              <span className="text-cyber-magenta font-semibold">
                Security Engineer
              </span>
              ,{" "}
              <span className="text-cyber-magenta font-semibold">
                Blue Team
              </span>{" "}
              and{" "}
              <span className="text-cyber-magenta font-semibold">
                Red Team
              </span>{" "}
              roles — with a strong foundation in
              MITRE ATT&CK, NIST SP 800-61, and the
              Cyber Kill Chain.
            </p>

            <p className="text-cyber-muted italic">
              "The best way to defend is to think
              like an attacker."
            </p>
          </div>

          <div className="space-y-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}