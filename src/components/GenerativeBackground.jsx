import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

/**
 * GenerativeBackground Component
 *
 * Digital Fluidity - Algorithmic generative art background
 * Implements flow field particle system with Perlin noise
 * Optimized for 60fps performance and responsive design
 *
 * Philosophy:
 * - Professional precision meets creative chaos
 * - Organic motion through computational systems
 * - Interactive and adaptive to user input
 */
const GenerativeBackground = () => {
  const canvasRef = useRef(null);
  const p5Instance = useRef(null);

  useEffect(() => {
    console.log('🎨 GenerativeBackground useEffect started');
    console.log('📦 p5 imported:', typeof p5);
    console.log('📍 canvasRef.current:', canvasRef.current);

    if (!canvasRef.current) {
      console.error('❌ Canvas container not found!');
      return;
    }

    // Initialize p5.js sketch
    const sketch = (p) => {
      console.log('🖼️ p5 sketch function called');
      let particles = [];
      let flowField = [];
      let cols, rows;
      let scl = 20; // Flow field resolution
      let zoff = 0; // Noise z-axis for animation

      // Parameters - tuned for professional aesthetic
      const params = {
        particleCount: window.innerWidth < 768 ? 800 : 1500, // Mobile optimization
        flowSpeed: 0.3,
        noiseScale: 0.004,
        noiseStrength: 0.5,
        particleSize: window.innerWidth < 768 ? 1.5 : 2,
        trailAlpha: 3, // Lower = longer trails
        colorShift: 200, // Hue range
        mouseInfluence: 150, // Radius of mouse interaction
      };

      // Particle class
      class Particle {
        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.maxSpeed = 2;
          this.prevPos = this.pos.copy();
          this.hue = 0;
          this.alpha = p.random(100, 255);
        }

        update() {
          // Update velocity and position
          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);

          // Calculate color based on velocity
          let speed = this.vel.mag();
          this.hue = p.map(speed, 0, this.maxSpeed, 200, 280) % 360; // Blue to purple range

          // Wrap around edges
          if (this.pos.x < 0) {
            this.pos.x = p.width;
            this.updatePrev();
          }
          if (this.pos.x > p.width) {
            this.pos.x = 0;
            this.updatePrev();
          }
          if (this.pos.y < 0) {
            this.pos.y = p.height;
            this.updatePrev();
          }
          if (this.pos.y > p.height) {
            this.pos.y = 0;
            this.updatePrev();
          }
        }

        updatePrev() {
          this.prevPos.x = this.pos.x;
          this.prevPos.y = this.pos.y;
        }

        follow(vectors) {
          let x = p.floor(this.pos.x / scl);
          let y = p.floor(this.pos.y / scl);
          let index = x + y * cols;

          if (index >= 0 && index < vectors.length) {
            let force = vectors[index];
            this.applyForce(force);
          }
        }

        applyForce(force) {
          this.acc.add(force);
        }

        show() {
          // Draw trail with velocity-based color
          p.stroke(this.hue, 70, 90, this.alpha);
          p.strokeWeight(params.particleSize);
          p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
          this.updatePrev();
        }
      }

      p.setup = () => {
        console.log('🚀 p5 setup() called');

        // Use actual window dimensions instead of p.windowWidth/Height
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log('📏 Window size:', width, 'x', height);

        let canvas = p.createCanvas(width, height);
        console.log('✅ Canvas created:', canvas);

        canvas.parent(canvasRef.current);
        console.log('✅ Canvas parented to:', canvasRef.current);

        p.colorMode(p.HSB, 360, 100, 100, 255);
        p.background(0, 0, 98); // Light background matching Tailwind
        console.log('✅ Background set');

        // Calculate flow field dimensions
        cols = p.floor(p.width / scl);
        rows = p.floor(p.height / scl);

        // Initialize particles
        for (let i = 0; i < params.particleCount; i++) {
          particles.push(new Particle());
        }
        console.log(`✅ ${params.particleCount} particles created`);

        // Generate initial flow field
        generateFlowField();
        console.log('✅ Flow field generated');
      };

      function generateFlowField() {
        flowField = [];
        let yoff = 0;

        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            // Multi-octave Perlin noise for organic flow
            let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;

            // Add second octave for complexity
            angle += p.noise(xoff * 2, yoff * 2, zoff * 0.5) * p.PI;

            let v = p.createVector(p.cos(angle), p.sin(angle));
            v.setMag(params.noiseStrength);

            flowField.push(v);
            xoff += params.noiseScale;
          }
          yoff += params.noiseScale;
        }

        zoff += 0.003; // Animate flow field over time
      }

      p.draw = () => {
        // Semi-transparent background for trail effect
        p.fill(0, 0, 98, params.trailAlpha);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        // Mouse interaction - perturb flow field
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          for (let particle of particles) {
            let d = p.dist(particle.pos.x, particle.pos.y, p.mouseX, p.mouseY);
            if (d < params.mouseInfluence) {
              let force = p.createVector(
                particle.pos.x - p.mouseX,
                particle.pos.y - p.mouseY
              );
              force.setMag(0.1);
              particle.applyForce(force);
            }
          }
        }

        // Update flow field periodically
        if (p.frameCount % 3 === 0) {
          generateFlowField();
        }

        // Update and draw particles
        for (let particle of particles) {
          particle.follow(flowField);
          particle.update();
          particle.show();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);

        // Recalculate flow field dimensions
        cols = p.floor(p.width / scl);
        rows = p.floor(p.height / scl);

        // Adjust particle count for mobile
        let targetCount = window.innerWidth < 768 ? 800 : 1500;

        if (particles.length !== targetCount) {
          particles = [];
          for (let i = 0; i < targetCount; i++) {
            particles.push(new Particle());
          }
        }

        generateFlowField();
        p.background(0, 0, 98);
      };
    };

    // Create p5 instance
    console.log('🎬 Creating p5 instance...');
    try {
      p5Instance.current = new p5(sketch);
      console.log('✅ p5 instance created successfully:', p5Instance.current);
    } catch (error) {
      console.error('❌ Error creating p5 instance:', error);
    }

    // Cleanup on unmount
    return () => {
      console.log('🧹 Cleaning up p5 instance');
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 0.7 }} // Subtle blend with content
    />
  );
};

export default GenerativeBackground;
