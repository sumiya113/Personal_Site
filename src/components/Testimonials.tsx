import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { IconRenderer } from './IconRenderer';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left slide, 1 for right slide
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel transition physics settings
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 25 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 25 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-4 md:px-8 bg-black text-white overflow-hidden scroll-mt-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Dynamic ambient bottom lighting */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">06 / VERIFIED REVIEWS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-4">
            Endorsements
          </h2>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed font-sans">
            Collaborative feedback and product leadership evaluations issued directly by modern high-growth tech executives.
          </p>
        </div>

        {/* Carousel Viewport Box */}
        <div className="relative min-h-[380px] sm:min-h-[320px] md:min-h-[280px] flex items-center justify-center">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 md:p-10 rounded-3xl bg-zinc-900/35 border border-zinc-900 glassmorphism relative"
            >
              {/* Giant quote layout placeholder */}
              <span className="absolute top-6 left-8 text-8xl font-serif text-indigo-500/10 pointer-events-none select-none">“</span>

              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Body paragraph text */}
                <p className="text-base sm:text-lg md:text-xl font-sans text-zinc-350 italic leading-relaxed mb-8">
                  "{TESTIMONIALS[activeIndex].feedback}"
                </p>

                {/* Profile row */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-zinc-900/60">
                  <div className="flex items-center gap-4">
                    <img 
                      src={TESTIMONIALS[activeIndex].avatar} 
                      alt={TESTIMONIALS[activeIndex].name}
                      className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm md:text-base font-sans font-semibold text-white">
                        {TESTIMONIALS[activeIndex].name}
                      </h4>
                      <p className="text-[11px] md:text-xs font-sans text-zinc-500">
                        {TESTIMONIALS[activeIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Company label tag */}
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-950 text-indigo-400 border border-zinc-900">
                    {TESTIMONIALS[activeIndex].company}
                  </span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Arrows & Bullet Indicators Grid */}
        <div className="flex items-center justify-between mt-10">
          
          {/* Bullet Index Markers */}
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className="p-1.5 rounded-full cursor-pointer"
                aria-label={`Jump to slide ${idx + 1}`}
              >
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-zinc-800'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all cursor-pointer text-zinc-400 hover:text-white"
              aria-label="Previous Endorsement"
            >
              <IconRenderer name="ChevronLeft" className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all cursor-pointer text-zinc-400 hover:text-white"
              aria-label="Next Endorsement"
            >
              <IconRenderer name="ChevronRight" className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
