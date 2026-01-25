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
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Spring Boot', 'Java', 'Node.js', 'Python', 'REST API'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'AWS'] },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-16 animate-slide-up">
          <span className="text-sm font-mono tracking-[0.3em] uppercase text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
            01 — About
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left Column - Heading */}
          <div className="animate-slide-up stagger-1">
            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8">
              안녕하세요,
              <br />
              <span className="text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">
                윤은석
              </span>
              입니다.
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed animate-slide-up stagger-2">
            <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              저는 <strong className="font-semibold text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)]">사용자 경험을 최우선으로 생각하는 풀스택 개발자</strong>입니다.
              문제를 해결하고 효율적인 솔루션을 만드는 것을 좋아합니다.
            </p>
            <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              새로운 기술을 배우는 것을 즐기며, 팀과 협업하여 더 나은 결과를 만들어내는 것에 큰 가치를 두고 있습니다.
            </p>
            <p className="text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
              현재는 <code className="font-mono text-base px-2 py-1 bg-[var(--color-mid-brown)] bg-opacity-10 rounded">React</code>와{' '}
              <code className="font-mono text-base px-2 py-1 bg-[var(--color-mid-brown)] bg-opacity-10 rounded">Spring Boot</code>를 주로 사용하여
              웹 애플리케이션을 개발하고 있습니다.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-mid-brown)] dark:bg-[var(--color-soft-white)] opacity-20 mb-24" />

        {/* Skills Section */}
        <div className="animate-slide-up stagger-3">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Tech Stack
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
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

        {/* Optional: Stats or highlights */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up stagger-4">
          {[
            { number: '3+', label: '프로젝트 경험' },
            { number: '10+', label: '기술 스택' },
            { number: '100%', label: '열정' },
            { number: '∞', label: '배움의 자세' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="heading-display text-4xl md:text-5xl text-[var(--color-terracotta)] dark:text-[var(--color-warm-orange)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-light text-[var(--color-mid-brown)] dark:text-[var(--color-soft-white)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
