import React from 'react';
import image from '../assets/profile-picture.jpeg';

export default function Hero() {
  try {
    return (
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[var(--section-hero)]" data-name="hero" data-file="components/Hero.jsx">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi there! I'm{' '}
                <span className="gradient-text">Nifemi</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              I'm a <span className="font-semibold text-[var(--primary-color)]">Full-stack Web Developer</span> who loves turning ideas into functional, maintainable code. With strong problem-solving abilities, a creative mindset, and a passion for building from scratch, I care about delivering software that's both technically sound and genuinely useful.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Let's build something great together!
              </p>
              
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl card-hover">
                  <img 
                    src={image}
                    alt="Nifemi's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Background decorative circles */}
                <div className="floating-circle w-32 h-32 bg-[var(--primary-color)] -top-16 -left-16 -z-10" />
                <div className="floating-circle w-24 h-24 bg-[var(--accent-color)] -bottom-12 -right-12 -z-10" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}