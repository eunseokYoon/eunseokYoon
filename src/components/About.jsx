import React from 'react';

/**
 * About Section Component
 * - Two-column layout (desktop), single column (mobile)
 * - Profile image on left, description on right
 * - Skills/tech stack badges
 */
const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Spring Boot', 'Java', 'Node.js', 'Python'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker', 'Git', 'GitHub Actions', 'Vercel'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                    윤은석
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                안녕하세요! 👋
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                저는 사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다.
                문제를 해결하고 효율적인 솔루션을 만드는 것을 좋아합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                새로운 기술을 배우는 것을 즐기며, 팀과 협업하여
                더 나은 결과를 만들어내는 것에 큰 가치를 두고 있습니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                현재는 React와 Spring Boot를 주로 사용하여
                웹 애플리케이션을 개발하고 있습니다.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Tech Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
