import React from 'react';
import { 
  Briefcase, FolderGit2, Cpu, Award, Code, Atom, Globe, Palette, Sparkles, 
  Server, Network, Database, Boxes, Layers, GitMerge, Scale, Hammer, 
  Cloud, CloudSnow, UploadCloud, Bot, Workflow, Search, Trophy, Mail, Phone, MapPin, 
  Github, Linkedin, X as Twitter, Download, ArrowRight, ChevronLeft, ChevronRight, Menu, X, ExternalLink, FileText, Check, AlertCircle, ArrowUp, Moon, Sun 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  FolderGit2,
  Cpu,
  Award,
  Code,
  Atom,
  Globe,
  Palette,
  Sparkles,
  Server,
  Network,
  Database,
  Boxes,
  Layers,
  GitMerge,
  Scale,
  Hammer,
  Cloud,
  CloudSnow,
  UploadCloud,
  Bot,
  Workflow,
  Search,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  FileText,
  Check,
  AlertCircle,
  ArrowUp,
  Moon,
  Sun
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Elegant fallback: Sparkles or Code
    return <Sparkles className={className} />;
  }
  return <IconComponent className={className} />;
};
