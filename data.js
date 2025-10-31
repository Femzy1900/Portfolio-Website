// data.js
export const personalInfo = {
  name: "Femi Adedokun",
  initials: "FA",
  title: "Full Stack Developer",
  subtitle: "Automation Expert | Creative Problem Solver | Tech Enthusiast ",
  description: "Full stack developer and automation expert focused on crafting powerful, user-centric web applications. With strong skills in React, Next.js, and backend integrations, I bridge creativity and functionality to deliver seamless digital products that solve real-world challenges.",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com"
  }
};

export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
    shortDescription: "A modern e-commerce platform with advanced features",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
    featured: true,
    status: "Completed",
    duration: "3 months",
    category: "Web Development",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    features: [
      "User authentication and authorization",
      "Real-time inventory management",
      "Stripe payment integration",
      "Admin dashboard for product management",
      "Order tracking system",
      "Responsive design for all devices"
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Securing payment transactions and user data",
      "Optimizing database queries for large product catalogs"
    ],
    solutions: [
      "Used WebSockets for real-time inventory synchronization",
      "Implemented JWT authentication and encryption for sensitive data",
      "Created efficient MongoDB indexes and implemented caching strategies"
    ],
    outcome: "Successfully launched with 500+ active users and processing 100+ daily transactions",
    teamSize: 3,
    role: "Full Stack Developer"
  },
  {
    id: "ai-task-manager",
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization and scheduling suggestions.",
    shortDescription: "AI-enhanced productivity tool for task management",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
    featured: true,
    status: "In Progress",
    duration: "4 months",
    category: "AI/ML",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    features: [
      "AI-powered task prioritization",
      "Smart scheduling suggestions",
      "Natural language task input",
      "Project categorization",
      "Deadline reminders",
      "Performance analytics"
    ],
    challenges: [
      "Integrating OpenAI API efficiently",
      "Creating accurate prioritization algorithms",
      "Handling complex scheduling conflicts"
    ],
    solutions: [
      "Implemented prompt engineering for better AI responses",
      "Developed custom ML model for priority scoring",
      "Created conflict resolution algorithm with user preferences"
    ],
    outcome: "Beta version with 200+ users providing positive feedback on AI suggestions",
    teamSize: 2,
    role: "Lead Developer"
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts with automated posting.",
    shortDescription: "Unified dashboard for social media management",
    tech: ["Vue.js", "Firebase", "Chart.js", "Express"],
    link: "#",
    github: "#",
    featured: true,
    status: "Completed",
    duration: "2 months",
    category: "Analytics",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    features: [
      "Multi-platform account management",
      "Automated post scheduling",
      "Real-time analytics and insights",
      "Engagement tracking",
      "Custom report generation",
      "Content calendar view"
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Handling rate limits and API quotas",
      "Creating unified analytics across platforms"
    ],
    solutions: [
      "Built abstraction layer for different API patterns",
      "Implemented queue system with retry logic",
      "Normalized data structure for cross-platform analytics"
    ],
    outcome: "Deployed for 5 clients managing 50+ social media accounts",
    teamSize: 4,
    role: "Frontend Lead"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking application with workout plans and progress visualization.",
    shortDescription: "Comprehensive fitness and workout tracking app",
    tech: ["React Native", "Redux", "Firebase", "D3.js"],
    link: "#",
    github: "#",
    featured: true,
    status: "Completed",
    duration: "5 months",
    category: "Mobile",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    features: [
      "Custom workout plans",
      "Progress tracking and visualization",
      "Nutrition logging",
      "Exercise library with videos",
      "Goal setting and achievements",
      "Social features for motivation"
    ],
    challenges: [
      "Optimizing performance on low-end devices",
      "Creating engaging data visualizations",
      "Implementing offline functionality"
    ],
    solutions: [
      "Used React Native performance optimization techniques",
      "Implemented custom D3.js charts with minimal re-renders",
      "Added local storage with sync when online"
    ],
    outcome: "Published on App Store and Play Store with 1000+ downloads and 4.5-star rating",
    teamSize: 5,
    role: "Mobile Developer"
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
  }
];

export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures."
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built scalable web applications using MERN stack, optimized performance, and collaborated with cross-functional teams."
  },
  {
    role: "Junior Developer",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description: "Developed responsive web interfaces, implemented RESTful APIs, and participated in agile development processes."
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at Tech Co.",
    text: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO at StartUp Inc.",
    text: "Working with them was a pleasure. They brought innovative solutions to complex problems and always met deadlines.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead at Creative Agency",
    text: "Their ability to transform designs into pixel-perfect, performant applications is remarkable. A true professional.",
    avatar: "ER"
  }
];

export const about = {
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Tech Stacks" }
  ],
  paragraphs: [
    "I'm a passionate full-stack developer with over 5 years of experience creating innovative web solutions. My journey in tech started with a curiosity about how things work, which evolved into a career I absolutely love.",
    "I specialize in building scalable, performant applications using modern technologies like React, Next.js, and Node.js. I believe in writing clean, maintainable code and creating user experiences that delight.",
    "When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest tech trends. I'm always eager to learn and take on new challenges."
  ]
};