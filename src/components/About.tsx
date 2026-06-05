import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, STATISTICS } from '../data';
import { IconRenderer } from './IconRenderer';

export const About: React.FC = () => {
  // Stagger entry configurations
  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const bentoCardVariants = {
    hidden: { y: 30, opacity: 0 },
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
      id="about" 
      className="relative py-24 px-4 md:px-8 bg-zinc-950 text-white overflow-hidden scroll-mt-12"
    >
      {/* Light highlights to frame the bento layout */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400">01 / OVERVIEW</span>
            <span className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Aesthetic Code. Resilient Architecture.
          </h2>
        </div>

        {/* Narrative and Mission Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Biography Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-sans font-medium text-zinc-100">
              Transforming complex engineering processes into effortless, delightful customer utilities.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Over the past eight years, I've had the privilege of architecting products for prominent tech leaders. I believe the boundary between engineering and design is artificial—true excellence happens when robust, type-safe API patterns are coupled with responsive transition animations.
            </p>
            
            {/* Fine styling separator line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-transparent my-8" />
            
            {/* Quick Core values tags list */}
            <div className="flex flex-wrap gap-2">
              {['Clean Architecture', 'Type Safety (TS)', 'SaaS Design Orchestration', 'AI Cloud Grounding', 'Zero Rest-Time Operations'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-900/60 border border-zinc-800 text-zinc-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mission Blockquote Panel */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 relative backdrop-blur-md shadow-2xl">
            {/* Floating decoration quotes */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-cyan-500/10 pointer-events-none select-none">“</span>
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">MISSION DEFINED</span>
              <p className="text-base md:text-lg font-sans text-zinc-200 italic leading-relaxed">
                "{PERSONAL_INFO.mission}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="text-xs font-mono text-zinc-400">{PERSONAL_INFO.name} // {PERSONAL_INFO.title}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bento Statistics Grid Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6 block">STATS IN SUMMARY //</span>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={bentoContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STATISTICS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={bentoCardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(57, 186, 238, 0.5)',
                boxShadow: '0 10px 40px -15px rgba(6, 182, 212, 0.15)'
              }}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card visual ambient background light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/5 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                {/* Dynamically Styled Icon Carrier */}
                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-cyan-400 shadow-md">
                  <IconRenderer name={stat.icon} className="w-5 h-5" />
                </div>
                
                {/* Top Corner futuristic tag */}
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">ACTIVE_ENG</span>
              </div>

              <div>
                {/* Visual statistics level */}
                <div className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white mb-2 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text">
                  {stat.value}
                </div>
                
                <h4 className="text-sm font-sans font-medium text-zinc-200 mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-xs font-sans text-zinc-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
