import { Skill, StatCard, TimelineEvent, Project, Certification, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Sumiya Maya',
  title: 'Senior Full-Stack & AI Systems Architect',
  bio: 'A passionate system designer and full-stack software engineer with 8+ years of experience. Specializing in high-performance cloud architectures, reactive responsive user interfaces, and custom AI/ML model integrations. Driving engineering standard excellence with modern, type-safe clean code principles.',
  mission: 'My mission is to craft exceptionally elegant digital interfaces, resilient backend architectures, and intelligent cognitive interfaces that empower organizations and elevate the user-facing standards of the modern web.',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=400&h=400&q=80',
  location: 'San Francisco, CA',
  email: 'sumiya.maya@dev.io',
  phone: '+1 (555) 345-6789',
  resumeUrl: '#',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com'
};

export const STATISTICS: StatCard[] = [
  {
    label: 'Years of Experience',
    value: '8+',
    description: 'Years building web applications globally.',
    icon: 'Briefcase'
  },
  {
    label: 'Projects Completed',
    value: '42',
    description: 'Delivered in high-performance SaaS and enterprise markets.',
    icon: 'FolderGit2'
  },
  {
    label: 'Technologies Mastering',
    value: '25+',
    description: 'Expertise across full-stack & cloud platforms.',
    icon: 'Cpu'
  },
  {
    label: 'Certifications Active',
    value: '6',
    description: 'Acknowledged by AWS, Google, and Harvard.',
    icon: 'Award'
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'TypeScript', level: 95, category: 'Frontend', icon: 'Code' },
  { name: 'React (v19/18)', level: 98, category: 'Frontend', icon: 'Atom' },
  { name: 'Next.js 15', level: 94, category: 'Frontend', icon: 'Globe' },
  { name: 'Tailwind CSS', level: 96, category: 'Frontend', icon: 'Palette' },
  { name: 'Framer Motion', level: 90, category: 'Frontend', icon: 'Sparkles' },

  // Backend
  { name: 'Node.js / Express', level: 92, category: 'Backend', icon: 'Server' },
  { name: 'GraphQL / Apollo', level: 88, category: 'Backend', icon: 'Network' },
  { name: 'FastAPI (Python)', level: 85, category: 'Backend', icon: 'Cpu' },
  { name: 'gRPC APIs', level: 80, category: 'Backend', icon: 'Zap' },

  // Database
  { name: 'PostgreSQL', level: 90, category: 'Database', icon: 'Database' },
  { name: 'MongoDB', level: 85, category: 'Database', icon: 'Boxes' },
  { name: 'Redis (Caching)', level: 88, category: 'Database', icon: 'Zap' },
  { name: 'Prisma / Drizzle', level: 92, category: 'Database', icon: 'Layers' },

  // DevOps
  { name: 'Docker Containers', level: 88, category: 'DevOps', icon: 'Folder' },
  { name: 'CI/CD Pipelines (GitHub)', level: 90, category: 'DevOps', icon: 'GitMerge' },
  { name: 'Kubernetes', level: 75, category: 'DevOps', icon: 'Scale' },
  { name: 'Terraform (IaC)', level: 80, category: 'DevOps', icon: 'Hammer' },

  // Cloud
  { name: 'AWS (S3, EC2, Lambda)', level: 90, category: 'Cloud', icon: 'Cloud' },
  { name: 'Google Cloud (GCP)', level: 85, category: 'Cloud', icon: 'CloudSnow' },
  { name: 'Vercel / Netlify', level: 95, category: 'Cloud', icon: 'UploadCloud' },

  // AI & ML
  { name: 'Gemini Technical SDK', level: 92, category: 'AI/ML', icon: 'Bot' },
  { name: 'LangChain Orchestration', level: 85, category: 'AI/ML', icon: 'Workflow' },
  { name: 'Vector Databases (Pinecone)', level: 88, category: 'AI/ML', icon: 'Search' },
  { name: 'OpenAI API integrations', level: 93, category: 'AI/ML', icon: 'Trophy' }
];

export const EXPERIENCE: TimelineEvent[] = [
  {
    id: 'exp1',
    company: 'Stripe',
    position: 'Lead Full-Stack Architect',
    duration: '2023 - Present',
    logoColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    achievements: [
      'Engineered core checkout UI modules increasing transaction conversion rates by 4.2% globally.',
      'Designed and piloted real-time financial telemetry dashboard serving 250k request concurrency.',
      'Led transition to React 18 Suspense with Server-driven UI patterns, lowering initial bundle sizes.'
    ],
    skills: ['TypeScript', 'React', 'GraphQL', 'AWS Lambdas', 'Node.js']
  },
  {
    id: 'exp2',
    company: 'Linear Corp',
    position: 'Senior Software Engineer',
    duration: '2021 - 2023',
    logoColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50',
    achievements: [
      'Built reactive custom keyboard shortcut workflow engines and fluid Canvas visualization grids.',
      'Optimized client-side cache layers with Dexie.js offline persistence, speeding interactive sorting by 300ms.',
      'Standardized visual token systems using Tailwind CSS, dramatically streamlining layout delivery.'
    ],
    skills: ['React', 'Next.js', 'PostgreSQL', 'WebSockets', 'Tailwind']
  },
  {
    id: 'exp3',
    company: 'Raycast',
    position: 'Fullstack Product Developer',
    duration: '2019 - 2021',
    logoColor: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
    achievements: [
      'Pioneered premium developer expansion dashboards and OAuth secure plugin credential handlers.',
      'Authored reusable high-performance custom hooks yielding 15% improvement in multi-list scrolling frames.'
    ],
    skills: ['TypeScript', 'Node.js', 'SQLite', 'Tailwind', 'Docker']
  },
  {
    id: 'exp4',
    company: 'Vercel',
    position: 'Software Engineer (Dev Tools)',
    duration: '2018 - 2019',
    logoColor: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
    achievements: [
      'Contributed directly to modular routing components in Next.js build-time transpilation steps.',
      'Optimized core serverless deployment lifecycle times from 44s down to 28s on standard environments.'
    ],
    skills: ['Next.js', 'Webpack', 'Rust basics', 'Node.js']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Cognitive Mind Map Engine',
    description: 'An AI-powered mind-mapping suite that generates, expands, and auto-clusters concepts dynamically using Gemini SDK. Experience real-time multi-branch scaling and canvas layout optimization.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'Gemini SDK', 'Framer Motion', 'Tailwind'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: true,
    category: 'AI/ML'
  },
  {
    id: 'proj2',
    title: 'Nova SaaS FinTech Terminal',
    description: 'A fully styled Real-time currency and investment analytics workspace. Integrates rich reactive layouts, customizable desktop widgets, keyboard-driven controls, and dark-glow design patterns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'Tailwind CSS', 'Recharts', 'ZustandState', 'WebSockets'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: true,
    category: 'Frontend'
  },
  {
    id: 'proj3',
    title: 'Aero - Zero-Trust API Proxy',
    description: 'High-performance API proxy gateway deploying authorization checks, rate-limiting, and deep token caching. Designed for massive transaction resilience.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    techStack: ['Node.js', 'Redis Cache', 'Docker', 'PostgreSQL', 'gRPC'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: false,
    category: 'Backend'
  },
  {
    id: 'proj4',
    title: 'Pulse - Automated DevOps Engine',
    description: 'Centralized diagnostic terminal mapping container health states, cluster workloads, and automated deployment alerts with immediate retrofits.',
    image: 'https://images.unsplash.com/photo-1597839219216-a773cb2473e4?auto=format&fit=crop&w=800&q=80',
    techStack: ['React/Vite', 'Docker Node', 'Kubernetes', 'S3 Storage'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: false,
    category: 'DevOps'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: 'Oct 2024',
    credentialUrl: 'https://aws.amazon.com',
    badgeColor: 'from-amber-600 to-yellow-400'
  },
  {
    id: 'cert2',
    title: 'Professional Cloud DevOps Architect',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Feb 2025',
    credentialUrl: 'https://cloud.google.com',
    badgeColor: 'from-blue-600 to-indigo-400'
  },
  {
    id: 'cert3',
    title: 'Adhering Enterprise Security Engineering',
    issuer: 'Harvard Professional Dev',
    date: 'Dec 2023',
    credentialUrl: 'https://harvard.edu',
    badgeColor: 'from-red-600 to-rose-400'
  },
  {
    id: 'cert4',
    title: 'Generative AI Engineering & LangChain Mastery',
    issuer: 'DeepLearning.AI',
    date: 'Jun 2025',
    credentialUrl: 'https://deeplearning.ai',
    badgeColor: 'from-violet-600 to-purple-400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Sarah Jenkins',
    role: 'VP of Product Engineering',
    company: 'Stripe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'Sumiya combines a world-class eye for design with rock-solid server discipline. The reactive interfaces engineered for our high-concurrency billing streams reduced code load latency while driving positive conversion indexes.'
  },
  {
    id: 'test2',
    name: 'Marcus Chen',
    role: 'Director of Platforms',
    company: 'Linear Corp',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'An exceptional developer who advocates clean architecture with surgical precision. Sumiya led our keyboard shortcut transition and local cache migrations, drastically delivering on-screen transitions like zero-friction physics.'
  },
  {
    id: 'test3',
    name: 'Elena Rostova',
    role: 'Co-Founder & CTO',
    company: 'Holo Systems',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'Sumiya was critical in establishing our smart prompt execution layer. Working directly with the Gemini API wrappers, Sumiya delivered a cognitive mapping canvas that continues to serve as our central competitive differentiator.'
  }
];
