import React from 'react';

/**
 * About Section - Editorial Layout
 *
 * Design Philosophy:
 * - Typography-first approach
 * - Asymmetric grid layout
 * - Clean, spacious design
 * - Skills presented as elegant list, not cards
 */
const About = () => {
  const skills = [
    { category: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'REST API'] },
    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'Git', 'AWS'] },
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-16 animate-slide-up">
          <span className="text-sm font-mono tracking-[0.3em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
            About
          </span>
        </div>

        {/* Profile & Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-4 animate-slide-up stagger-1 flex items-center justify-center">
            <div className="relative">
              <img
                src="/myface.png"
                alt="윤은석 프로필 사진"
                className="max-h-[400px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="lg:col-span-8 space-y-8 animate-slide-up stagger-2">
            {/* Heading */}
            <div>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                안녕하세요,
                <br />
                <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                  윤은석
                </span>
                입니다.
              </h2>
              <p className="text-lg md:text-xl font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] opacity-75">
                Backend Developer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                저는 <strong className="font-semibold text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">안정적이고 확장 가능한 서버 시스템을 설계하는 백엔드 개발자</strong>입니다.
                <br className="hidden md:block" />
                효율적인 API 설계와 데이터베이스 최적화에 집중합니다.
              </p>
              <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                클린 코드와 설계 패턴을 중요시하며, 성능 최적화와 보안을 고려한
                <br className="hidden md:block" />
                백엔드 아키텍처를 구축하는 것에 큰 가치를 두고 있습니다.
              </p>
              <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                현재는 <span className="font-semibold text-[#6DB33F]">Spring Boot</span>와 <span className="font-semibold text-[#336791]">PostgreSQL</span>을 주로 사용하여 RESTful API를 개발하고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20 mb-24" />

        {/* Skills Section */}
        <div className="animate-slide-up stagger-3">
          <div className="mb-12">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] block mb-8">
              01 — Tech Stack
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Tech Stack
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                {/* Category Title */}
                <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mb-6">
                  {skillGroup.category}
                </h4>

                {/* Skills List */}
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base md:text-lg font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)] group"
                    >
                      <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        •
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
