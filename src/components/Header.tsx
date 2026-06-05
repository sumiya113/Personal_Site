import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { PERSONAL_INFO } from '../data';
import { IconRenderer } from './IconRenderer';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Intro', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Timeline', href: 'experience' },
    { label: 'Showcase', href: 'projects' },
    { label: 'Contact', href: 'contact' }
  ];

  // Monitor scroll height to trigger fine styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link tracker on scroll
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-zinc-950/75 dark:bg-black/80 border-b border-zinc-900/60 backdrop-blur-md shadow-lg shadow-zinc-950/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Brand Brandmark */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-2.5 text-white font-sans font-bold text-lg tracking-tight cursor-pointer"
          >
            <span className="w-2.5 h-2.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full animate-pulse" />
            <span>{PERSONAL_INFO.name}.</span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-900/40 border border-zinc-900/80 rounded-xl backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeHeaderTab"
                      className="absolute inset-0 bg-zinc-800 border border-zinc-700/50 rounded-lg shadow-inner z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Settings (Theme + Connect CTA) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Custom Theme Switcher */}
            <button
              onClick={toggleTheme}
              id="header-theme-toggle"
              className="p-2.5 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label={`Toggle to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <IconRenderer name="Sun" className="w-4 h-4 text-amber-400" />
              ) : (
                <IconRenderer name="Moon" className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Standard Contact CTA Action Trigger */}
            <button
              onClick={() => handleLinkClick('contact')}
              id="header-cta-btn"
              className="px-4 py-2 border border-cyan-500/50 hover:border-cyan-400 text-xs font-mono text-cyan-400 hover:text-white rounded-lg transition-all hover:bg-cyan-500/10 cursor-pointer"
            >
              Secure Connect
            </button>
          </div>

          {/* Mobile Right Controls (Theme + Hamburger) */}
          <div className="flex items-center gap-2.5 md:hidden">
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <IconRenderer name="Sun" className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <IconRenderer name="Moon" className="w-4.5 h-4.5 text-indigo-400" />
              )}
            </button>

            {/* Mobile menu hamburger toggle trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-zinc-900/50 text-zinc-450 hover:text-white rounded-lg border border-zinc-900 cursor-pointer"
              aria-label="Toggle Mobile Controls Toolbar"
            >
              {isMobileMenuOpen ? (
                <IconRenderer name="X" className="w-4.5 h-4.5" />
              ) : (
                <IconRenderer name="Menu" className="w-4.5 h-4.5" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Floating Animated Mobile Navigation Slider Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[73px] inset-x-0 z-40 bg-zinc-950 border-b border-zinc-900 p-6 shadow-2xl flex flex-col gap-4 md:hidden backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`w-full py-2.5 rounded-lg text-sm font-mono uppercase tracking-widest text-left px-4 ${
                  activeSection === item.href 
                    ? 'bg-zinc-900 text-cyan-400 border border-zinc-800' 
                    : 'text-zinc-400 hover:text-zinc-250'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-sans text-sm font-semibold flex items-center justify-center gap-2"
            >
              Secure Connect
              <IconRenderer name="ArrowRight" className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
