export interface SkillItem {
  name: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  embedUrl?: string;
  zaloMiniAppUrl?: string;
  isLive: boolean;
  statusNote?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  type: "Work" | "Internship";
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date: string;
  highlight?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    englishName: string;
    role: string;
    focus: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    githubUsername: string;
    bio: string;
    avatarUrl: string;
    availableForHire: boolean;
    heroPills: string[];
    languages: { name: string; proficiency: string }[];
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Trinh Duc Anh",
    englishName: "Duc Anh",
    role: "Frontend Developer",
    focus: "ReactJS & TypeScript Specialist",
    location: "Dist. 12, Ho Chi Minh City, Vietnam",
    phone: "0898498720",
    email: "yunct1234@gmail.com",
    github: "https://github.com/YunCt123",
    githubUsername: "YunCt123",
    avatarUrl: "/profile.jpg",
    bio: "Frontend Developer passionate about ReactJS and TypeScript. Looking for an opportunity to build scalable web applications, contribute to real-world products, and continuously improve technical and problem-solving skills.",
    availableForHire: true,
    heroPills: [
      "ReactJS",
      "TypeScript",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Zustand",
    ],
    languages: [
      { name: "English", proficiency: "Intermediate (IELTS 5.5 - 2022)" },
      { name: "Vietnamese", proficiency: "Native" },
    ],
  },

  skills: [
    {
      title: "Frontend Engineering",
      description: "Developing responsive, performant, and accessible user interfaces",
      icon: "Code2",
      skills: [
        { name: "ReactJS", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "NextJS", highlight: true },
        { name: "React Native", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Zustand", highlight: true },
        { name: "HTML5", highlight: false },
        { name: "CSS3", highlight: false },
        { name: "Vercel", highlight: false },
      ],
    },
    {
      title: "Programming Languages",
      description: "Core software engineering foundations and algorithmic thinking",
      icon: "Terminal",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "Java", highlight: false },
      ],
    },
    {
      title: "Backend & Database",
      description: "API design, backend integration, and data modeling",
      icon: "Database",
      skills: [
        { name: "REST API", highlight: true },
        { name: "Node.js", highlight: false },
        { name: "MongoDB", highlight: false },
        { name: "Microsoft SQL Server", highlight: false },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Modern developer ecosystem, version control, and design handoff",
      icon: "Wrench",
      skills: [
        { name: "GitHub", highlight: true },
        { name: "Figma", highlight: true },
        { name: "VS Code", highlight: false },
        { name: "Android Studio", highlight: false },
        { name: "Postman", highlight: false },
      ],
    },
  ],

  projects: [
    {
      id: "rex-english",
      title: "Rex-English",
      role: "Frontend Developer",
      period: "Jan 2026 – June 2026",
      type: "Enterprise Web & Zalo Mini App",
      description:
        "Rex English is an enterprise startup platform tailored for English education centers. The ecosystem features a comprehensive web platform and an integrated Zalo Mini App that streamlines center operations, optimizes multi-role user management, and handles student media processing workflows.",
      highlights: [
        "Managed user accounts and optimized CRM workflows from parent interactions to system backend processing.",
        "Handled UI implementation and built reusable shared components across the project.",
        "Collaborated with backend developers to design seamless, robust database schemas and API interfaces for FE integration.",
        "Initialized the Zalo Mini App and designed UI components tailored for parents, students, and teachers.",
      ],
      tags: ["ReactJS", "Next.js", "ZMP-CLI", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://rexenglish.com",
      embedUrl: "https://rexenglish.com",
      zaloMiniAppUrl: "https://rex-zalomini-app.vercel.app/",
      isLive: true,
      featured: true,
    },
    {
      id: "station-based-ev",
      title: "Station-based EV Rental Platform",
      role: "Frontend Developer",
      period: "Oct 2025 – Nov 2025",
      type: "Multi-platform EV Rental Solution",
      description:
        "A comprehensive electric vehicle rental and station management platform. The system delivers a multi-platform solution allowing users to seamlessly locate available rental stations, book diverse EV models, manage active rental sessions, and handle digital checkouts through both web and mobile interfaces.",
      highlights: [
        "Designed and built the entire mobile application using React Native and Expo Go for end users.",
        "Implemented identity verification workflows (KYC) required prior to vehicle rental.",
        "Integrated transaction history tracking and payment processing systems.",
      ],
      tags: ["React Native", "Expo Go", "Next.js", "TypeScript", "Tailwind CSS"],
      isLive: false,
      statusNote: "Backend database decommissioned",
      featured: true,
    },
    {
      id: "fptu-event-system",
      title: "FPTU-Event System",
      role: "Frontend Developer",
      period: "10 Dec 2025 – 30 Dec 2025",
      type: "Event Ticketing & Check-in Ecosystem",
      description:
        "An internal event registration and ticketing management ecosystem built specifically for FPT University. The system features a fully responsive web administration dashboard for event organizers alongside a dedicated mobile application that facilitates seamless user registrations and swift QR code check-ins.",
      highlights: [
        "Initialized both mobile and web project architectures from scratch.",
        "Developed QR code check-in functionality for streamlined event attendance management.",
        "Communicated and collaborated with backend developers to handle event seat allocations and ticketing workflows.",
      ],
      tags: ["React Native", "Expo Go", "TypeScript", "Tailwind CSS", "REST API"],
      isLive: false,
      statusNote: "Internal campus deployment closed",
      featured: true,
    },
    {
      id: "fitpick",
      title: "FitPick",
      role: "Frontend Developer",
      period: "Oct 2025 – Nov 2025",
      type: "Health & Nutrition Mobile App",
      description:
        "FitPick is a personalized health and nutrition mobile application designed to assist users in discovering and selecting healthy daily meals. Developed using React Native and TypeScript, the cross-platform application features an intuitive meal discovery engine, interactive weekly menu navigation, and integrated responsive search capabilities to optimize user dietary plans.",
      highlights: [
        "Focused on designing the web admin dashboard UI and building the mobile app using React Native & Expo Go.",
        "Collaborated with UI/UX graphic designers to align on app interfaces on Figma and successfully implemented them into code.",
      ],
      tags: ["React Native", "TypeScript", "Expo Go", "Figma", "UI/UX"],
      isLive: false,
      statusNote: "Backend database decommissioned",
      featured: true,
    },
  ],

  experience: [
    {
      role: "Data Operator",
      company: "Open Graph Labs",
      period: "19 October 2026 – Present",
      location: "Ho Chi Minh City",
      isCurrent: true,
      type: "Work",
      highlights: [
        "Participated in a real-world data collection project for Robot/Physical AI using smart wearable devices, including tactical/haptic gloves and first-person cameras.",
        "Carefully executed and strictly adhered to standard protocols for collecting and synchronizing multimodal data (images, videos, and force sensors).",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "FPT Software",
      period: "May 2025 – August 2025",
      location: "Ho Chi Minh City",
      isCurrent: false,
      type: "Internship",
      highlights: [
        "Front-end Development: Developed a web-based Project and Request Management System for enterprise use leveraging React 19, TypeScript, and Vite.",
        "UI/UX Engineering: Built responsive and interactive user interfaces utilizing Ant Design, Tailwind CSS, and Framer Motion.",
        "State Management & API: Implemented efficient global state management with Zustand and integrated RESTful APIs via Axios for seamless data handling.",
        "Core Feature Implementation: Developed key system modules including project tracking, financial request approval workflows, and role-based access control (Admin, Finance, Manager, Employee).",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "FPT University",
      period: "May 2023 – June 2026",
      details:
        "Major in Software Engineering. Focused on modern web and mobile architecture, data structures & algorithms, UI/UX engineering, and Agile software development workflows.",
    },
  ],

  certifications: [
    {
      name: "User Experience Research and Design",
      issuer: "Professional UX Certification",
      date: "Nov 2025",
      highlight: true,
    },
    {
      name: "Web Design for Everybody: Basics of Web Development & Coding",
      issuer: "Coursera / University of Michigan",
      date: "Sep 2023",
      highlight: false,
    },
    {
      name: "IELTS 5.5",
      issuer: "International English Language Testing System",
      date: "2022",
      highlight: false,
    },
  ],
};
