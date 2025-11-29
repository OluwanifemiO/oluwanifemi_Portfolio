function PurpleSkills() {
  try {
    const skills = [
      { icon: 'palette', name: 'Creative Design', description: 'Bringing ideas to life through visual storytelling' },
      { icon: 'users', name: 'People Skills', description: 'Building meaningful connections and understanding others' },
      { icon: 'book-open', name: 'Continuous Learning', description: 'Always exploring new knowledge and skills' },
      { icon: 'heart', name: 'Empathy', description: 'Understanding and caring for others\' perspectives' },
      { icon: 'lightbulb', name: 'Innovation', description: 'Finding creative solutions to make positive change' },
      { icon: 'message-circle', name: 'Active Listening', description: 'Truly hearing and understanding what others share' }
    ];

    return (
      <section id="skills" className="py-20 px-6 lg:px-8" data-name="purple-skills" data-file="components/PurpleSkills.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">Skills & Strengths</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              The qualities and abilities that drive me to create positive impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl card-hover border-2 border-[var(--primary-color)]/10 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className={`icon-${skill.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{skill.name}</h3>
                <p className="text-[var(--text-secondary)] text-lg">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-12 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-6">My Mission</h3>
              <p className="text-xl opacity-95 max-w-4xl mx-auto leading-relaxed">
                To contribute to positive change in the world by connecting with others, learning continuously, and using my creativity and empathy to make a meaningful difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Purple Skills component error:', error);
    return null;
  }
}