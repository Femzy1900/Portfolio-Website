// data.js
export const personalInfo = {
  name: "Femi Adedokun",
  initials: "FA",
  title: "Full Stack Developer",
  subtitle: "Automation Expert | Creative Problem Solver | Tech Enthusiast ",
  description:
    "As a Full Stack Developer and Automation Expert, I’m passionate about building smart, efficient, and visually engaging web applications. I thrive on solving complex problems creatively — turning ideas into seamless, user-focused digital experiences. With a deep enthusiasm for technology and innovation, I blend technical precision with creativity to craft solutions that make a real impact.",
  social: {
    github: "https://github.com/Femzy1900",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:adedokunfemi14@gmail.com",
  },
};

export const projects = [
  {
    id: "FerheilPraxis",
    title: "Ferheil Praxis Prescription App",
    description:
      "A comprehensive full-stack hospital management system developed for Fernheil Praxis doctors and patients. The application streamlines prescription creation, patient record management, and digital recipe handling, offering a secure and efficient workflow for healthcare providers.",
    shortDescription:
      "A secure full-stack system for managing patients, prescriptions, and digital recipes.",
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS", "JavaScript"],
    link: "https://rezept-datenbank-25a6b.web.app/login",
    github: "https://github.com/connectwithdevjerry/fernheilpraxis",
    featured: true,
    status: "Completed",
    duration: "1 month",
    category: "Web Application Development",
    images: [
      "/FerheilHomepage.png",
      "/Ferheilpraxis.png",
      "/FernheilPatient.png",
      "/FernheilRecipe.png",
      "/FerheilPrescription.png",
      "/FernRecipe.png",
    ],
    features: [
      "User authentication and role-based access control",
      "Patient profile and history management",
      "Dynamic prescription and recipe creation system",
      "PDF download and print functionality for prescriptions",
      "Real-time notifications and updates",
      "Search and filter capabilities for patients and prescriptions",
      "Order and activity tracking",
      "Multi-language support (German and English)",
    ],
    challenges: [
      "Implementing a reliable and secure PDF download and printing system for prescriptions.",
      "Automatically saving and syncing patient prescription history in real-time.",
      "Deploying a compliant and secure healthcare application while ensuring data protection.",
      "Implementing Multi-language support for a diverse user base.",
    ],
    solutions: [
      "Integrated a PDF generation library with custom formatting and secure download permissions for prescriptions.",
      "Implemented Firebase’s real-time database for autosaving and instant synchronization of patient records and prescription history.",
      "Applied JWT authentication and encrypted data storage to maintain security and ensure HIPAA-style compliance during deployment.",
    ],
    outcome:
      "Successfully launched and adopted by over 10 doctors, managing more than 100 patients and generating 200+ prescriptions within the first month of deployment.",
    teamSize: 2,
    role: "Full Stack Developer",
  },
  {
    id: "ai-task-manager",
    title: "MPP Academy Payment Auto Deduction Automation",
    description:
      "An automation system that seamlessly integrates payment gateways, form submissions, and email notifications to streamline the fee collection process. It automatically deducts payments, updates records, and notifies parents about transactions, due dates, and failed payment attempts.",
    shortDescription:
      "An automated payment system reducing manual workload and improving payment accuracy.",
    tech: ["Make.com", "Stripe", "Cognito Form", "Gmail", "Spreadsheets"],
    link: "#",
    github: "#",
    featured: true,
    status: "In Progress",
    duration: "2 months",
    category: "Automation",
    images: [
      "/Automation.png",
      "/Make5.png",
      "/Make.com2.png",
      "/MakeAuto.png",
    ],
    features: [
      "Automated payment deductions through Stripe",
      "Email notifications and reminders for upcoming payments",
      "Integration with Cognito Forms for student data submission",
      "Automated database synchronization",
      "Due date tracking and email alerts",
      "Handling failed payments and automatic retries",
      "Dynamic payment reporting dashboard",
      "Insufficient funds detection and alert system",
    ],
    challenges: [
      "Integrating multiple third-party platforms with distinct APIs",
      "Ensuring form data is accurately captured and auto-populated into payment workflows",
      "Managing complex scheduling conflicts for recurring payments",
      "Designing logic filters for different payment outcomes and exceptions",
      "Handling multi-scenario routing for edge cases like failed transactions or partial payments",
    ],
    solutions: [
      "Created robust automation workflows in Make.com connecting Stripe, Cognito, Gmail, and Google Sheets for seamless data flow",
      "Configured data mapping and validation steps to ensure accurate form-to-database synchronization",
      "Implemented dynamic scheduling within Make.com to manage recurring and delayed payments automatically",
      "Used conditional filters and routers to intelligently process different payment scenarios and exceptions",
      "Built multi-branch logic flows with error handling, retries, and fallback notifications to ensure system reliability",
    ],
    outcome:
      "Successfully automated payment deductions for over 200 students, reducing manual processing time by 80%, improving accuracy, and ensuring timely notifications for all transactions.",
    teamSize: 2,
    role: "Automation Developer",
  },
  {
    id: "Oblivax",
    title: "Oblivax — Zero-Identity Signing Protocol",
    description:
      "Oblivax is a zero-identity web3 signing platform that enables users to sign and notarize legally binding contracts without revealing their real identity. It uses zero-knowledge proofs (ZKPs), biometric entropy, and blockchain notarization to bridge law and cryptography in a secure, futuristic experience.",
    shortDescription:
      "Zero-identity web3 signing app for legal contracts and on-chain notarization.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Solana Web3.js",
      "Anchor",
      "IPFS",
      "Supabase",
    ],
    link: "https://oblivax.vercel.app/",
    github: "https://github.com/Femzy1900/oblivax",
    featured: true,
    status: "Completed",
    duration: "3 weeks",
    category: "Web3 / Blockchain",
    images: ["/Oblivax.png", "/Oblivax1.png", "/Oblivax3.png", "/Oblivax4.png"],
    features: [
      "Anonymous contract signing using zero-knowledge proofs",
      "Biometric entropy-based identity verification",
      "On-chain notarization with timestamp and proof hash",
      "Downloadable proof and IPFS document storage",
      "Wallet connection via Solana Wallet Adapter",
      "Interactive and animated signing flow with Framer Motion",
      "Legal documentation and audit visibility for compliance",
    ],
    challenges: [
      "Designing a legal signing flow that preserves user anonymity",
      "Generating and verifying ZK proofs entirely client-side",
      "Integrating blockchain notarization seamlessly with Solana smart contracts",
    ],
    solutions: [
      "Implemented browser-based zk-SNARK generation using Circom and SnarkJS",
      "Built Solana smart contract interactions with Anchor and Web3.js",
      "Deployed IPFS integration for document storage and on-chain verification",
    ],
    outcome:
      "Successfully launched as a decentralized signing platform, allowing users to sign and notarize over 50 contracts anonymously while maintaining legal integrity and privacy-first principles.",
    teamSize: 2,
    role: "Full Stack Developer & UI Architect",
  },

  {
    id: "yeshaya",
    title: "Yeshaya AI Call Assistants",
    description:
      "An AI-powered call automation platform integrated with GoHighLevel (GHL) that enables businesses to create, manage, and deploy intelligent voice assistants. Yeshaya automates client calls, schedules, and lead responses using OpenAI for natural speech and real-time data integration.",
    shortDescription:
      "AI-powered call automation system for businesses using GHL and OpenAI.",
    tech: [
      "React-Vite",
      "GHL API",
      "OpenAI",
      "Stripe",
      "Tailwind CSS",
      "MongoDB",
      "JavaScript",
    ],
    link: "https://yeshaya-ghl.vercel.app/",
    github: "https://github.com/connectwithdevjerry/yeshaya",
    featured: true,
    status: "Ongoing",
    duration: "1 month",
    category: "AI Automation / Web Application",
    images: [
      "/yeshayacall.png",
      "/yehsayaHelps.png",
      "/yeshayaChart.png",
      "/yeshayawallet.png",
      "/yeshayaAssistants.png",
    ],
    features: [
      "AI-powered voice call automation with OpenAI integration",
      "Smart lead management through GoHighLevel API",
      "Real-time analytics and call performance tracking",
      "Automated billing and subscription system via Stripe",
      "Multi-assistant management dashboard",
      "Conversation history and sentiment visualization",
    ],
    challenges: [
      "Integrating multiple APIs including OpenAI, Stripe, and GHL seamlessly",
      "Maintaining low latency for real-time call interactions",
      "Handling dynamic data synchronization across multiple accounts",
    ],
    solutions: [
      "Developed a modular API layer for efficient communication between services",
      "Implemented asynchronous processing to ensure real-time response speed",
      "Built a centralized dashboard with live data updates using MongoDB and WebSockets",
    ],
    outcome:
      "Currently in beta testing with multiple agencies using the system for automated client communication, reducing manual call workload by over 70%.",
    teamSize: 3,
    role: "Frontend Developer",
  },

  {
    id: "CDSS",
    title: "Healthcare Clinical Decision Support System",
    description:
      "Mobile-first fitness tracking application with workout plans and progress visualization.",
    shortDescription: "Comprehensive fitness and workout tracking app",
    tech: ["React Native", "Redux", "Firebase", "D3.js"],
    link: "https://cdss-livid.vercel.app/",
    github: "#",
    featured: true,
    status: "Completed",
    duration: "3 months",
    category: "Web App",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    features: [
      "Custom workout plans",
      "Progress tracking and visualization",
      "Nutrition logging",
      "Exercise library with videos",
      "Goal setting and achievements",
      "Social features for motivation",
    ],
    challenges: [
      "Optimizing performance on low-end devices",
      "Creating engaging data visualizations",
      "Implementing offline functionality",
    ],
    solutions: [
      "Used React Native performance optimization techniques",
      "Implemented custom D3.js charts with minimal re-renders",
      "Added local storage with sync when online",
    ],
    outcome:
      "Published on App Store and Play Store with 1000+ downloads and 4.5-star rating",
    teamSize: 5,
    role: "Frontend Developer",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "HTML",
      "CSS",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      ,
      "MongoDB",
      "RESTful APIs",
      "GraphQL",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    category: "CMS Builders and Tools",
    items: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Figma",
      "Jest",
      "Make.com",
      "Postman",
      "Firebase",
      "Wordpress",
      "N8N",
    ],
  },
];

export const experience = [
  {
    role: " Frontend Developer",
    company: "Swizft Flow",
    period: "2024 - Present",
    description:
      "Frontend Developing working with a team of developers to build Full Stack Applications.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Built scalable web applications using MERN stack, optimized performance, and collaborated with cross-functional teams.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description:
      "Developed responsive web interfaces, implemented RESTful APIs, and participated in agile development processes.",
  },
];

export const testimonials = [
  {
    name: "Aaron Smith",
    role: "Co-founder at MPP Academy",
    text: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    avatar: "AS",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartUp Inc.",
    text: "Working with them was a pleasure. They brought innovative solutions to complex problems and always met deadlines.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead at Creative Agency",
    text: "Their ability to transform designs into pixel-perfect, performant applications is remarkable. A true professional.",
    avatar: "ER",
  },
];

export const about = {
  stats: [
    { value: "29+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "4+", label: "Years Experience" },
    { value: "12+", label: "Tech Stacks" },
  ],
  paragraphs: [
    "I'm a passionate full-stack developer with over five years of hands-on experience designing and building modern web applications. My journey in technology began with simple curiosity — wanting to understand how things work — and has grown into a career driven by creativity, problem-solving, and continuous learning.",

    "I specialize in developing scalable, high-performance applications using technologies like React, Next.js, and Node.js. I’m dedicated to writing clean, efficient, and maintainable code, with a strong focus on delivering seamless user experiences and reliable solutions.",

    "Outside of coding, I enjoy contributing to open-source projects, writing about technology, and exploring new trends in the ever-evolving world of web development. I’m always looking for opportunities to grow, collaborate, and create meaningful digital experiences.",
  ],
};
