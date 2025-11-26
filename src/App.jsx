import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * - Single Page Application structure
 * - Combines all sections
 * - Smooth scrolling navigation
 */
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
