export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Cloud' | 'AI/ML';
  icon: string; // Lucide icon name
}

export interface StatCard {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  company: string;
  position: string;
  duration: string;
  logoColor: string; // hex or tailwind class
  achievements: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // CDN or local URL
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  category: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  feedback: string;
}
