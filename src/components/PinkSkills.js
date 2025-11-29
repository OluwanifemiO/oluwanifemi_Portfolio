function PinkSkills() {
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
      <section id="skills" className="py-16 px-6 lg:px-8" data-name="pink-skills" data-file="components/PinkSkills.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Strengths</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The qualities and abilities that drive me to create positive impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-xl card-hover border border-[var(--primary-color)]/20 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                  <div className={`icon-${skill.icon} text-xl text-white`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{skill.name}</h3>
                <p className="text-[var(--text-secondary)]">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">My Mission 💕</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                To contribute to positive change in the world by connecting with others, learning continuously, and using my creativity and empathy to make a meaningful difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pink Skills component error:', error);
    return null;
  }
}