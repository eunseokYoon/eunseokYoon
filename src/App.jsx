import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

/**
 * Main App Component - Editorial Portfolio
 *
 * Structure:
 * - Typography-first design
 * - Dark mode support
 * - Smooth scrolling navigation
 * - Fraunces + Manrope fonts
 * - Terracotta accent colors
 */
function App() {
  return (
    <div className="App min-h-screen transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Main Content */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
