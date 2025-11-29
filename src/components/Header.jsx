import React from 'react';

export default function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100" data-name="header" data-file="components/Header.jsx">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              Nifemi
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</a>
              <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</a>
              <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Skills</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Connect</a>
            </nav>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="icon-menu text-xl text-[var(--text-secondary)]" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</a>
                <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</a>
                <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Skills</a>
                <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Connect</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}