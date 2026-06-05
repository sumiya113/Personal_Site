import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { IconRenderer } from './IconRenderer';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      tempErrors.name = 'Please provide a valid name / sender moniker.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim() || !emailRegex.test(formValues.email)) {
      tempErrors.email = 'Please provide a structured email address (e.g. user@domain.com).';
      isValid = false;
    }

    if (!formValues.subject.trim()) {
      tempErrors.subject = 'Please supply a broad subject line.';
      isValid = false;
    }

    if (!formValues.message.trim() || formValues.message.length < 10) {
      tempErrors.message = 'Please input a complete inquiry (minimum 10 characters).';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when typing starts
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate high-end server transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset values
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 md:px-8 bg-zinc-950 text-white overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">07 / TRANSMISSION COORDS</span>
            <span className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Secure Communications
          </h2>
        </div>

        {/* Content layout double grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct coords and coordinates info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-zinc-105 mb-4">
                Let's explore high-impact platforms together.
              </h3>
              <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                Whether deploying responsive frontend structures, defining robust schema systems, or exploring Gemini AI model boundaries—reach out.
              </p>
            </div>

            {/* Direct Badges collection */}
            <div className="space-y-4">
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/35 border border-zinc-900 text-zinc-300">
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-cyan-400 shrink-0">
                  <IconRenderer name="Mail" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">EMAIL ADDRESS</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-sans font-medium text-zinc-200 hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/35 border border-zinc-900 text-zinc-300">
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-indigo-400 shrink-0">
                  <IconRenderer name="Phone" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">PHONE INQUIRIES</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-sans font-medium text-zinc-200 hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/35 border border-zinc-900 text-zinc-300">
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-purple-400 shrink-0">
                  <IconRenderer name="MapPin" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">TRANSITTING LOCATION</span>
                  <span className="text-sm font-sans font-medium text-zinc-250">
                    {PERSONAL_INFO.location}, USHQ
                  </span>
                </div>
              </div>

            </div>

            {/* Micro-Social Handles Grid */}
            <div className="pt-6 border-t border-zinc-900">
              <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-4">SOCIAL DIRECTIVES //</span>
              <div className="flex gap-4">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 rounded-xl text-zinc-400 hover:text-cyan-400 transition-all cursor-pointer"
                  aria-label="GitHub Social Handle"
                >
                  <IconRenderer name="Github" className="w-5 h-5" />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 rounded-xl text-zinc-400 hover:text-indigo-400 transition-all cursor-pointer"
                  aria-label="LinkedIn Social Handle"
                >
                  <IconRenderer name="Linkedin" className="w-5 h-5" />
                </a>
                <a 
                  href={PERSONAL_INFO.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 rounded-xl text-zinc-400 hover:text-purple-400 transition-all cursor-pointer"
                  aria-label="Twitter X Social Handle"
                >
                  <IconRenderer name="Twitter" className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Transmission Submission Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl bg-zinc-900/25 border border-zinc-900 glassmorphism space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Moniker Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-medium">
                        Your Alias / Moniker <span className="text-cyan-400">*</span>
                      </label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-sans text-sm focus:outline-none transition-all border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-cyan-400'
                        }`}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <div id="name-error" className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                          <IconRenderer name="AlertCircle" className="w-3.5 h-3.5 shrink-0" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-medium">
                        Direct Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-sans text-sm focus:outline-none transition-all border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-cyan-400'
                        }`}
                        placeholder="john@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <div id="email-error" className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                          <IconRenderer name="AlertCircle" className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-medium">
                      Core Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-sans text-sm focus:outline-none transition-all border ${
                        errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-cyan-400'
                      }`}
                      placeholder="Collaboration opportunity / Tech chat"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <div id="subject-error" className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                        <IconRenderer name="AlertCircle" className="w-3.5 h-3.5 shrink-0" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-medium">
                      Inquiry Narrative <span className="text-cyan-400">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      value={formValues.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-sans text-sm focus:outline-none transition-all resize-none border ${
                        errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-cyan-400'
                      }`}
                      placeholder={`Let me know how we can collaborate, ${PERSONAL_INFO.name}...`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <div id="message-error" className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                        <IconRenderer name="AlertCircle" className="w-3.5 h-3.5 shrink-0" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button Trigger */}
                  <button
                    type="submit"
                    id="submit-coords-btn"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-sm rounded-xl cursor-pointer shadow-lg shadow-indigo-950/40 relative overflow-hidden transition-all duration-300 disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting Packets...
                      </>
                    ) : (
                      <>
                        Launch Transmission Packet
                        <IconRenderer name="ArrowRight" className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800 glassmorphism text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="p-4 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full animate-bounce">
                    <IconRenderer name="Check" className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-sans font-bold text-white">
                      Transmission Packet Delivered
                    </h3>
                    <p className="text-sm font-sans text-zinc-400 max-w-sm leading-relaxed mx-auto">
                      Your packets have successfully transited security protocols. {PERSONAL_INFO.name} will initiate standard client contacts shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900/60 transition-colors text-xs font-mono text-zinc-300 cursor-pointer"
                  >
                    Initiate Secondary Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
