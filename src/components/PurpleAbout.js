function PurpleAbout() {
  try {
    return (
      <section id="about" className="py-20 px-6 lg:px-8 bg-white" data-name="purple-about" data-file="components/PurpleAbout.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Discover the story behind my passion for creating positive change and meaningful connections
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/676ee7d0-8c52-4fdc-86f7-80bd7f59f7c3.png"
                  alt="Fiona About"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl card-hover transform -rotate-3"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center shadow-xl">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                    alt="Fiona Cartoon"
                    className="w-20 h-20 rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-8 rounded-2xl border-l-4 border-[var(--primary-color)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-xl flex items-center justify-center">
                    <div className="icon-users text-xl text-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold">ENFJ Personality</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg">
                  As an ENFJ, I'm naturally drawn to helping others grow and reach their potential. I thrive on meaningful connections and collaborative environments.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-8 rounded-2xl border-l-4 border-[var(--accent-color)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--accent-color)] rounded-xl flex items-center justify-center">
                    <div className="icon-lightbulb text-xl text-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold">Lifelong Learner</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg">
                  I believe that learning never stops. Whether it's new technologies, creative skills, or understanding different perspectives, I'm always curious to grow.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-8 rounded-2xl border-l-4 border-[var(--primary-color)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-xl flex items-center justify-center">
                    <div className="icon-heart text-xl text-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold">Animal Lover</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg">
                  Proud cat & dog lover who believes that pets teach us unconditional love, patience, and the joy of simple moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Purple About component error:', error);
    return null;
  }
}
