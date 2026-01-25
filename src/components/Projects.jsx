import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

/**
 * Projects Section - Editorial Magazine Style
 *
 * Design Philosophy:
 * - List-based layout, not cards
 * - Each project as a featured article
 * - Emphasis on typography and hierarchy
 * - Generous spacing and asymmetry
 * - Modal for detailed project information
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      year: "2025",
      title: "약속 관리 및 추천 플랫폼",
      description: "중간 지점 추천 및 AI 기반 장소 추천을 제공하는 앱. 전체적인 Backend 메인 서버와 Devops를 담당했습니다.",
      tags: ["Spring Boot", "PostgreSQL", "AI", "Kakao OAuth"],
      github: "https://github.com/2025-INU/Backend",
      index: "01",
      details: {
        features: [
          "카카오 OAuth 2.0 기반 소셜 로그인 구현",
          "사용자 위치 기반 중간 지점 계산 알고리즘",
          "AI 기반 장소 추천 시스템 연동",
          "실시간 약속 관리 및 알림 기능",
          "AWS EC2 및 RDS를 활용한 서버 인프라 구축"
        ],
        challenges: "대규모 사용자 요청 처리를 위한 데이터베이스 쿼리 최적화와 캐싱 전략을 구현했습니다. Redis를 활용한 세션 관리로 응답 속도를 40% 개선했습니다.",
        achievements: [
          "RESTful API 설계 및 구현 (20+ 엔드포인트)",
          "Docker를 활용한 CI/CD 파이프라인 구축",
          "PostgreSQL 인덱싱을 통한 쿼리 성능 50% 향상"
        ]
      }
    },
    {
      id: 2,
      year: "2025",
      title: "암표방지 티켓팅 앱 Backend",
      description: "얼굴 등록 및 인증을 통해 암표 방지 티켓팅 시스템. JWT를 이용한 로그인 구현과 Devops를 담당했습니다.",
      tags: ["Django", "Python", "MySQL"],
      github: "https://github.com/2025-summerbootcamp-TeamG/Backend",
      index: "02",
      details: {
        features: [
          "JWT 기반 인증 및 권한 관리 시스템",
          "얼굴 인식 API 연동을 통한 사용자 인증",
          "티켓 예매 및 양도 방지 로직 구현",
          "실시간 예매 현황 모니터링",
          "AWS 배포 및 운영 환경 구축"
        ],
        challenges: "동시에 대량의 예매 요청이 발생하는 상황에서 데이터 정합성을 보장하기 위해 트랜잭션 처리와 락 메커니즘을 구현했습니다.",
        achievements: [
          "Django REST Framework를 활용한 API 서버 구축",
          "얼굴 인증을 통한 암표 거래 차단 시스템 구현",
          "Docker 컨테이너화 및 배포 자동화"
        ]
      }
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Animation delay
  };

  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-24">
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
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="group/link inline-flex items-center gap-2 text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200 font-medium"
                    >
                      <span>View Details</span>
                      <svg
                        className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] hover:text-[var(--color-terracotta)] dark:hover:text-[var(--color-warm-orange)] transition-colors duration-200"
                    >
                      <span className="font-medium">GitHub</span>
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
            href="https://github.com/eunseokYoon"
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
