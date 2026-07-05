/**
 * Portfolio Interactive Script
 * Handles animations, interactions, and dynamic behavior
 */

(function() {
    'use strict';

    // ================================================
    // CONFIGURATION
    // ================================================
    const CONFIG = {
        particles: {
            count: window.innerWidth < 768 ? 25 : 50,
            colors: ['#ff7b00', '#ff0055', '#8b5cf6'],
            minSize: 0.5,
            maxSize: 2,
            minSpeed: 0.3,
            maxSpeed: 0.8,
            connectionDistance: 120,
            connectionOpacity: 0.15
        },
        scroll: {
            threshold: 50,
            backToTopThreshold: 500,
            smoothOffset: -80
        },
        animation: {
            typingSpeed: 100,
            counterDuration: 2000,
            smoothDuration: 800
        }
    };

    // ================================================
    // UTILITY FUNCTIONS
    // ================================================
    const $ = selector => document.querySelector(selector);
    const $$ = selector => document.querySelectorAll(selector);
    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    };

    // ================================================
    // LUCIDE ICONS INITIALIZATION
    // ================================================
    function initLucideIcons() {
        const attemptCreateIcons = () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
                return true;
            }
            return false;
        };

        if (!attemptCreateIcons()) {
            // Retry with exponential backoff
            let attempts = 0;
            const maxAttempts = 5;
            const retry = () => {
                attempts++;
                if (!attemptCreateIcons() && attempts < maxAttempts) {
                    setTimeout(retry, 500 * attempts);
                }
            };
            setTimeout(retry, 500);
        }
    }

    // ================================================
    // PARTICLE BACKGROUND SYSTEM
    // ================================================
    class ParticleSystem {
        constructor(canvasId) {
            this.canvas = $(canvasId);
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.animationId = null;
            this.isActive = true;
            this.mousePos = { x: null, y: null };

            this.init();
        }

        init() {
            this.resizeCanvas();
            this.createParticles();
            this.animate();

            window.addEventListener('resize', debounce(() => this.resizeCanvas(), 250));
            window.addEventListener('mousemove', (e) => {
                this.mousePos.x = e.clientX;
                this.mousePos.y = e.clientY;
            });
            document.addEventListener('visibilitychange', () => {
                this.isActive = !document.hidden;
                if (this.isActive && !this.animationId) this.animate();
            });
        }

        resizeCanvas() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.createParticles();
        }

        createParticles() {
            this.particles = [];
            const count = window.innerWidth < 768 ? 25 : 50;
            for (let i = 0; i < count; i++) {
                this.particles.push(new Particle(this.canvas));
            }
        }

        animate() {
            if (!this.isActive) { this.animationId = null; return; }

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Update and draw particles
            this.particles.forEach(particle => {
                particle.update();
                particle.draw(this.ctx);
 powerfully            });

            // Draw connections between nearby particles
            this.drawConnections();

            // Draw mouse connections
            if (this.mousePos.x !== null) {
                this.drawMouseConnections();
            }

            this.animationId = requestAnimationFrame(() => this.animate());
        }

        drawConnections() {
            const { connectionDistance, connectionOpacity } = CONFIG.particles;

            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * connectionOpacity;
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(255, 123, 0, ${opacity})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.stroke();
                    }
                }
            }
        }

        drawMouseConnections() {
            const mouseDistance = 150;

            this.particles.forEach(particle => {
                const dx = particle.x - this.mousePos.x;
                const dy = particle.y - this.mousePos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const opacity = (1 - distance / mouseDistance) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 123, 0, ${opacity})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
                    this.ctx.stroke();
                }
            });
        }
    }

    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.reset();
        }

        reset() {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.size = Math.random() * (CONFIG.particles.maxSize - CONFIG.particles.minSize) + CONFIG.particles.minSize;
            this.speedX = (Math.random() - 0.5) * CONFIG.particles.maxSpeed;
            this.speedY = (Math.random() - 0.5) * CONFIG.particles.maxSpeed;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = CONFIG.particles.colors[Math.floor(Math.random() * CONFIG.particles.colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > this.canvas.width) this.x = 0;
            if (this.x < 0) this.x = this.canvas.width;
            if (this.y > this.canvas.height) this.y = 0;
            if (this.y < 0) this.y = this.canvas.height;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    // ================================================
    // NAVIGATION & SCROLL BEHAVIOR
    // ================================================
    class NavigationController {
        constructor() {
            this.navbar = $('#navbar');
            this.backToTop = $('#backToTop');
            this.hamburger = $('#hamburger');
            this.navMenu = $('#navMenu');

            this.init();
        }

        init() {
            // Scroll effects
            window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));

            // Back to top
            if (this.backToTop) {
                this.backToTop.addEventListener('click', () => this.scrollToTop());
            }

            // Mobile menu toggle
            if (this.hamburger) {
                this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
            }

            // Close mobile menu on link click
            $$('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });

            // Smooth scroll for anchor links
            $$('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleSmoothScroll(e));
            });
        }

        handleScroll() {
            const scrollY = window.scrollY;

            // Navbar background
            if (scrollY > CONFIG.scroll.threshold) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }

            // Back to top visibility
            if (scrollY > CONFIG.scroll.backToTopThreshold) {
                this.backToTop?.classList.add('visible');
            } else {
                this.backToTop?.classList.remove('visible');
            }
        }

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (this.backToTop) {
                this.backToTop.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.backToTop.style.transform = '';
                }, 200);
            }
        }

        toggleMobileMenu() {
            this.hamburger?.classList.toggle('active');
            this.navMenu?.classList.toggle('active');
            document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
        }

        closeMobileMenu() {
            this.hamburger?.classList.remove('active');
            this.navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }

        handleSmoothScroll(e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = $(targetId);
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset + CONFIG.scroll.smoothOffset;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    }

    // ================================================
    // ANIMATED NUMBER COUNTERS
    // ================================================
    class CounterAnimation {
        constructor() {
            this.counters = $$('.stat-number');
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            this.counters.forEach(counter => observer.observe(counter));
        }

        animateCounter(counter) {
            const text = counter.textContent;
            const numericValue = parseInt(text);
            if (isNaN(numericValue)) return;

            const suffix = text.replace(/[0-9]/g, '');
            let current = 0;
            const duration = CONFIG.animation.counterDuration;
            const increment = numericValue / (duration / 16);
            const startTime = performance.now();

            const updateCounter = () => {
                const elapsed = performance.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

                current = Math.floor(numericValue * easeProgress);
                counter.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = numericValue + suffix;
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }

    // ================================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ================================================
    class ScrollAnimation {
        constructor() {
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all animated elements
            $$('.animate-on-scroll, .skill-category, .project-card, .stat-item, .fade-in-up').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // ================================================
    // CUSTOM CURSOR
    // ================================================
    class CustomCursor {
        constructor() {
            this.cursor = $('.custom-cursor');
            this.cursorDot = $('.custom-cursor-dot');

            if (!this.cursor || !this.cursorDot) {
                this.createCursorElements();
            }

            this.init();
        }

        createCursorElements() {
            this.cursor = document.createElement('div');
            this.cursor.className = 'custom-cursor';
            this.cursorDot = document.createElement('div');
            this.cursorDot.className = 'custom-cursor-dot';
            document.body.appendChild(this.cursor);
            document.body.appendChild(this.cursorDot);
        }

        init() {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            let dotX = 0, dotY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            const animate = () => {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                dotX += (mouseX - dotX) * 0.3;
                dotY += (mouseY - dotY) * 0.3;

                if (this.cursor) {
                    this.cursor.style.left = cursorX + 'px';
                    this.cursor.style.top = cursorY + 'px';
                }
                if (this.cursorDot) {
                    this.cursorDot.style.left = dotX + 'px';
                    this.cursorDot.style.top = dotY + 'px';
                }

                requestAnimationFrame(animate);
            };

            animate();

            // Hover effects
            $$('a, button, .project-card, .skill-category, input, textarea, .hamburger').forEach(el => {
                el.addEventListener('mouseenter', () => this.cursor?.classList.add('hover'));
                el.addEventListener('mouseleave', () => this.cursor?.classList.remove('hover'));
            });
        }
    }

    // ================================================
    // PARALLAX EFFECTS
    // ================================================
    class ParallaxEffects {
        constructor() {
            this.codeWindow = $('.code-window');
            this.heroSection = $('.hero');
            this.init();
        }

        init() {
            if (window.matchMedia('(pointer: coarse)').matches) return;

            document.addEventListener('mousemove', debounce((e) => this.handleMouseMove(e), 16));
        }

        handleMouseMove(e) {
            if (this.codeWindow) {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                this.codeWindow.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }
        }
    }

    // ================================================
    // HERO TYPING EFFECT
    // ================================================
    class TypingEffect {
        constructor() {
            this.heroTitle = $('.hero-title');
            this.init();
        }

        init() {
            if (!this.heroTitle) return;

            // Add a subtle typing effect to the first line
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateTitle();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(this.heroTitle);
        }

        animateTitle() {
            this.heroTitle.style.opacity = '1';
            this.heroTitle.classList.add('animate-in');
        }
    }

    // ================================================
    // PROJECT CARD HOVER EFFECTS
    // ================================================
    class ProjectCards {
        constructor() {
            this.cards = $$('.project-card');
            this.init();
        }

        init() {
            this.cards.forEach(card => {
                card.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
                card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
                card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, card));
            });
        }

        handleMouseEnter(e) {
            // Card hover effect already handled by CSS
        }

        handleMouseMove(e, card) {
            if (window.matchMedia('(pointer: coarse)').matches) return;

            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        }

        handleMouseLeave(e, card) {
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        }
    }

    // ================================================
    // NAVBAR ACTIVE LINK HIGHLIGHTING
    // ================================================
    class ActiveLinkHighlighter {
        constructor() {
            this.sections = $$('section[id]');
            this.navLinks = $$('.nav-link[href^="#"]');
            this.init();
        }

        init() {
            window.addEventListener('scroll', debounce(() => this.updateActiveLink(), 50));
        }

        updateActiveLink() {
            const scrollPosition = window.scrollY + 100;

            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
    }

    // ================================================
    // PRELOADER (Optional enhancement)
    // ================================================
    class Preloader {
        constructor() {
            this.init();
        }

        init() {
            // Simple preloader removal
            window.addEventListener('load', () => {
                document.body.classList.add('loaded');
            });
        }
    }

    // ================================================
    // SKILL BARS ANIMATION
    // ================================================
    class SkillBarsAnimation {
        constructor() {
            this.skillCategories = $$('.skill-category');
            this.init();
        }

        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            this.skillCategories.forEach(category => observer.observe(category));
        }
    }

    // ================================================
    // SCROLL REVEAL FOR SECTIONS
    // ================================================
    class ScrollReveal {
        constructor() {
            this.init();
        }

        init() {
            const revealElements = $$('.section-label, .section-title, .contact-text, .hero-subtitle');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => observer.observe(el));
        }
    }

    // ================================================
    // KEYBOARD ACCESSIBILITY
    // ================================================
    class KeyboardAccessibility {
        constructor() {
            this.init();
        }

        init() {
            document.addEventListener('keydown', (e) => {
                // ESC to close mobile menu
                if (e.key === 'Escape') {
                    const hamburger = $('#hamburger');
                    const navMenu = $('#navMenu');
                    hamburger?.classList.remove('active');
                    navMenu?.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // ================================================
    // REDUCED MOTION SUPPORT
    // ================================================
    class ReducedMotionSupport {
        constructor() {
            this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
            this.init();
        }

        init() {
            if (this.prefersReducedMotion.matches) {
                document.documentElement.classList.add('reduced-motion');
            }

            this.prefersReducedMotion.addEventListener('change', (e) => {
                if (e.matches) {
                    document.documentElement.classList.add('reduced-motion');
                } else {
                    document.documentElement.classList.remove('reduced-motion');
                }
            });
        }
    }

    // ================================================
    // PERFORMANCE MONITORING
    // ================================================
    class PerformanceMonitor {
        constructor() {
            this.init();
        }

        init() {
            // Log performance metrics in development
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        const perfData = performance.getEntriesByType('navigation')[0];
                        console.log('Page Load Time:', perfData.duration.toFixed(2) + 'ms');
                        console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd.toFixed(2) + 'ms');
                    }, 0);
                });
            }
        }
    }

    // ================================================
    // INITIALIZATION
    // ================================================
    function init() {
        // Initialize all modules
        initLucideIcons();

        const particleSystem = new ParticleSystem('#bgCanvas');
        const navigation = new NavigationController();
        const counters = new CounterAnimation();
        const scrollAnimation = new ScrollAnimation();
        const cursor = new CustomCursor();
        const parallax = new ParallaxEffects();
        const typingEffect = new TypingEffect();
        const projectCards = new ProjectCards();
        const activeLink = new ActiveLinkHighlighter();
        const preloader = new Preloader();
        const skillBars = new SkillBarsAnimation();
        const scrollReveal = new ScrollReveal();
        const keyboardAccess = new KeyboardAccessibility();
        const reducedMotion = new ReducedMotionSupport();
        const performanceMonitor = new PerformanceMonitor();

        console.log('Portfolio initialized successfully!');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();