function CartoonSkills() {
  try {
    const skills = [
      { emoji: '🎨', name: 'Creative Magic', description: 'Turning imagination into colorful reality!' },
      { emoji: '💕', name: 'Heart Connections', description: 'Building bridges between souls with kindness' },
      { emoji: '🌱', name: 'Growth Mindset', description: 'Always blooming into a better version of me!' },
      { emoji: '👂', name: 'Super Listening', description: 'Hearing not just words, but hearts and dreams' },
      { emoji: '✨', name: 'Joy Spreading', description: 'Making every moment a little more magical' },
      { emoji: '🦋', name: 'Change Champion', description: 'Helping beautiful transformations happen!' }
    ];

    return (
      <section id="skills" className="py-20 px-6 lg:px-8 relative" data-name="cartoon-skills" data-file="components/CartoonSkills.js">
        {/* Background floating elements */}
        <div className="absolute top-10 right-10 text-4xl floating-element opacity-60">🌟</div>
        <div className="absolute bottom-20 left-10 text-3xl bounce-element opacity-60">🎈</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">My Superpowers ⭐</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Here are the magical abilities that help me spread joy and create positive change in the world! 🌈
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="card-cartoon p-8 bg-white group hover:bg-gradient-to-br hover:from-white hover:to-[var(--secondary-color)]">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform bounce-element text-center">
                  {skill.emoji}
                </div>
                <h3 className="text-2xl font-black mb-4 text-[var(--text-primary)] text-center">{skill.name}</h3>
                <p className="text-[var(--text-secondary)] text-lg font-medium text-center">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="card-cartoon p-12 bg-gradient-to-r from-white to-[var(--cute-yellow)] border-8 border-[var(--primary-color)]">
              <h3 className="text-3xl font-black mb-6 text-[var(--text-primary)]">My Mission 🌟</h3>
              <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-medium">
                To paint the world with more colors, spread smiles like confetti, and help every person I meet discover their own special magic! Together, we can make this world a more beautiful, kind, and joyful place! 🌈💕
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <span className="text-2xl bounce-element">✨</span>
                <span className="text-2xl floating-element">🦋</span>
                <span className="text-2xl bounce-element">💫</span>
                <span className="text-2xl floating-element">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Cartoon Skills component error:', error);
    return null;
  }
}