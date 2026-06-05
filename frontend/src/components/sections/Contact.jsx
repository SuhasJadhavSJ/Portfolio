import { profile } from "../../data/data";

import SectionHeader from "../common/SectionHeader";
import ContactCard from "../cards/ContactCard";

export default function Contact() {
  const contacts = [
    {
      label: "email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "✉",
      color: "#00ff88",
    },
    {
      label: "phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(
        /\s|-/g,
        ""
      )}`,
      icon: "☎",
      color: "#00d9ff",
    },
    {
      label: "github",
      value: profile.github,
      href: `https://${profile.github}`,
      icon: "⎇",
      color: "#ff00aa",
    },
    {
      label: "linkedin",
      value: profile.linkedin,
      href: `https://${profile.linkedin}`,
      icon: "in",
      color: "#ffcc00",
    },
    {
      label: "tryhackme",
      value: profile.tryhackme,
      href: `https://${profile.tryhackme}`,
      icon: "🔓",
      color: "#a855f7",
    },
    {
      label: "location",
      value: profile.location,
      href: "#",
      icon: "⌖",
      color: "#f97316",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-cyber-surface/30"
    >
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader
          tag="06"
          title="let's_connect"
          subtitle="// open for security analyst / soc roles"
        />

        <p className="mt-8 text-lg text-cyber-muted max-w-2xl mx-auto">
          Actively seeking{" "}
          <span className="text-cyber-green">
            full-time
          </span>{" "}
          or{" "}
          <span className="text-cyber-cyan">
            internship
          </span>{" "}
          opportunities as a SOC Analyst,
          Security Analyst, or Blue/Red Team
          member. Let's secure systems together.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.label}
              contact={contact}
            />
          ))}
        </div>

        <div className="mt-12 cyber-card p-8 rounded-sm relative overflow-hidden scan-line">
          <div className="font-mono text-sm text-cyber-green mb-2">
            $ ./recruit.sh --candidate=suhas
          </div>

          <div className="font-mono text-xs text-cyber-muted">
            ✓ Candidate profile loaded
            <br />
            ✓ Skills verified
            <br />
            ✓ Ready for interview
            <br />
            <span className="text-cyber-green">
              ✓ Status: AVAILABLE FOR HIRE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}