import React from 'react';

/**
 * Footer - Minimal Editorial Style
 *
 * Design Philosophy:
 * - Clean and understated
 * - Typography-focused
 * - Elegant navigation links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/eunseokYoon' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/eunseok-yoon' },
    { name: 'Email', href: 'mailto:your.email@example.com' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-20 dark:border-opacity-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Branding */}
          <div>
            <h3 className="heading-display text-3xl mb-4">윤은석</h3>
            <p className="text-sm font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              Backend Developer
              <br />
              Based in Seoul, Korea
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="text-base hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] opacity-75">
            © {currentYear} 윤은석. All rights reserved.
          </p>

          {/* Credits */}
          <p className="text-sm font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] opacity-75">
            Designed & built with{' '}
            <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">♥</span>
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200"
          >
            <span>Back to Top</span>
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
