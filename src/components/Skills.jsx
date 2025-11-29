import React from 'react';

export default function Skills() {
  try {
    const tech_skills = [
      { icon: "🖥️", name: 'Frontend', description: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"], bgColor: 'var(--cute-pink)' },
      { icon: "🗄️", name: 'Backend', description: ["C#", "ASP.NET", "Next.js", "SQL", "PostgreSQL", "REST APIs"], bgColor: 'var(--secondary-color)' },
      { icon: "🔧", name: 'Tools & Others', description: ["GitHub", "Vercel", "Figma", "Agile Methodologies", "Unit Testing"], bgColor: 'var(--cute-yellow)' },
      ];

    const soft_skills = [
      { icon: '🗣️', name: 'Communication', description: 'Concise status updates and documentation.', bgColor: 'var(--cute-mint)' },
      { icon: '🤝', name: 'Collaboration', description: 'Pair programming, clear communication, shared wins', bgColor: 'var(--cute-pink)' },
      { icon: '🧠', name: 'Creative Problem Solving', description: 'Breaking complex problems into actionable tasks. Turning rough ideas into working features', bgColor: 'var(--cute-yellow)' }
    ];

    return (
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--section-skills)]" data-name="skills" data-file="components/Skills.jsx">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Skills & Strengths</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A blend of technical skills and personal strengths that drive my passion for creating meaningful and impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tech_skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg card-hover border-2 border-gray-100 relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-30" style={{ backgroundColor: skill.bgColor }} />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: skill.bgColor }} />
                <div className="cute-circle mb-4" style={{ backgroundColor: skill.bgColor }}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{skill.name}</h3>
                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">{skill.description.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 border border-[var(--border-color)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}</div>
              </div>
            ))}

            {soft_skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg card-hover border-2 border-gray-100 relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-30" style={{ backgroundColor: skill.bgColor }} />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: skill.bgColor }} />
                <div className="cute-circle mb-4" style={{ backgroundColor: skill.bgColor }}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{skill.name}</h3>
                <div className="flex flex-col gap-2 text-[var(--text-secondary)]">{skill.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[var(--secondary-color)] p-8 rounded-2xl border-2 border-[var(--primary-color)]/20">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Always Learning</h3>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-8 mx-auto">
                Technology moves fast—and I move with it. I continuously explore new tools, frameworks, and practices to stay ahead in web development and craft innovative, future-ready solutions. 
              </p>

              <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Learning: Python
              </span>
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Exploring: AI/ML
              </span>
              <span className="px-4 py-2 bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                Interested: Web3
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}