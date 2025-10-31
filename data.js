// data.js
export const personalInfo = {
  name: "Femi Adedokun",
  initials: "FA",
  title: "Full Stack Developer",
  subtitle: "Automation Expert | Creative Problem Solver | Tech Enthusiast ",
  description: "As a Full Stack Developer and Automation Expert, I’m passionate about building smart, efficient, and visually engaging web applications. I thrive on solving complex problems creatively — turning ideas into seamless, user-focused digital experiences. With a deep enthusiasm for technology and innovation, I blend technical precision with creativity to craft solutions that make a real impact.",
  social: {
    github: "https://github.com/Femzy1900",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:adedokunfemi14@gmail.com"
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
    items: ["React", "HTML", "CSS", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", , "MongoDB",  "RESTful APIs", "GraphQL", "JWT", "Nodemailer"]
  },
  {
    category: "CMS Builders and Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "Make.com", "Postman", "Firebase", "Wordpress", "N8N"]
  }
];

export const experience = [
  {
    role: " Frontend Developer",
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
    name: "Aaron Smith",
    role: "Co-founder at MPP Academy",
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
    { value: "29+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "4+", label: "Years Experience" },
    { value: "12+", label: "Tech Stacks" }
  ],
  paragraphs: [
    "I'm a passionate full-stack developer with over five years of hands-on experience designing and building modern web applications. My journey in technology began with simple curiosity — wanting to understand how things work — and has grown into a career driven by creativity, problem-solving, and continuous learning.",

    "I specialize in developing scalable, high-performance applications using technologies like React, Next.js, and Node.js. I’m dedicated to writing clean, efficient, and maintainable code, with a strong focus on delivering seamless user experiences and reliable solutions.",

    "Outside of coding, I enjoy contributing to open-source projects, writing about technology, and exploring new trends in the ever-evolving world of web development. I’m always looking for opportunities to grow, collaborate, and create meaningful digital experiences."
  ]
};