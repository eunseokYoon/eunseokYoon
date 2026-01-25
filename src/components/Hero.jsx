import React from 'react';

/**
 * Hero Section - Editorial Minimalism
 *
 * Design Philosophy:
 * - Typography as the hero element
 * - Bold, oversized display font (Fraunces)
 * - Asymmetric layout with generous whitespace
 * - Subtle animations on scroll/load
 * - Clean, sophisticated aesthetic
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Small intro label */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full border border-[var(--color-terracotta)] text-sm font-mono text-[var(--color-terracotta)] tracking-wide">
            PORTFOLIO 2026
          </span>
        </div>

        {/* Main heading - Reduced size */}
        <div className="mb-12">
          <h1 className="heading-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[0.95] mb-6 animate-slide-up stagger-1">
            윤은석
          </h1>

          <div className="flex flex-col gap-4 animate-slide-up stagger-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold tracking-tight text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              Backend Developer
            </h2>

            <p className="text-base md:text-lg lg:text-xl font-light max-w-2xl text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] opacity-80">
              안정적이고 확장 가능한 서버를 설계하며, 효율적인 백엔드 시스템을 구축합니다.
            </p>
          </div>
        </div>

        {/* CTA Buttons - Refined style */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-3">
          <a
            href="#about"
            className="btn-primary inline-block text-center rounded-sm"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="btn-outline inline-block text-center rounded-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 font-sans font-medium text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-all duration-300"
          >
            Get in Touch
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator - Minimal */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in stagger-4">
          <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
