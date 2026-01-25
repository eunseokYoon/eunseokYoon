import React, { useEffect } from 'react';

/**
 * Project Modal - Detail View
 *
 * Design Philosophy:
 * - Full-screen overlay with centered modal
 * - Elegant animations
 * - Scrollable content for long descriptions
 * - Editorial typography
 */
const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[var(--color-dark-brown)] dark:bg-[var(--color-navy-black)] bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative bg-[var(--color-cream)] dark:bg-[var(--color-navy-black)] border border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-20 dark:border-opacity-20 rounded-sm max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-slide-up shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] bg-opacity-10 dark:bg-opacity-10 border border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-20 dark:border-opacity-20 hover:border-opacity-40 dark:hover:border-opacity-40 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono tracking-wider text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                {project.year}
              </span>
              <div className="h-px flex-1 bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20" />
            </div>

            <h2 className="heading-display text-4xl md:text-5xl mb-6">
              {project.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.filter(tag => tag).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-30 dark:border-opacity-30 rounded-sm text-sm font-mono text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
              프로젝트 개요
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              {project.description}
            </p>
          </div>

          {/* Detailed Info */}
          {project.details && (
            <div className="space-y-8">
              {/* 주요 기능 */}
              {project.details.features && project.details.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                    주요 기능
                  </h3>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mt-1">•</span>
                        <span className="text-base text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 기술적 도전 */}
              {project.details.challenges && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                    기술적 도전 및 해결
                  </h3>
                  <p className="text-base leading-relaxed text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                    {project.details.challenges}
                  </p>
                </div>
              )}

              {/* 성과 */}
              {project.details.achievements && project.details.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                    주요 성과
                  </h3>
                  <ul className="space-y-2">
                    {project.details.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mt-1">✓</span>
                        <span className="text-base text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20 my-8" />

          {/* Footer - Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center rounded-sm flex-1"
            >
              View on GitHub
            </a>
            <button
              onClick={onClose}
              className="btn-outline inline-block text-center rounded-sm flex-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
