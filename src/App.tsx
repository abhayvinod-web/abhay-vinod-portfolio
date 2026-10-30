import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicSection } from './components/AcademicSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrototypeModal } from './components/PrototypeModal';
import { ResumeModal } from './components/ResumeModal';
import { FixMyItchProject } from './types';

export default function App() {
  const [activePrototype, setActivePrototype] = useState<FixMyItchProject | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onExploreProjects={handleScrollToProjects}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenPrototype={(proj) => setActivePrototype(proj)} />
        <AcademicSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Prototype Fullscreen / Workbench Modal */}
      <PrototypeModal 
        project={activePrototype}
        onClose={() => setActivePrototype(null)}
      />

      {/* ATS-Friendly Print / View Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
