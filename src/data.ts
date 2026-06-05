import { Skill, StatCard, TimelineEvent, Project, Certification, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Sumiya Maya',
  title: 'Full-Stack Software Engineer',
  bio: 'A passionate full-stack software engineer with 2+ years of professional experience. Specializing in building responsive web interfaces, reliable backend APIs, and integrating AI-powered features. Focused on writing clean, maintainable, and type-safe code.',
  mission: 'My mission is to build clean, intuitive, and high-performance digital products that solve actual everyday needs, maintaining high frontend standards and robust backend communication.',
  avatar: 'https://images.pexels.com/photos/37974527/pexels-photo-37974527.png',
  location: 'San Francisco, CA',
  email: 'sumiya.maya@dev.io',
  phone: '+1 (555) 345-6789',
  resumeUrl: '#',
  github: 'https://github.com/sumiya113',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com'
};

export const STATISTICS: StatCard[] = [
  {
  label: 'Years of Experience',
  value: '2+',
  description: 'Years crafted building robust web applications.',
    icon: 'Briefcase'
  },
  {
    label: 'Projects Completed',
    value: '18+',
    description: 'Delivered across modern SaaS and consumer applications.',
    icon: 'FolderGit2'
  },
  {
    label: 'Technologies Familiar',
    value: '15+',
    description: 'Proficiency across full-stack web environments.',
    icon: 'Cpu'
  },
  {
    label: 'Certifications Active',
    value: '3',
    description: 'Recognized by AWS, Google, and DeepLearning.AI.',
    icon: 'Award'
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'TypeScript', level: 82, category: 'Frontend', icon: 'Code' },
  { name: 'React (v19/18)', level: 85, category: 'Frontend', icon: 'Atom' },
  { name: 'Next.js 15', level: 78, category: 'Frontend', icon: 'Globe' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend', icon: 'Palette' },
  { name: 'Framer Motion', level: 72, category: 'Frontend', icon: 'Sparkles' },

  // Backend
  { name: 'Node.js / Express', level: 80, category: 'Backend', icon: 'Server' },
  { name: 'GraphQL / Apollo', level: 70, category: 'Backend', icon: 'Network' },
  { name: 'FastAPI (Python)', level: 68, category: 'Backend', icon: 'Cpu' },
  { name: 'RESTful APIs', level: 84, category: 'Backend', icon: 'Zap' },

  // Database
  { name: 'PostgreSQL', level: 76, category: 'Database', icon: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database', icon: 'Boxes' },
  { name: 'Redis (Caching)', level: 65, category: 'Database', icon: 'Zap' },
  { name: 'Prisma / Drizzle', level: 78, category: 'Database', icon: 'Layers' },

  // DevOps & Cloud
  { name: 'Docker Containers', level: 72, category: 'DevOps', icon: 'Folder' },
  { name: 'CI/CD (GitHub Actions)', level: 75, category: 'DevOps', icon: 'GitMerge' },
  { name: 'AWS (S3, EC2, Lambda)', level: 70, category: 'Cloud', icon: 'Cloud' },
  { name: 'Vercel / Netlify', level: 88, category: 'Cloud', icon: 'UploadCloud' },

  // AI & ML
  { name: 'Gemini Technical SDK', level: 76, category: 'AI/ML', icon: 'Bot' },
  { name: 'LangChain Orchestration', level: 60, category: 'AI/ML', icon: 'Workflow' },
  { name: 'Vector Databases (Pinecone)', level: 62, category: 'AI/ML', icon: 'Search' },
  { name: 'OpenAI API integrations', level: 78, category: 'AI/ML', icon: 'Trophy' }
];

export const EXPERIENCE: TimelineEvent[] = [
  {
    id: 'exp1',
    company: 'Stripe',
    position: 'Full-Stack Software Engineer',
    duration: '2024 - Present',
    logoColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    achievements: [
      'Developed and optimized responsive checkout UI modules, improving purchase journey completion metrics.',
      'Contributed to real-time analytics dashboards that visualize localized payment options.',
      'Refined client performance and bundles, ensuring seamless hydration using React standard hooks.'
    ],
    skills: ['TypeScript', 'React', 'REST APIs', 'Node.js', 'Tailwind']
  },
  {
    id: 'exp2',
    company: 'Linear Corp',
    position: 'Frontend Engineer',
    duration: '2022 - 2024',
    logoColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50',
    achievements: [
      'Built reusable calendar widgets and customized navigation lists supporting fluid animations.',
      'Integrated IndexedDB client-cache solutions to maintain task states during low connectivity.',
      'Collaborated on strict implementation of styling rules, improving visual parity globally.'
    ],
    skills: ['React', 'Next.js', 'PostgreSQL', 'Dexie.js', 'Tailwind']
  },
  {
    id: 'exp3',
    company: 'Raycast',
    position: 'Full-Stack Developer',
    duration: '2021 - 2022',
    logoColor: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
    achievements: [
      'Assisted in implementing OAuth connector widgets and credential handshakes for extension plugins.',
      'Authored modular backend services and UI components to improve multi-list layouts.'
    ],
    skills: ['TypeScript', 'Node.js', 'SQLite', 'Tailwind']
  },
  {
    id: 'exp4',
    company: 'Vercel',
    position: 'Frontend Developer Intern',
    duration: '2020 - 2021',
    logoColor: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
    achievements: [
      'Maintained documentation websites and modular layout sections built using static site generators.',
      'Investigated staging build performance markers, resolving configuration errors across routes.'
    ],
    skills: ['Next.js', 'Webpack', 'CSS Modules', 'Node.js']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Cognitive Mind Map Engine',
    description: 'An interactive web application enabling concept generation, mapping, and automated layout generation using the Gemini API. Built with fluid canvas support and responsive touch navigation.',
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
    description: 'A responsive dashboard displaying currency shifts and transaction metrics. Integrates custom Recharts charts, robust state management, and an eye-safe dark theme.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'Tailwind CSS', 'Recharts', 'Zustand', 'REST API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: true,
    category: 'Frontend'
  },
  {
    id: 'proj3',
    title: 'Aero - Zero-Trust API Proxy',
    description: 'A lightweight Node.js API proxy gateway handling path authorization checks, API key rate-limiting, and micro-caching designed for steady local development runs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    techStack: ['Node.js', 'Redis', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: false,
    category: 'Backend'
  },
  {
    id: 'proj4',
    title: 'Pulse - Container Health Monitor',
    description: 'A React-based diagnostic terminal showcasing container metrics, basic logs, and cluster environment statuses using secure WebSockets.',
    image: 'https://images.unsplash.com/photo-1597839219216-a773cb2473e4?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Chart.js'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    featured: false,
    category: 'DevOps'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: 'Oct 2024',
    credentialUrl: 'https://aws.amazon.com',
    badgeColor: 'from-amber-600 to-yellow-400'
  },
  {
    id: 'cert2',
    title: 'Associate Cloud Engineer',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Feb 2025',
    credentialUrl: 'https://cloud.google.com',
    badgeColor: 'from-blue-600 to-indigo-400'
  },
  {
    id: 'cert3',
    title: 'Generative AI Foundations with LangChain',
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
    role: 'Product Engineering Lead',
    company: 'Stripe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'Sumiya brings a exceptional eye for elegant layouts and robust frontend features. Her work implementing modern payment modules has been highly structured and completely reliable.'
  },
  {
    id: 'test2',
    name: 'Marcus Chen',
    role: 'Frontend Architect',
    company: 'Linear Corp',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'A highly committed engineer who designs neat and clean UI codebases. Sumiya contributed great effort to our shortcuts system, styling interactions beautifully and writing well-structured React state logic.'
  },
  {
    id: 'test3',
    name: 'Elena Rostova',
    role: 'Co-Founder & CTO',
    company: 'Holo Systems',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=150&h=150&q=80',
    feedback: 'Sumiya worked closely with our core team to implement Gemini SDK integrations cleanly. She is extremely proactive, quick to adapt to new APIs, and writes very easy-to-read code.'
  }
];
