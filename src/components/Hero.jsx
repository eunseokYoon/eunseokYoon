import React from 'react';
import GenerativeBackground from './GenerativeBackground';

/**
 * Hero Section Component
 * - Full-screen landing section with introduction
 * - Responsive design with interactive generative art background
 * - Digital Fluidity algorithmic aesthetic
 * - CTA buttons for Resume and Contact
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Generative Art Background - Digital Fluidity */}
      <GenerativeBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-xl md:text-2xl mb-4 font-light text-gray-800">
            안녕하세요 👋
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            윤은석
          </h1>

          {/* Title/Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold text-gray-900">
            Full Stack Developer
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed text-gray-700">
            사용자 경험을 최우선으로 생각하며,<br className="hidden sm:block" />
            끊임없이 배우고 성장하는 개발자입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-600 opacity-75"
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
