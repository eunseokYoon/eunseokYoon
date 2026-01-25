import React from 'react';

/**
 * Projects Section - Editorial Magazine Style
 *
 * Design Philosophy:
 * - List-based layout, not cards
 * - Each project as a featured article
 * - Emphasis on typography and hierarchy
 * - Generous spacing and asymmetry
 */
const Projects = () => {
  const projects = [
    {
      id: 1,
      year: "2024",
      title: "약속 조율 및 정산 시스템",
      description: "중간 지점 추천 및 AI 기반 장소 추천을 제공하는 웹 애플리케이션. 카카오 OAuth 로그인, 실시간 위치 추적, AI 장소 추천 시스템을 구현했습니다.",
      tags: ["React", "Spring Boot", "PostgreSQL", "AI", "Kakao OAuth"],
      github: "https://github.com",
      demo: "#",
      index: "01"
    },
    {
      id: 2,
      year: "2024",
      title: "포트폴리오 웹사이트",
      description: "타이포그래피 중심의 에디토리얼 디자인을 적용한 반응형 개인 포트폴리오. Fraunces와 Manrope 폰트를 사용하여 독창적인 디자인을 구현했습니다.",
      tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com",
      demo: "#",
      index: "02"
    },
    {
      id: 3,
      year: "2023",
      title: "프로젝트 3",
      description: "프로젝트 설명을 여기에 작성하세요. 주요 기능과 사용한 기술 스택, 그리고 프로젝트를 통해 배운 점 등을 상세히 기록합니다.",
      tags: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "#",
      index: "03"
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 animate-slide-up">
          <span className="text-sm font-mono tracking-[0.3em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mb-8 block">
            02 — Selected Works
          </span>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Projects
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
            제가 진행한 주요 프로젝트들을 소개합니다
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={`group animate-slide-up stagger-${idx + 1}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column - Index & Year */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    <div className="heading-display text-6xl md:text-7xl text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                      {project.index}
                    </div>
                    <div className="text-sm font-mono tracking-wider text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-10 space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold group-hover:text-[var(--color-terracotta)] dark:group-hover:text-[var(--color-warm-orange)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] max-w-3xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-[var(--color-mid-brown)] dark:border-[var(--color-soft-white)] border-opacity-30 dark:border-opacity-30 rounded-sm text-sm font-mono text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:border-[var(--color-terracotta)] dark:hover:border-[var(--color-warm-orange)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200"
                    >
                      <span className="font-medium">View on GitHub</span>
                      <svg
                        className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200"
                    >
                      <span className="font-medium">Live Demo</span>
                      <svg
                        className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {idx < projects.length - 1 && (
                <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20 mt-24" />
              )}
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-24 text-center animate-slide-up stagger-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-lg md:text-xl font-medium text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] hover:gap-5 transition-all duration-300"
          >
            <span>View All Projects on GitHub</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
