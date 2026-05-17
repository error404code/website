export const projects = [
  {
    title: "Nokia RTU Report Builder",
    eyebrow: "Automation project",
    summary:
      "In collaboration with a colleague, I helped design and develop a Python desktop application that automates RTU Excel reporting by combining BW, PWR, and region workbooks into a repeatable masterfile workflow.",
    impact: [
      "Automated workbook ingestion, cleanup, merging, and output generation across multiple Excel sources",
      "Normalized bandwidth and power data, resolved duplicate rows, and generated more consistent report tables",
      "Added MRBTS-based filtering and packaged the app for desktop use so non-technical users could run the workflow without touching the code",
    ],
    stack: ["Python", "Pandas", "Excel automation", "Desktop app", "Tkinter"],
  },
  {
    title: "Network Latency Dashboard",
    eyebrow: "Analytics project",
    summary:
      "I built Power BI views to compare application-level network behavior, focusing on throughput, RTT, user counts, and data volume patterns.",
    impact: [
      "Shaped raw operational data into dashboard-ready metrics",
      "Compared latency and throughput signals across regional datasets",
      "Used visual analysis to make performance patterns easier to explain",
    ],
    stack: ["Power BI", "Power Query", "DAX", "Excel", "Network KPIs"],
  },
  {
    title: "Malware Signature Research",
    eyebrow: "Security research",
    summary:
      "At Nokia, I researched malware behavior and supported signature quality through Snort rule work, MITRE ATT&CK mapping, and analysis workflows.",
    impact: [
      "Developed and modified signatures for emerging malware activity",
      "Mapped behaviors to MITRE ATT&CK tactics and techniques",
      "Used static, dynamic, and passive analysis to support detection quality",
    ],
    stack: ["Snort", "MITRE ATT&CK", "OSINT", "Wireshark", "Malware analysis"],
  },
];
