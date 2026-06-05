export const profile = {
  name: "Suhas Jadhav",
  title: "Cybersecurity Analyst",
  roles: ["Red Team", "Blue Team", "SOC Operations"],
  location: "Chhatrapati Sambhaji Nagar, MH",
  phone: "+91 84838-62673",
  email: "suhasjadhavsj046@gmail.com",
  github: "github.com/suhasjadhavsj",
  linkedin: "linkedin.com/in/suhas-jadhav-60214420b",
  tryhackme: "tryhackme.com/p/suhasjadhavsj046",
  summary:
    "Final-year B.Tech Computer Science student with hands-on offensive and defensive security experience across home labs, TryHackMe simulations, and structured incident response exercises. Proficient in SIEM monitoring (Wazuh, Splunk), network traffic analysis (Wireshark), and vulnerability assessment (Nmap, OpenVAS). Skilled in red team techniques including exploitation, privilege escalation, and lateral movement, alongside blue team capabilities in log analysis, IOC identification, and NIST SP 800-61 incident response. Seeking a fresher SOC Analyst, Security Analyst, or Blue/Red Team role to apply technical knowledge in a live operational environment.",
};

export const skills = [
  {
    category: "Red Team",
    color: "#ff00aa",
    icon: "⚔",
    items: [
      "Exploitation & Post-exploitation",
      "Privilege Escalation",
      "Reconnaissance (Nmap, Gobuster)",
      "Vulnerability Scanning (OpenVAS, Nessus)",
      "Payload Crafting (Metasploit basics)",
      "OWASP Top 10 Attacks",
    ],
  },
  {
    category: "Blue Team",
    color: "#00d9ff",
    icon: "🛡",
    items: [
      "SIEM Monitoring & Alert Triage (Wazuh, Splunk)",
      "Log Analysis (auth.log, DNS, HTTP)",
      "IOC Identification",
      "Incident Response (NIST SP 800-61)",
      "Threat Hunting",
    ],
  },
  {
    category: "Frameworks",
    color: "#00ff88",
    icon: "📐",
    items: [
      "MITRE ATT&CK",
      "Cyber Kill Chain",
      "NIST SP 800-61",
      "OWASP Top 10",
    ],
  },
  {
    category: "Tools",
    color: "#ffcc00",
    icon: "🔧",
    items: [
      "Wazuh",
      "Splunk",
      "Wireshark",
      "Nmap",
      "Metasploit (basics)",
      "Burp Suite (basics)",
      "Procmon",
      "Process Explorer",
      "VirusTotal",
      "Snort",
      "OpenVAS",
    ],
  },
  {
    category: "Networking",
    color: "#a855f7",
    icon: "🌐",
    items: [
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Firewalls",
      "Proxy",
      "Packet Analysis",
    ],
  },
  {
    category: "OS & Scripting",
    color: "#f97316",
    icon: "💻",
    items: [
      "Kali Linux",
      "Ubuntu",
      "Windows",
      "Python (scripting)",
      "Bash",
      "Git / GitHub",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Home SOC Lab — SIEM Monitoring & Incident Detection",
    type: "Blue Team",
    color: "#00d9ff",
    icon: "🛡",
    tools: ["Wazuh (Ubuntu)", "Nmap", "Wireshark", "auth.log"],
    description:
      "Deployed a single-node Wazuh SIEM on Ubuntu, onboarded a Windows agent to centralize log collection and event correlation.",
    highlights: [
      "Simulated 3 attack scenarios (Nmap port scan, SSH brute-force, proxy bypass) — generated 50+ alerts and validated true vs. false positives.",
      "Investigated auth.log entries to reconstruct attacker timelines; identified 2 malicious source IPs and documented containment steps.",
      "Mapped detected events to MITRE ATT&CK techniques: T1046 (Network Scan), T1110 (Brute Force), T1572 (Protocol Tunneling).",
    ],
    mitre: ["T1046", "T1110", "T1572"],
  },
  {
    id: 2,
    name: "Vulnerability Assessment & Exploitation Lab",
    type: "Red Team",
    color: "#ff00aa",
    icon: "⚔",
    tools: ["Kali Linux", "Nmap", "OpenVAS", "Metasploit", "Gobuster"],
    description:
      "Set up an isolated lab with intentionally vulnerable VMs (Metasploitable 2 / DVWA); performed full-scope vulnerability assessment using OpenVAS.",
    highlights: [
      "Conducted reconnaissance with Nmap (service/version detection) and directory brute-force with Gobuster — enumerated attack surface.",
      "Exploited CVE-based vulnerabilities using Metasploit modules; achieved initial access and performed basic post-exploitation (enumeration, persistence check).",
      "Documented findings in a structured vulnerability report: risk rating, CVSS score, evidence screenshots, and remediation recommendations.",
    ],
    mitre: ["T1595", "T1190", "T1059"],
  },
  {
    id: 3,
    name: "Web Application Penetration Testing (DVWA / bWAPP)",
    type: "Red Team",
    color: "#ff00aa",
    icon: "🎯",
    tools: ["Burp Suite", "OWASP ZAP", "Kali Linux"],
    description:
      "Tested DVWA and bWAPP for OWASP Top 10 vulnerabilities — successfully exploited SQL Injection, XSS (Reflected & Stored), and Command Injection.",
    highlights: [
      "Used Burp Suite Proxy to intercept, manipulate, and replay HTTP requests; identified insecure direct object references and broken access control.",
      "Demonstrated privilege escalation from low-privileged user to admin via SQLi-based authentication bypass.",
      "Produced a pentest report with vulnerability descriptions, proof-of-concept steps, and developer-focused remediation guidance.",
    ],
    mitre: ["T1190", "T1059.007", "T1078"],
  },
  {
    id: 4,
    name: "Malware Analysis Lab — Static & Dynamic Analysis",
    type: "Blue Team",
    color: "#00d9ff",
    icon: "🦠",
    tools: ["Kali Linux", "Windows VM", "Procmon", "Process Explorer", "Wireshark"],
    description:
      "Built an isolated dual-VM lab (Kali + Windows) to safely detonate and analyse malware samples without host exposure.",
    highlights: [
      "Performed static analysis: extracted strings, PE header metadata, and file hashes (MD5, SHA-256); checked against VirusTotal — 34/70 engine detections.",
      "Conducted dynamic analysis: monitored process creation, registry key modifications (HKCU\\Run persistence), and C2 beacon traffic using Procmon and Wireshark.",
      "Extracted 5 IOCs (2 IPs, 2 domains, 1 mutex) and compiled a structured threat report aligned with MITRE ATT&CK T1547 (Boot/Logon Autostart).",
    ],
    mitre: ["T1547", "T1071", "T1057"],
  },
];

export const tryhackmePaths = [
  {
    name: "SOC Level 1",
    status: "Active",
    icon: "🛡",
    color: "#00d9ff",
    topics: [
      "Alert triage",
      "Phishing analysis",
      "Network traffic analysis",
      "Digital forensics",
      "Jr Penetration Tester prep",
    ],
  },
  {
    name: "Pre-Security",
    status: "Completed",
    icon: "✅",
    color: "#00ff88",
    topics: [
      "Networking fundamentals",
      "Linux basics",
      "Web fundamentals",
      "Windows basics",
    ],
  },
  {
    name: "Cyber Security 101",
    status: "Completed",
    icon: "✅",
    color: "#00ff88",
    topics: [
      "Offensive security",
      "Defensive security",
      "Networking",
      "Web exploitation",
    ],
  },
  {
    name: "Advent of Cyber",
    status: "Completed",
    icon: "🎄",
    color: "#ffcc00",
    topics: [
      "Security incident simulation",
      "Blue team exercises",
      "Red team exercises",
    ],
  },
];

export const ctfChallenges = [
  {
    title: "Incident Response Simulation",
    platform: "TryHackMe",
    type: "Blue Team",
    difficulty: "Intermediate",
    status: "Completed",
    description:
      "Investigated a simulated security breach: analysed auth.log, identified compromised accounts, traced lateral movement, and recommended containment strategies aligned with NIST SP 800-61.",
    skills: ["Log Analysis", "Forensics", "MITRE ATT&CK"],
    badge: "🔥",
  },
  {
    title: "Network Scanning & Enumeration",
    platform: "TryHackMe",
    type: "Red Team",
    difficulty: "Beginner",
    status: "Completed",
    description:
      "Performed network reconnaissance using Nmap, discovered open ports and services, and identified vulnerable services running on target machines.",
    skills: ["Nmap", "Reconnaissance", "Enumeration"],
    badge: "🎯",
  },
  {
    title: "Web Exploitation Suite",
    platform: "TryHackMe",
    type: "Red Team",
    difficulty: "Intermediate",
    status: "Completed",
    description:
      "Exploited SQL injection, XSS (stored/reflected), command injection, and file upload vulnerabilities across multiple web applications.",
    skills: ["Burp Suite", "SQLi", "XSS", "OWASP Top 10"],
    badge: "💉",
  },
  {
    title: "Digital Forensics Room",
    platform: "TryHackMe",
    type: "Blue Team",
    difficulty: "Intermediate",
    status: "Ongoing",
    description:
      "Analysing disk images, memory dumps, and network captures to reconstruct incident timelines and extract IOCs.",
    skills: ["Volatility", "Autopsy", "Wireshark"],
    badge: "🔍",
  },
  {
    title: "Phishing Analysis Challenge",
    platform: "TryHackMe",
    type: "Blue Team",
    difficulty: "Beginner",
    status: "Completed",
    description:
      "Analysed phishing email headers, identified spoofed senders, extracted malicious URLs and attachments, and documented findings.",
    skills: ["Email Analysis", "Threat Intel", "IOC Extraction"],
    badge: "📧",
  },
  {
    title: "Jr Penetration Testing Path",
    platform: "TryHackMe",
    type: "Red Team",
    difficulty: "Intermediate",
    status: "In Progress",
    description:
      "Systematic penetration testing methodology: reconnaissance, scanning, exploitation, post-exploitation, and reporting.",
    skills: ["Metasploit", "Exploitation", "Privilege Escalation"],
    badge: "⚔",
  },
  {
    title: "Malware Traffic Analysis",
    platform: "TryHackMe",
    type: "Blue Team",
    difficulty: "Intermediate",
    status: "Completed",
    description:
      "Analysed PCAP files to identify C2 communication, extracted IOCs (domains, IPs, user-agents), and mapped to MITRE ATT&CK.",
    skills: ["Wireshark", "PCAP Analysis", "Threat Intel"],
    badge: "🌐",
  },
  {
    title: "OSINT Challenge",
    platform: "TryHackMe",
    type: "Red Team",
    difficulty: "Beginner",
    status: "Completed",
    description:
      "Gathered intelligence using open-source tools: Google dorking, social media analysis, metadata extraction, and geolocation.",
    skills: ["OSINT", "Reconnaissance", "Metadata"],
    badge: "🔎",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "DIEMS, Aurangabad",
    period: "2022 – 2026",
    score: "CGPA: 7.77 / 10",
    icon: "🎓",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    institution: "Government Polytechnic, Jalna",
    period: "2021 – 2023",
    score: "83.80%",
    icon: "📚",
  },
];

export const certifications = [
  { name: "TryHackMe – Advent of Cyber", detail: "Security Incident Simulation", icon: "🎄" },
  { name: "TryHackMe – Pre-Security Path", detail: "Networking, Linux, Web, Windows", icon: "🛡" },
  { name: "TryHackMe – Cyber Security 101", detail: "Offensive & Defensive Security", icon: "💡" },
  { name: "AWS Academy – Cloud Foundations", detail: "AWS Cloud Core Concepts", icon: "☁" },
  { name: "ServiceNow – Platform Basics", detail: "ITSM context for SOC ticketing", icon: "🎫" },
];
