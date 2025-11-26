import React from 'react';

/**
 * Hero Section Component
 * - Full-screen landing section with introduction
 * - Responsive design with gradient background
 * - CTA buttons for Resume and Contact
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white animate-fade-in">
          {/* Greeting */}
          <p className="text-xl md:text-2xl mb-4 font-light">
            안녕하세요 👋
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            윤은석
          </h1>

          {/* Title/Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">
            Full Stack Developer
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            사용자 경험을 최우선으로 생각하며,<br className="hidden sm:block" />
            끊임없이 배우고 성장하는 개발자입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white opacity-75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
