import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const [status, setStatus] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
      emailjs.init("AzHCdFBxYNjDmUDVa");
    }, []);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const form = useRef();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus("");

      try {
        await emailjs.sendForm("service_dm9wcb6", "template_2qh5qpm", form.current, "UznB_CwN58fzWBbMW");

        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: ""});
      } catch (error) {
        console.error("Email sending failed:", error);
        setStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--section-contact)]"
        data-name="contact"
        data-file="components/Contact.jsx"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Let's Connect!</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              I'd love to hear from you! Whether you want to collaborate, share
              ideas, or just have a meaningful conversation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[var(--secondary-color)] mb-12">
            <form ref={form} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-color)] focus:outline-none transition-colors"
                  placeholder="What should I call you?"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-color)] focus:outline-none transition-colors"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                >
                  Your Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-color)] focus:outline-none transition-colors"
                  placeholder="What is the subject of your email?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-color)] focus:outline-none transition-colors resize-none"
                  placeholder="Share your thoughts, ideas, or just say hello!"
                ></textarea>
              </div>

              {status === "success" && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="icon-check-circle text-xl text-green-600"></div>
                  <p className="text-green-800 font-medium">
                    Thanks for reaching out! I'll get back to you soon! 
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="icon-alert-circle text-xl text-red-600"></div>
                  <p className="text-red-800 font-medium">
                    Oops! Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="icon-loader text-lg animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <div className="icon-send text-lg"></div>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-r from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)] p-8 rounded-2xl mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                  Thanks for checking out my portfolio! 👋
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Let’s connect and build something amazing together.
                </p>
              </div>

              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/OluwanifemiO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg> 
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/oluwanifemi-ogidama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Contact component error:", error);
    return null;
  }
}
