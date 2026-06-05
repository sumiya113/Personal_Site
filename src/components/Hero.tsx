import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { IconRenderer } from './IconRenderer';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Stagger wrapper transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-black text-white"
    >
      {/* Dynamic Backlight Ambient Glow (Linear/Stripe style) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-55 dark:opacity-40"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 70%)`
        }}
      />

      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Floating abstract decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content Panel */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center lg:justify-start mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-cyan-400 shadow-lg shadow-cyan-950/20 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Available for Elite Roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-[1.1]"
          >
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Professional Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-sans font-medium tracking-wide text-zinc-300 mb-6"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          {/* Short Introduction */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-sans text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* Call to Actions & Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <button
              onClick={onContactClick}
              id="hero-contact-btn"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-indigo-950/50 cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <IconRenderer name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              id="hero-resume-lnk"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-200 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
            >
              <IconRenderer name="FileText" className="w-4 h-4 text-cyan-400" />
              Curriculum Vitae
              <IconRenderer name="Download" className="w-4 h-4 text-zinc-500" />
            </a>
          </motion.div>

          {/* Quick Social Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-start items-center gap-6 text-zinc-500"
          >
            <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase">Connect //</span>
            
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              id="hero-soc-github"
              className="hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
              aria-label="GitHub Profile"
            >
              <IconRenderer name="Github" className="w-5 h-5" />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              id="hero-soc-linkedin"
              className="hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
              aria-label="LinkedIn Profile"
            >
              <IconRenderer name="Linkedin" className="w-5 h-5" />
            </a>
            <a 
              href={PERSONAL_INFO.twitter} 
              target="_blank" 
              rel="noreferrer"
              id="hero-soc-twitter"
              className="hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
              aria-label="Twitter X Profile"
            >
              <IconRenderer name="Twitter" className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Showcase Visual Frame */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: 'spring', damping: 20 }}
        >
          <div 
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer revolving cybernetic border layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-60 blur-md group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            
            {/* Fine border container */}
            <div className="absolute inset-0.5 rounded-[14px] bg-black overflow-hidden z-10 flex items-center justify-center">
              {/* Subtle inner ambient grid light overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none z-20" />
              
              {/* Main Portrait Artwork Image */}
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={`${PERSONAL_INFO.name} portrait`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 select-none grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />

              {/* Top and Bottom futuristic corner markings */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
                SYSTEM ARCH: ENG-01
              </div>
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase bg-zinc-950/80 px-2 py-1 rounded border border-zinc-800 backdrop-blur-md">
                {PERSONAL_INFO.location}
              </div>
            </div>

            {/* Glowing active corners widgets */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-indigo-500 z-20 pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-indigo-500 z-20 pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Decorative Slide-down Scroll Guide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">STILLNESS / SCROLL</span>
        <motion.div 
          className="w-1.5 h-6 rounded-full bg-zinc-800 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
