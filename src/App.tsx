import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { ExperienceItem } from './types';
import { useTheme } from './hooks/useTheme';
import EntryAnimation from './components/entryanimation';

export default function App() {
  const { theme, resolvedTheme, cycleTheme } = useTheme();

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCertificate, setSelectedCertificate] = useState<ExperienceItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [introVisible, setIntroVisible] = useState(true);

  const introRef = useRef<HTMLDivElement>(null);

  // Dismiss intro after animation completes (draw ~1.6s + fill ~0.8s + stagger for 12 chars ~0.6s = ~3s total)
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = introRef.current;
      if (!el) { setIntroVisible(false); return; }
      gsap.to(el, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setIntroVisible(false),
      });
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  // ScrollSpy observer to highlight active navbar item
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'connect'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0B0B0D] text-[#09090B] dark:text-[#F4F4F5] font-sans antialiased selection:bg-[#2563EB] selection:text-white transition-colors duration-300">

      {/* ── Intro splash (shown on first load) ── */}
      {introVisible && (
        <div
          ref={introRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#07070A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(60px)',
            }}
          />

          {/* Stroke-draw name */}
          <div style={{ width: '100%', maxWidth: '780px', padding: '0 2rem' }}>
            <EntryAnimation
              text="Bhavya Mehta"
              strokeColor="#A78BFA"
              fillColor="#F8FAFC"
              strokeWidth={1.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.05}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={108}
              fontWeight={800}
              letterSpacing={-4}
            />
          </div>

          {/* Subtitle */}
          <p
            style={{
              color: '#71717A',
              fontSize: '0.95rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              opacity: 0,
              animation: 'introFadeUp 0.7s ease forwards',
              animationDelay: '2.6s',
            }}
          >
            Full Stack Developer · Portfolio
          </p>

          <style>{`
            @keyframes introFadeUp {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        theme={theme}
        resolvedTheme={resolvedTheme}
        cycleTheme={cycleTheme}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main id="main-content">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience onOpenCertificate={(exp) => setSelectedCertificate(exp)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Certificate Viewer Modal */}
      <CertificateModal
        experience={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
