import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { IconRenderer } from './IconRenderer';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Dynamic Tilt Angles State Map
  const [tilt, setTilt] = useState<{ id: string; x: number; y: number }>({ id: '', x: 0, y: 0 });

  const categories = ['All', 'AI/ML', 'Frontend', 'Backend', 'DevOps'];

  // Handle fine mouse position layout checks for luxury 3D tilt style
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate progress from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Scale to rotate angles (max Rotate is 8 deg)
    const rotateX = -mouseY * 8;
    const rotateY = mouseX * 8;

    setTilt({ id, x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ id: '', x: 0, y: 0 });
    setHoveredCardId(null);
  };

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="relative py-24 px-4 md:px-8 bg-black text-white overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/5 via-transparent to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">04 / SHOWCASE</span>
              <span className="h-[1px] w-12 bg-zinc-800" />
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Featured Lab Outputs
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-900/30 border border-zinc-800/80 rounded-xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-all duration-300 relative cursor-pointer ${
                  activeCategory === cat ? 'text-white' : 'text-zinc-550 hover:text-zinc-350'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeProjCategory"
                    className="absolute inset-0 bg-neutral-800 border border-neutral-700/80 rounded-lg shadow-sm z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isTilted = tilt.id === project.id;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  key={project.id}
                  className="group relative rounded-3xl bg-zinc-900/15 border border-zinc-900 overflow-hidden backdrop-blur-md flex flex-col h-full"
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transform: isTilted 
                      ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.015)`
                      : 'rotateX(0deg) rotateY(0deg) scale(1)',
                    borderColor: hoveredCardId === project.id ? 'rgba(57, 186, 238, 0.4)' : 'rgba(24, 24, 27, 1)',
                    transition: isTilted ? 'none' : 'transform 0.5s ease-out, border-color 0.3s ease'
                  }}
                >
                  {/* Subtle decorative background light */}
                  <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-zinc-950/20 to-zinc-950 pointer-events-none z-0" />
                  
                  {/* Top image overlay */}
                  <div className="h-56 md:h-64 overflow-hidden relative border-b border-zinc-950">
                    {/* Visual filter overlay */}
                    <div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply group-hover:bg-zinc-950/10 transition-colors duration-500 z-10" />
                    
                    {/* Gradient bar lighting at the border */}
                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Tag label */}
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-zinc-950/85 border border-zinc-800 text-[9px] font-mono tracking-widest text-[#2fe0df] rounded-full backdrop-blur-md uppercase">
                      Core: {project.category}
                    </span>
                  </div>

                  {/* Body Content Details */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative z-10">
                    <div>
                      {/* Interactive Featured Star Banner */}
                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono text-amber-400 uppercase tracking-wider mb-4 font-bold">
                          <IconRenderer name="Trophy" className="w-3 h-3 text-amber-400" />
                          Featured Deployment
                        </span>
                      )}

                      <h3 className="text-xl md:text-2xl font-sans font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips List */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 rounded bg-zinc-950 text-zinc-400 border border-zinc-900 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Launch/GitHub Trigger Elements */}
                      <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                          <IconRenderer name="Github" className="w-4 h-4" />
                          View Source Code
                        </a>
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-all font-semibold"
                        >
                          <IconRenderer name="ExternalLink" className="w-4 h-4" />
                          Live Workbench
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
