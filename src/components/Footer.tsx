import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Heart,
  Sparkles,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

/* ──────────────────────────────────────────
   Custom SVG icons
────────────────────────────────────────── */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

/* ──────────────────────────────────────────
   Data
────────────────────────────────────────── */
const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Connect',    href: '#connect' },
];

const techStack = ['React', 'TypeScript', 'Node.js', 'Express', 'SQL', 'NoSQL', 'Tailwind CSS', 'Git'];

const socialLinks = [
  {
    label: 'GitHub',
    href: personalData.github,
    icon: Github,
    hoverBg: '#24292E',
    hoverShadow: 'rgba(36,41,46,0.55)',
    hoverIcon: '#ffffff',
  },
  {
    label: 'LinkedIn',
    href: personalData.linkedin,
    icon: Linkedin,
    hoverBg: '#0A66C2',
    hoverShadow: 'rgba(10,102,194,0.55)',
    hoverIcon: '#ffffff',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/91${personalData.whatsapp}`,
    icon: WhatsAppIcon,
    hoverBg: '#25D366',
    hoverShadow: 'rgba(37,211,102,0.50)',
    hoverIcon: '#ffffff',
  },
  {
    label: 'Email',
    href: `mailto:${personalData.email}`,
    icon: Mail,
    hoverBg: '#EA4335',
    hoverShadow: 'rgba(234,67,53,0.50)',
    hoverIcon: '#ffffff',
  },
];

/* ──────────────────────────────────────────
   Footer Component
────────────────────────────────────────── */
export const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  /* Show scroll-to-top button only after scrolling down */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{ position: 'relative', overflow: 'hidden', background: '#07070A' }}
    >
      {/* ── Ambient glow blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '-100px',
          width: '350px',
          height: '250px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: '-80px',
          width: '300px',
          height: '220px',
          background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      {/* ── Top gradient border ── */}
      <div
        aria-hidden="true"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #2563EB 30%, #6366F1 60%, #10B981 100%)',
          opacity: 0.6,
        }}
      />

      {/* ════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(99,102,241,0.08) 50%, rgba(16,185,129,0.06) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            textAlign: 'center',
          }}
          className="footer-cta-inner"
        >
          {/* Availability badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.35)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#34D399',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10B981',
                display: 'inline-block',
                animation: 'footerPulse 2s ease-in-out infinite',
              }}
            />
            Available for Opportunities
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#F4F4F5',
              lineHeight: 1.2,
              fontFamily: 'var(--font-serif)',
              margin: 0,
            }}
          >
            Let's Build Something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB, #6366F1, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Remarkable
            </span>{' '}
            Together
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#A1A1AA',
              maxWidth: '520px',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Open to full-time roles, freelance projects, and exciting collaborations.
            If you have an opportunity that matches my skill set, I'd love to hear from you.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={`mailto:${personalData.email}`}
              id="footer-hire-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.625rem',
                background: 'linear-gradient(135deg, #2563EB, #6366F1)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(37,99,235,0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(37,99,235,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(37,99,235,0.35)';
              }}
            >
              <Sparkles style={{ width: '16px', height: '16px' }} />
              Hire Me
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.625rem',
                background: 'transparent',
                color: '#E4E4E7',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.6)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,99,235,0.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#E4E4E7';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              <ExternalLink style={{ width: '16px', height: '16px' }} />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MAIN FOOTER BODY
      ════════════════════════════════════════ */}
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '3rem 2rem 0' }}>

        {/* ── Row 1: Brand + Contact Info + Social ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #6366F1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.4)',
                  flexShrink: 0,
                }}
              >
                BM
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#F4F4F5',
                    lineHeight: 1.2,
                  }}
                >
                  {personalData.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6366F1', fontWeight: 500 }}>
                  Full Stack Developer
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#71717A', lineHeight: 1.7, margin: 0 }}>
              Building high-performance web apps with modern frontend architectures and robust backend systems.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.625rem', marginTop: '0.25rem' }}>
              {socialLinks.map(({ label, href, icon: Icon, hoverBg, hoverShadow, hoverIcon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A1A1AA',
                    textDecoration: 'none',
                    transition: 'background 0.25s ease, box-shadow 0.25s ease, color 0.25s ease, transform 0.2s ease, border-color 0.25s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = hoverBg;
                    el.style.boxShadow = `0 4px 18px ${hoverShadow}`;
                    el.style.color = hoverIcon;
                    el.style.borderColor = 'transparent';
                    el.style.transform = 'translateY(-3px) scale(1.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.boxShadow = 'none';
                    el.style.color = '#A1A1AA';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <Icon style={{ width: '16px', height: '16px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#52525B',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}
            >
              Contact
            </h3>
            <a
              href={`mailto:${personalData.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#A1A1AA',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#F4F4F5')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#A1A1AA')}
            >
              <Mail style={{ width: '14px', height: '14px', color: '#2563EB', flexShrink: 0 }} />
              {personalData.email}
            </a>
            <a
              href={`tel:+91${personalData.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#A1A1AA',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#F4F4F5')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#A1A1AA')}
            >
              <Phone style={{ width: '14px', height: '14px', color: '#10B981', flexShrink: 0 }} />
              +91 {personalData.phone}
            </a>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#A1A1AA',
                fontSize: '0.85rem',
              }}
            >
              <MapPin style={{ width: '14px', height: '14px', color: '#6366F1', flexShrink: 0 }} />
              {personalData.location}
            </div>
          </div>

          {/* Navigation column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <h3
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#52525B',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}
            >
              Navigate
            </h3>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#71717A',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  transition: 'color 0.2s ease, gap 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#F4F4F5';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#71717A';
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2563EB, #6366F1)',
                    flexShrink: 0,
                  }}
                />
                {link.name}
              </a>
            ))}
          </div>

          {/* Tech stack column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#52525B',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}
            >
              Tech Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {techStack.map(tech => (
                <span
                  key={tech}
                  style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '6px',
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    color: '#93C5FD',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1.25rem 0 1.5rem',
          }}
        >
          {/* Copyright */}
          <p
            style={{
              fontSize: '0.8rem',
              color: '#52525B',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              flexWrap: 'wrap',
            }}
          >
            © {currentYear} {personalData.name}. All rights reserved.
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#3F3F46' }}>
              · Built with
              <Code2 style={{ width: '13px', height: '13px', color: '#2563EB' }} />
              React & TypeScript
              <Heart style={{ width: '12px', height: '12px', color: '#F43F5E', fill: '#F43F5E' }} />
            </span>
          </p>

          {/* Nav group — right side */}
          <nav aria-label="Footer bottom navigation" style={{ display: 'flex', gap: '1.25rem' }}>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.78rem', color: '#52525B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#A1A1AA')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#52525B')}
            >
              GitHub
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.78rem', color: '#52525B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#A1A1AA')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#52525B')}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalData.email}`}
              style={{ fontSize: '0.78rem', color: '#52525B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#A1A1AA')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#52525B')}
            >
              Email
            </a>
          </nav>
        </div>
      </div>

      {/* ── Floating Scroll-to-Top button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        id="footer-scroll-top-btn"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #2563EB, #6366F1)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37,99,235,0.45)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: visible ? 'auto' : 'none',
          zIndex: 50,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(37,99,235,0.65)';
          (e.currentTarget as HTMLButtonElement).style.transform = visible ? 'translateY(-2px)' : 'translateY(12px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(37,99,235,0.45)';
          (e.currentTarget as HTMLButtonElement).style.transform = visible ? 'translateY(0)' : 'translateY(12px)';
        }}
      >
        <ArrowUp style={{ width: '18px', height: '18px' }} />
      </button>

      {/* ── Keyframe injection ── */}
      <style>{`
        @keyframes footerPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        .footer-social-icon:hover {
          color: #fff !important;
          border-color: transparent !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};