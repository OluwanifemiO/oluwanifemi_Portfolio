function PinkContact() {
  try {
    return (
      <section id="contact" className="py-16 px-6 lg:px-8 bg-white" data-name="pink-contact" data-file="components/PinkContact.js">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Connect! 🌸</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              I'd love to hear from you! Whether you want to collaborate, share ideas, or just have a friendly chat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[var(--secondary-color)] to-white p-8 rounded-3xl text-center border-2 border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-mail text-2xl text-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-[var(--text-secondary)] mb-4">Drop me a line anytime!</p>
              <button className="btn-primary">
                Send Email
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--secondary-color)] to-white p-8 rounded-3xl text-center border-2 border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-message-circle text-2xl text-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Let's Chat</h3>
              <p className="text-[var(--text-secondary)] mb-4">I'm a good listener and love meaningful conversations</p>
              <button className="btn-primary">
                Start Conversation
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)] p-8 rounded-3xl border-2 border-[var(--primary-color)]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                  alt="Fiona Cartoon"
                  className="w-16 h-16 rounded-full border-3 border-[var(--primary-color)]"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">Thanks for visiting my universe! 💕</h4>
                  <p className="text-[var(--text-secondary)]">Looking forward to connecting with you</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--secondary-color)] transition-all shadow-lg hover:scale-110">
                  <div className="icon-heart text-lg text-[var(--primary-color)]"></div>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--secondary-color)] transition-all shadow-lg hover:scale-110">
                  <div className="icon-star text-lg text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pink Contact component error:', error);
    return null;
  }
}