/**
 * Single source of truth for every piece of content on the site.
 *
 * Sourced from Tulshi_Chandra_Das_Resume.Net.docx; every external URL comes
 * from the link annotations embedded in Tulshi_Chandra_Das_Resume.Net.pdf.
 *
 * The desktop/Electron details (packaging targets, auto-update) come from the
 * published LithiumGit release assets rather than the résumé.
 */

export const profile = {
  name: "Tulshi Chandra Das",
  shortName: "Tulshi Das",
  initials: "TD",
  role: "Principal Software Engineer",
  tagline: "Cross-Platform Desktop & Full-Stack Engineering",
  location: "Dhaka, Bangladesh",
  email: "tulshidas37@gmail.com",
  phone: "+880 1580614567",
  /** Square portrait; the hero falls back to an initials monogram if null. */
  photo: "/assets/profile.jpg" as string | null,
  resumeFile: "/assets/Tulshi_Chandra_Das_Resume.pdf",
  summary:
    "Principal Software Engineer with 6+ years of production experience, focused on cross-platform desktop applications built with Electron.js, TypeScript and Node.js. Author of LithiumGit, a publicly released Electron Git client that ships installers and differential auto-updates to Windows, macOS and Linux from a single codebase. That desktop work sits on top of six years of enterprise platform engineering — ASP.NET Core, MSSQL, AWS and Azure — across asset management, property, compliance and supply-chain systems used at scale.",
  languages: [
    { label: "English", value: "Professional working" },
    { label: "Bengali", value: "Native" },
  ],
};

// All three taken from the link annotations embedded in the résumé PDF.
export const socials = {
  github: "https://github.com/TulshiDas39",
  linkedin: "https://www.linkedin.com/in/tulshi-das-29b9bb125",
  stackoverflow: "https://stackoverflow.com/users/9746445/tulshi-chandra-das",
};

export const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "", label: "Products shipped" },
  { value: 3, suffix: "", label: "Desktop platforms shipped" },
  { value: 1, suffix: "", label: "Published paper" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  stack: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "BJIT",
    role: "Principal Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "September 2023 — Present",
    stack: [
      "TypeScript",
      "React",
      "WinForms",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "MSSQL",
      "Azure",
      "Docker",
    ],
    highlights: [
      "Building BIS, a Windows desktop application that runs on engineers’ tablets in the field, managing bridge fault records and pairing captured images with detailed inspection data.",
      "Leading the development of FEIM, an asset management system enabling maintainers of the assets to handle an asset’s physical state, acquisition information, pricing, repairing, and configuring maintenance workflow for engineers.",
      "Customizing and maintaining MyHome, a property portal featuring thousands of houses and properties to rent, parking, amenities booking with custom service management for users (service requestors) and property administrators.",
      "Maintaining IMPORTs, an enterprise property and project management system providing comprehensive CRUD operations, Excel import processing, and role-based access control across multiple entities (projects, properties, tenants, contracts, parking).",
      "Mentoring developers, designing and implementing scalable software architecture patterns, enhancing system reliability, and supporting seamless global deployments.",
    ],
  },
  {
    company: "KAZ Software",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "January 2020 — August 2023",
    stack: [
      "C#",
      "ASP.NET Core",
      "MSSQL",
      "NoSQL",
      "TypeScript",
      "Angular",
      "React",
      "Node.js",
      "AWS",
    ],
    highlights: [
      "Designed and developed scalable web applications deployed on AWS and Azure, cutting operational costs by 25% and improving system reliability.",
      "Modernized legacy software projects, enhancing application performance with ASP.NET Core and Docker.",
      "Optimized APIs for millions of users with load-balanced API Gateways, reducing downtime and automating deployments.",
      "Managed and mentored subordinates, reviewed code through Agile practices and technical guidance.",
    ],
  },
  {
    company: "Brainstation-23",
    role: "Internship Trainee",
    location: "Dhaka, Bangladesh",
    period: "January 2019 — June 2019",
    stack: ["Electron.js", "JavaScript", "AngularJS", "C#"],
    highlights: [
      "Built and maintained features for cross-platform desktop and web applications, working primarily in Electron.js and JavaScript.",
      "Collaborated with senior engineers on Intellifriend, a real-time activity monitoring agent covering background execution and system-level capture of user interaction on Windows, Linux and macOS.",
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  org: string;
  link: string | null;
  linkLabel: string | null;
  description: string;
  tags: string[];
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "LithiumGit",
    role: "Author & Developer",
    org: "Personal project",
    link: "https://lithiumgit.com",
    linkLabel: "lithiumgit.com",
    description:
      "A clean, fast Git client that makes everyday version-control tasks simple and visual. The interactive graph explains history at a glance — inspect any commit and run merge, rebase, cherry-pick or branch creation right in context. Built in Electron with a TypeScript/React renderer and shipped from one codebase to Windows, macOS (Apple silicon and Intel) and Linux, with electron-builder packaging and differential auto-updates. Origin-independent: it works with GitHub, GitLab, Bitbucket, Gerrit or any other Git remote, and uses the Git you already have installed. No registration, no sign-in. Free and open source.",
    tags: [
      "Electron",
      "TypeScript",
      "React",
      "electron-builder",
      "Auto-update",
      "Windows · macOS · Linux",
    ],
    featured: true,
  },
  {
    name: "Intellifriend",
    role: "Trainee Software Engineer",
    org: "Brainstation-23",
    link: null,
    linkLabel: null,
    description:
      "A real-time activity monitoring agent that tracks a user’s activity on a computer device (Windows, Linux, Mac) and analyzes the data to generate comprehensive productivity insight for employees. Built as an Electron desktop client with background execution and system-level capture of keyboard, mouse and application usage.",
    tags: ["Electron.js", "JavaScript", "AngularJS", "Activity monitoring"],
  },
  {
    name: "BIS",
    role: "Senior Developer",
    org: "BJIT",
    link: null,
    linkLabel: null,
    description:
      "Bridge Inspection System — a Windows desktop application running on engineers’ tablets in the field, managing faults of bridges and pairing captured images with detailed inspection information.",
    tags: ["C#", "WinForms", "SQLite", "Desktop", "Field tooling"],
  },
  {
    name: "MyHome",
    role: "Senior Developer",
    org: "BJIT",
    link: "https://myhome-aspire.proexcel.com.ph",
    linkLabel: "myhome-aspire.proexcel.com.ph",
    description:
      "A service maintenance system for residents featuring thousands of houses and properties to rent, parking, and amenities booking with custom service management.",
    tags: ["ASP.NET Core", "MVC", "MongoDB", "Azure"],
  },
  {
    name: "FEIM",
    role: "Senior Developer",
    org: "BJIT",
    link: null,
    linkLabel: null,
    status: "In development",
    description:
      "An asset management system enabling maintainers of the assets to handle an asset’s physical state, acquisition information, pricing, repairing, and configuring maintenance workflow for engineers.",
    tags: ["ASP.NET Core", "MVC", "Entity Framework", "MSSQL"],
  },
  {
    name: "NRW",
    role: "Senior Developer",
    org: "BJIT",
    link: "https://nrw.cwasabd.org",
    linkLabel: "nrw.cwasabd.org",
    description:
      "A service maintenance system for residents featuring thousands of houses and properties to rent, parking, and amenities booking with custom service management.",
    tags: ["ASP.NET Core", "MSSQL", "React", "Docker"],
  },
  {
    name: "Reganalytics",
    role: "Developer",
    org: "KAZ Software",
    link: "https://www.reganalytics.com",
    linkLabel: "reganalytics.com",
    description:
      "A compliance platform providing real-time updates on global trade regulations. Upgraded its technology and framework for a measurable performance improvement across the application.",
    tags: ["ASP.NET Core", "React", "MSSQL", "AWS"],
  },
  {
    name: "WebEvv",
    role: "Developer",
    org: "KAZ Software",
    link: "https://www.webevv.com",
    linkLabel: "webevv.com",
    description:
      "A cloud-based EVV platform with real-time tracking and automated workflows, raising operational efficiency for care providers.",
    tags: ["ASP.NET Core", "React", "AWS", "DynamoDB"],
  },
  {
    name: "Devensoft",
    role: "Software Engineer",
    org: "KAZ Software",
    link: "https://www.devensoft.com",
    linkLabel: "devensoft.com",
    description:
      "A merger and acquisition platform serving millions of users with seamless and reliable services.",
    tags: ["C#", "ASP.NET", "MVC", "MSSQL"],
  },
  {
    name: "P1ston",
    role: "Software Engineer",
    org: "KAZ Software",
    link: "https://p1ston.com",
    linkLabel: "p1ston.com",
    description:
      "A supply chain workflow solution whose scalable ERP module enables automated purchase order management, real-time supplier coordination, and complete supply chain traceability.",
    tags: ["ASP.NET Core", "TypeScript", "React", "AWS", "DynamoDB"],
  },
];

export type SkillIcon =
  | "appWindow"
  | "code"
  | "layers"
  | "monitor"
  | "network"
  | "database"
  | "cloud"
  | "settings"
  | "sparkles"
  | "wrench"
  | "users";

export type SkillGroup = { title: string; icon: SkillIcon; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Desktop & Cross-Platform",
    icon: "appWindow",
    items: [
      "Electron.js",
      "electron-builder",
      "electron-updater (auto-update)",
      "Main/renderer IPC",
      "Background processes",
      "Windows · macOS · Linux packaging",
      "WinForms",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    items: ["TypeScript", "JavaScript", "C#", "Python", "C", "C++"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    items: ["Node.js (NestJS)", "ASP.NET Core", "ASP.NET MVC", "Blazor"],
  },
  {
    title: "Front-End Technologies",
    icon: "monitor",
    items: ["React", "Angular", "Redux", "Bootstrap"],
  },
  {
    title: "Architectures & Patterns",
    icon: "network",
    items: [
      "CQRS",
      "Domain Driven Design",
      "Microservices",
      "Client-Server",
      "Event-Driven",
      "Serverless",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      "MSSQL (Proficient)",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "Azure Cosmos DB",
      "SQLite",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: "cloud",
    items: [
      "AWS — IAM, EC2, Lambda, S3, SNS, SQS",
      "Azure — VM, AD, DevOps, App Services",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "settings",
    items: ["Git", "Azure DevOps", "TFS", "Docker", "Jenkins", "IIS", "Jira"],
  },
  {
    title: "AI Tools & Technologies",
    icon: "sparkles",
    items: [
      "GitHub Copilot",
      "Claude Code",
      "ChatGPT",
      "AI Prompt Engineering",
      "Google Gemini AI",
    ],
  },
  {
    title: "Other Skills",
    icon: "wrench",
    items: ["Entity Framework Core", "REST", "LINQ", "NUnit", "xUnit"],
  },
  {
    title: "Agile Methodologies",
    icon: "users",
    items: ["Scrum", "Kanban"],
  },
];

/** Core technologies for the marquee strip beneath the hero. */
export const coreTech = [
  "Electron",
  "TypeScript",
  "Node.js",
  "React",
  "Cross-platform desktop",
  "C#",
  ".NET",
  "ASP.NET Core",
  "Entity Framework",
  "Blazor",
  "Angular",
  "NestJS",
  "MSSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "Docker",
  "Python",
  "Microservices",
  "CQRS",
  "DDD",
];

export type Credential = {
  kind: "Certification" | "Publication" | "Achievement";
  title: string;
  issuer: string;
  meta: string;
  link: string | null;
  linkLabel: string;
};

export const credentials: Credential[] = [
  {
    kind: "Certification",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    meta: "AWS Certified",
    link: "https://www.credly.com/badges/f12f4946-162b-437e-93b6-fefc82edc62b",
    linkLabel: "View badge",
  },
  {
    kind: "Publication",
    title:
      "Analyzing Golang Projects’ Architecture Using Code Metrics and Code Smell",
    issuer: "Conference paper · Springer",
    meta: "26 June 2021",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-1045-5_5",
    linkLabel: "Read the paper",
  },
  {
    kind: "Achievement",
    title: "Best Performer Award",
    issuer: "BJIT",
    meta: "Fiscal year 2024–25",
    link: "https://github.com/TulshiDas39/files/releases/download/v1.0.0/Best_Performer_Certificate.pdf",
    linkLabel: "View certificate",
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  school: "University of Dhaka",
  location: "Dhaka, Bangladesh",
  period: "2015 — 2019",
  link: "https://du.ac.bd",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
