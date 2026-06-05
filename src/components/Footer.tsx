import React from 'react';
import { PERSONAL_INFO } from '../data';
import { IconRenderer } from './IconRenderer';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Introduction', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Core Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Showcase', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-900 py-16 px-4 md:px-8 text-zinc-500 overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-zinc-950/40 pointer-events-none" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-zinc-950/40 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        
        {/* Left segment brand details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-sans font-bold text-lg tracking-tight">
            <span className="w-2.5 h-2.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-pulse" />
            <span>{PERSONAL_INFO.name}.</span>
          </div>
          <p className="max-w-xs text-xs font-sans text-zinc-600 leading-relaxed">
            Premium custom software systems crafting, cloud architecture standard validation, and bespoke fullstack engineering.
          </p>
        </div>

        {/* Center segment quick navigation list */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-center">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-zinc-600 hover:text-cyan-400 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right segment Back to top trigger */}
        <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all hover:text-white cursor-pointer group flex items-center justify-center shadow-lg"
            aria-label="Scroll Back To Root Screen"
          >
            <IconRenderer name="ArrowUp" className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform text-cyan-400" />
          </button>
          
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-left md:text-right space-y-1">
            <div>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</div>
            <div>Built on top-tier engineering standards.</div>
          </div>
        </div>

      </div>
    </footer>
  );
};
