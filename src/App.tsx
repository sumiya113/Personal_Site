import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white selection:bg-cyan-500/25 selection:text-cyan-300 font-sans antialiased scroll-smooth overflow-x-hidden">
        {/* Navigation Floating Header */}
        <Header />

        {/* Core Layout Tracks */}
        <main>
          {/* Section 0: Interactive Hero */}
          <Hero onContactClick={handleScrollToContact} />

          {/* Section 1: About Biography & Statistics Bento */}
          <About />

          {/* Section 2: Competency filter matrix */}
          <Skills />

          {/* Section 3: Professional Experience Timeline */}
          <Experience />

          {/* Section 4: Projects Lab Portfolios */}
          <Projects />

          {/* Section 5: Certificates credentials */}
          <Certifications />

          {/* Section 6: Testimonials endorsement carousel */}
          <Testimonials />

          {/* Section 7: Secure contact communications submission form */}
          <Contact />
        </main>

        {/* Section 8: Page Footer coordinates */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
