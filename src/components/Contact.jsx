import React from 'react';

/**
 * Contact Section - Minimal Editorial Style
 *
 * Design Philosophy:
 * - Typography-first, no cards
 * - Clean list presentation
 * - Emphasis on accessibility and clarity
 */
const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      type: "email"
    },
    {
      label: "GitHub",
      value: "github.com/eunseokYoon",
      href: "https://github.com/eunseokYoon",
      type: "link"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/eunseok-yoon",
      href: "https://linkedin.com/in/eunseok-yoon",
      type: "link"
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-16 animate-slide-up">
          <span className="text-sm font-mono tracking-[0.3em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
            03 — Get In Touch
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Heading & Description */}
          <div className="animate-slide-up stagger-1">
            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8">
              Let's Work
              <br />
              <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                Together
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              프로젝트 협업이나 문의사항이 있으시면
              <br />
              언제든지 연락주세요!
            </p>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8 animate-slide-up stagger-2">
            {contactLinks.map((contact, index) => (
              <div key={index} className="group">
                <div className="flex flex-col gap-2">
                  {/* Label */}
                  <span className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                    {contact.label}
                  </span>

                  {/* Value as Link */}
                  <a
                    href={contact.href}
                    target={contact.type === 'link' ? '_blank' : undefined}
                    rel={contact.type === 'link' ? 'noopener noreferrer' : undefined}
                    className="text-2xl md:text-3xl font-display font-semibold hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-300 inline-flex items-center gap-3 group/link"
                  >
                    <span>{contact.value}</span>
                    <svg
                      className="w-6 h-6 opacity-0 group-hover/link:opacity-100 transform translate-x-0 group-hover/link:translate-x-1 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-10 mt-8" />
              </div>
            ))}

            {/* CTA */}
            <div className="pt-8">
              <a
                href="mailto:your.email@example.com"
                className="btn-primary inline-block text-center rounded-sm"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Location or Availability */}
        <div className="mt-24 pt-16 border-t border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-20 dark:border-opacity-20 animate-slide-up stagger-3">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] block mb-3">
                Location
              </span>
              <p className="text-lg font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                Seoul, South Korea
              </p>
            </div>
            <div>
              <span className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] block mb-3">
                Availability
              </span>
              <p className="text-lg font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                Open to opportunities
              </p>
            </div>
            <div>
              <span className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] block mb-3">
                Response Time
              </span>
              <p className="text-lg font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
