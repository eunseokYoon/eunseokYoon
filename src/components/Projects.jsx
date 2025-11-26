import React from 'react';

/**
 * Projects Section Component
 * - Grid layout for project cards
 * - Each card includes: image, title, description, tags, links
 * - Responsive: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
 */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "약속 조율 및 정산 시스템",
      description: "중간 지점 추천 및 AI 기반 장소 추천을 제공하는 웹 애플리케이션",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Project+1",
      tags: ["React", "Spring Boot", "PostgreSQL", "AI"],
      github: "https://github.com",
      demo: "#",
      features: [
        "카카오 OAuth 로그인",
        "실시간 위치 추적",
        "AI 장소 추천 시스템"
      ]
    },
    {
      id: 2,
      title: "포트폴리오 웹사이트",
      description: "반응형 개인 포트폴리오 웹사이트",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Project+2",
      tags: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      demo: "#",
      features: [
        "반응형 디자인",
        "SEO 최적화",
        "Vercel 자동 배포"
      ]
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "프로젝트 설명을 여기에 작성하세요",
      image: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Project+3",
      tags: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "#",
      features: [
        "기능 1",
        "기능 2",
        "기능 3"
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            제가 진행한 주요 프로젝트들을 소개합니다
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mb-4 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
