import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="relative py-24 px-4 md:px-8 bg-zinc-950 text-white overflow-hidden scroll-mt-12"
    >
      {/* Decorative background grid line highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,#18181b_5%)] bg-[size:100%_4rem] pointer-events-none opacity-40" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">03 / TRACK RECORD</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
            Professional Timeline
          </h2>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed font-sans">
            A chronological sequence of software engineering excellence, platform scaling achievements, and design-to-spec delivery.
          </p>
        </div>

        {/* Timelines Outer Container */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0" />
          
          {/* Progress node that animates using viewport scroll triggers */}
          <motion.div 
            className="absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10"
            style={{ scaleY: 1 }}
            viewport={{ once: false }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {/* Event cards list */}
          <div className="space-y-16 relative z-10">
            {EXPERIENCE.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={event.id}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Outer Timeline Bullet Connector Node */}
                  <div className="absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      whileInView={{ scale: [0.6, 1.1, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg group hover:border-cyan-400/80 transition-colors"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 group-hover:scale-125 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout mapping */}
                  <div className="hidden md:block w-1/2" />

                  {/* Actual Experience Card Item Panel */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.1 }}
                    className="w-full md:w-[46%] pl-14 md:pl-0"
                  >
                    <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 glassmorphism relative group hover:border-zinc-800 transition-all duration-300">
                      
                      {/* Floating ambient backlighting */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                      {/* Header details: Position, Company Badge */}
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                            {event.duration}
                          </span>
                          <h3 className="text-lg md:text-xl font-sans font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {event.position}
                          </h3>
                        </div>

                        {/* Company label display badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-mono border ${event.logoColor} font-medium`}>
                          {event.company}
                        </span>
                      </div>

                      {/* Achievements bullets section */}
                      <ul className="space-y-3.5 mb-8 text-zinc-400">
                        {event.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start text-xs leading-relaxed font-sans text-zinc-350">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>

                      {/* Skills badge ribbon links */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                        {event.skills.map((sk) => (
                          <span 
                            key={sk}
                            className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-900"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
