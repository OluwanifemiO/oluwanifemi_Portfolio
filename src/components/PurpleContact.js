function PurpleContact() {
  try {
    return (
      <section id="contact" className="py-20 px-6 lg:px-8 bg-white" data-name="purple-contact" data-file="components/PurpleContact.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">Let's Connect!</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              I'd love to hear from you! Whether you want to collaborate, share ideas, or just have a meaningful conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gradient-to-br from-[var(--secondary-color)] to-white p-10 rounded-2xl text-center border-2 border-[var(--primary-color)]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="icon-mail text-3xl text-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Email Me</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Drop me a line anytime!</p>
              <button className="btn-primary">
                Send Email
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--secondary-color)] to-white p-10 rounded-2xl text-center border-2 border-[var(--primary-color)]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="icon-message-circle text-3xl text-white"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Let's Chat</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">I'm a good listener and love meaningful conversations</p>
              <button className="btn-primary">
                Start Conversation
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)] p-10 rounded-3xl border-2 border-[var(--primary-color)]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <img 
                  src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                  alt="Fiona Cartoon"
                  className="w-20 h-20 rounded-full border-4 border-[var(--primary-color)]"
                />
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">Thanks for visiting my universe! ✨</h4>
                  <p className="text-[var(--text-secondary)] text-lg">Looking forward to connecting with you</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[var(--secondary-color)] transition-all shadow-lg">
                  <div className="icon-heart text-xl text-[var(--primary-color)]"></div>
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[var(--secondary-color)] transition-all shadow-lg">
                  <div className="icon-star text-xl text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Purple Contact component error:', error);
    return null;
  }
}