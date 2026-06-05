import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data';
import { IconRenderer } from './IconRenderer';

export const Certifications: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
      id="certifications" 
      className="relative py-24 px-4 md:px-8 bg-zinc-950 text-white overflow-hidden scroll-mt-12"
    >
      {/* Visual background atmospheric glows */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">05 / INDEPENDENT CREDENTIALS</span>
            <span className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
            Certificates & Awards
          </h2>
          <p className="text-zinc-400 max-w-lg text-sm leading-relaxed font-sans">
            Specialized achievements and validation credentials issued by leading cloud platforms and technical academic frameworks.
          </p>
        </div>

        {/* Credentials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(99, 102, 241, 0.4)',
                boxShadow: '0 12px 30px -15px rgba(99, 102, 241, 0.15)'
              }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 flex flex-col justify-between h-[250px] relative transition-all duration-300 group overflow-hidden"
            >
              {/* Colored background graphic that glows on card hover */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${cert.badgeColor}`} />

              {/* Shifty reflection texture effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.015] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex justify-between items-start pt-2">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-cyan-400 group-hover:text-white group-hover:border-zinc-700 transition-all shadow-md">
                  <IconRenderer name="Award" className="w-5 h-5" />
                </div>
                
                {/* Date stamp tag */}
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  {cert.date}
                </span>
              </div>

              <div className="mt-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-sans font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-sans text-zinc-500 mt-1.5 block">
                    {cert.issuer}
                  </span>
                </div>

                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/80 hover:text-cyan-300 transition-colors pt-4 border-t border-zinc-900"
                >
                  <IconRenderer name="ExternalLink" className="w-3.5 h-3.5" />
                  VERIFY CREDENTIALS
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
