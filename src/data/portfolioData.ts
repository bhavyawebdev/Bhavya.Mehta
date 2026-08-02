import { PersonalInfo, SkillCategory, Project, ExperienceItem } from '../types';

export const personalData: PersonalInfo = {
  name: "Bhavya Mehta",
  role: "Full Stack Developer",
  tagline: "Engineering high-performance web applications with modern frontend architectures and robust backend systems.",
  email: "bhavyamehta2819@gmail.com",
  phone: "6353861318",
  whatsapp: "6353861318",
  github: "https://github.com/bhavyawebdev",
  linkedin: "https://www.linkedin.com/in/bhavya-mehta-83431434b/",
  location: "Bhavnagar, Gujarat, India",
  profileImage: "/bhavya.jpg",
  bioParagraphs: [
    "I am a passionate Full Stack Developer with a strong background in web technologies, software engineering principles, and user-centered design. Having completed my Diploma in Information Technology from Gyanmanjari Institute of Technology, I built a solid foundation through intensive hands-on internships and real-world project deployments.",
    "Currently, I am advancing my technical expertise by pursuing further studies in Information and Communication Technology (ICT) at Government Engineering College (GEC), Bhavnagar. My development philosophy focuses on writing clean, maintainable code, optimizing user experience, and delivering resilient backend architectures.",
    "Whether architecting responsive frontend interfaces in React and TypeScript or developing scalable server engines and databases in Node.js, Express, and SQL/NoSQL systems, I bring dedication, technical rigor, and continuous learning to every project."
  ],
  education: [
    {
      institution: "Government Engineering College (GEC), Bhavnagar",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Information and Communication Technology (ICT)",
      period: "Present",
      status: "Currently Pursuing",
      highlights: [
        "Specializing in Advanced Software Engineering, Cloud Architectures, and Communication Protocols",
        "Engaging in technical research and collaborative full-stack projects",
        "Refining cross-disciplinary engineering competencies"
      ]
    },
    {
      institution: "Gyanmanjari Institute of Technology",
      degree: "Diploma Engineering",
      field: "Information Technology (IT)",
      period: "Completed",
      status: "Graduated with Honors",
      highlights: [
        "Rigorous coursework in Data Structures, Algorithms, Web Technology, and Database Management",
        "Completed multiple industry internships alongside academic curriculum",
        "Built capstone full-stack web applications"
      ]
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect, and accessible user interfaces.",
    skills: [
      { name: "HTML5", iconName: "Code2", featured: true },
      { name: "CSS3", iconName: "Palette", featured: true },
      { name: "JavaScript (ES6+)", iconName: "FileCode", featured: true },
      { name: "React", iconName: "Atom", featured: true },
      { name: "TypeScript", iconName: "FileSpreadsheet", featured: true },
      { name: "Next.js", iconName: "Layers", featured: true }
    ]
  },
  {
    title: "Backend Development",
    description: "Developing scalable server engines, REST APIs, and microservices.",
    skills: [
      { name: "Node.js", iconName: "Server", featured: true },
      { name: "Express.js", iconName: "Cpu", featured: true },
      { name: "PHP", iconName: "Terminal", featured: true }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Architecting relational schemas, document stores, and cloud databases.",
    skills: [
      { name: "MySQL", iconName: "Database", featured: true },
      { name: "PostgreSQL", iconName: "DatabaseBackup", featured: true },
      { name: "MongoDB", iconName: "HardDrive", featured: true },
      { name: "NoSQL", iconName: "Table", featured: true },
      { name: "Firebase", iconName: "Flame", featured: true }
    ]
  },
  {
    title: "Tools & Ecosystem",
    description: "Leveraging modern workflows, cloud platforms, and developer tooling.",
    skills: [
      { name: "Google Cloud", iconName: "Cloud", featured: true },
      { name: "Canva", iconName: "Layout", featured: true },
      { name: "ChatGPT / AI SDKs", iconName: "Sparkles", featured: true },
      { name: "Notion", iconName: "BookOpen", featured: true },
      { name: "Slack", iconName: "MessageSquare", featured: true }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "lumina-hrm",
    title: "Lumina HRM",
    category: "Full Stack",
    description: "A comprehensive Human Resource Management System designed for automated employee onboarding, attendance tracking, leave requests, and payroll workflows.",
    longDescription: "Lumina HRM provides an enterprise-grade dashboard for organizational workflow automation. Features include multi-tier role permissions, interactive leave approval pipelines, real-time analytics for HR managers, and automated payroll calculations.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HR Tech"],
    liveUrl: "https://luminahrm.infinityfreeapp.com",
    githubUrl: "https://github.com/bhavyawebdev/lumina-hrm",
    featured: true,
    imagePlaceholderGradient: "from-blue-600 to-indigo-800",
    highlights: [
      "Live deployment serving active workforce workflows",
      "Automated attendance tracking and leave management engine",
      "Role-based access control (RBAC) for HR admins and employees"
    ]
  },
  {
    id: "yogami",
    title: "Yogami",
    category: "Frontend",
    description: "A modern digital wellness and yoga web application providing personalized pose routines, guided meditation timers, and habit tracking.",
    longDescription: "Yogami brings holistic wellness to user screens with clean motion animations, curated pose posture guides, customizable daily routines, and audio-guided breathing exercises crafted with modern responsive layout techniques.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Wellness"],
    liveUrl: "#",
    githubUrl: "https://github.com/bhavyawebdev/yogami-wellness",
    featured: true,
    imagePlaceholderGradient: "from-teal-600 to-emerald-800",
    highlights: [
      "Interactive yoga pose dictionary with animated demonstrations",
      "Personalized daily wellness streak counter and session log",
      "Mobile-optimized fluid touch controls and dark mode theme"
    ]
  },
  {
    id: "bella-vista",
    title: "Bella Vista",
    category: "Full Stack",
    description: "An elegant restaurant and hospitality web application featuring online table reservations, interactive culinary menus, and customer feedback management.",
    longDescription: "Bella Vista delivers a sophisticated dining experience web platform featuring dynamic menu categories, real-time table availability checking, reservation confirmation mailers, and customer review portals.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/bhavyawebdev/bella-vista-restaurant",
    featured: true,
    imagePlaceholderGradient: "from-amber-600 to-stone-800",
    highlights: [
      "Streamlined table booking system with instant reservation status",
      "Interactive filterable menu by dietary preference and course",
      "High-contrast editorial typography and responsive gallery"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "crontosys-1",
    company: "Crontosys Technolabs",
    role: "Graphics Designer Intern",
    period: "May 31, 2024 – June 17, 2024",
    location: "Bhavnagar, Gujarat, India",
    description: [
      "Completed a 15-day intensive internship as a Graphics Designer, demonstrating exceptional skills in graphic design, creativity, and a dedication to learning.",
      "Designed marketing materials, created digital content, and collaborated with the team on a variety of creative projects.",
      "Applied theoretical knowledge from the Diploma in IT Engineering course to real-world applications, significantly enhancing practical understanding of graphic design."
    ],
    skillsUsed: ["Graphic Design", "Marketing Materials", "Digital Content", "Creative Collaboration", "Adobe Tools"],
    certificateUrl: "/certificate-crontosys.jpeg",
    certificateTitle: "Certificate of Internship Completion - Crontosys Technolabs",
    issuedDate: "Issued: 17th June 2024"
  },
  {
    id: "ithub-1",
    company: "IT Hub Software Solutions",
    role: "Front-End Developer Intern",
    period: "June 2, 2025 – June 16, 2025",
    location: "Bhavnagar, Gujarat, India",
    description: [
      "Completed a front-end development internship under the guidance of Mr. Piyush Danani, gaining hands-on industry exposure.",
      "Actively involved in training and primarily worked with HTML, CSS, JavaScript, and Bootstrap to build responsive interfaces.",
      "Recognized by mentors as diligent, hardworking, and inquisitive throughout the duration of the program."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive UI"],
    certificateUrl: "/certificate-ithub-frontend.jpeg",
    certificateTitle: "Certificate of Internship - IT Hub Software Solutions (Front-End Developer)",
    issuedDate: "Issued: 16/06/2025"
  },
  {
    id: "ithub-2",
    company: "IT Hub Software Solutions",
    role: "Web Developer Intern",
    period: "January 15, 2026 – April 15, 2026",
    location: "Bhavnagar, Gujarat, India",
    description: [
      "Successfully completed a Web Developer internship under the guidance of Mr. Piyush Danani, advancing full front-end proficiency.",
      "Actively involved in training and primarily worked with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL across live projects.",
      "Demonstrated strong diligence, hard work, and curiosity throughout the program while building production-style web modules."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    certificateUrl: "/certificate-ithub-webdev.jpeg",
    certificateTitle: "Certificate of Internship - IT Hub Software Solutions (Web Developer)",
    issuedDate: "Issued: 15/04/2026"
  }
];
