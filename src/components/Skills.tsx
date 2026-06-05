import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { IconRenderer } from './IconRenderer';

type Category = 'All' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Cloud' | 'AI/ML';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'AI/ML'];

  // Filter skills list based on user context choice
  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="relative py-24 px-4 md:px-8 bg-black text-white overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold font-bold">02 / COMPETENCIES</span>
              <span className="h-[1px] w-12 bg-zinc-800" />
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              High-Perf Skill Stack
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-sans">
            Interactive breakdown of software languages, modern cloud architecture frameworks, and cognitive AI services engineered.
          </p>
        </div>

        {/* Category Filters Selector */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-12 p-1.5 bg-zinc-900/30 border border-zinc-800/80 rounded-xl backdrop-blur-md max-w-max mx-auto lg:mx-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 relative cursor-pointer ${
                activeCategory === cat 
                  ? 'text-white font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeSkillCategory"
                  className="absolute inset-0 bg-neutral-850 border border-neutral-800 rounded-lg shadow-inner z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, type: 'spring', stiffness: 220, damping: 22 }}
                key={`${skill.category}-${skill.name}`}
                whileHover={{ 
                  y: -4,
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  boxShadow: '0 8px 30px -10px rgba(99, 102, 241, 0.2)'
                }}
                className="p-6 bg-zinc-900/25 border border-zinc-900 rounded-2xl flex flex-col justify-between h-[160px] relative transition-all duration-300 group backdrop-blur-md"
              >
                {/* Visual hover border feedback glow */}
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/50 group-hover:scale-150 transition-all duration-300 mr-4 mt-4" />

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:text-cyan-400 group-hover:border-zinc-700 transition-colors duration-300">
                    <IconRenderer name={skill.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-zinc-100 text-sm group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Meter progress visualization section */}
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-zinc-500 tracking-wider">SKILL LEVEL</span>
                    <span className="text-cyan-400 font-semibold group-hover:translate-x-[-2px] transition-transform">{skill.level}%</span>
                  </div>
                  
                  {/* Outer slider border */}
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden relative border border-zinc-900">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Grid footer summary tag */}
        <div className="text-center mt-12">
          <span className="text-[10px] font-mono tracking-widest text-zinc-650 uppercase">
            // INTERACTIVE COMPILATION // END OF COMPONENT
          </span>
        </div>

      </div>
    </section>
  );
};
