import React from "react";
import image from "../assets/smart-task-cover-image.png";
import portfolioImage from "../assets/portfolio-image.png";

export default function Projects() {
  try {
    const projects = [
      {
        id: 1,
        name: "Smart Task",
        description:
          "Built a smart task management app that leverages OpenAI's API to help users organize and prioritize their tasks effectively.",
        image: `${image}`,
        link: "https://smart-task-inky.vercel.app/",
        tags: ["Smart Task Management", "OpenAI API", "React", "TypeScript", "Prisma PostgreSQL", "AI", "Vercel", "Next.js", "TailwindCSS", "Google Auth"],
        isActive: true,
      },
      {
        id: 2,
        name: "Personal Portfolio",
        description:
          "My personal portfolio website showcasing my skills, projects, and contact information to connect with potential collaborators and employers.",
        image: `${portfolioImage}`,
        link: null,
        tags: ["Portfolio", "JavaScript", "React", "EmailJS", "TailwindCSS", "Vercel", "GitHub"],
        isActive: true,
      },
      {
        id: 3,
        name: "UlcerEase",
        description:
          "Developing a healthcare web application that assists in managing and monitoring ulcers using AI-driven insights and personalized care plans.",
        image: null,
        link: null,
        tags: ["Smart Healthcare", "Ulcer Management", "OpenAI API", "C#, ASP.NET", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Edanam", "Spoonacular"],
        isActive: false,
      },
      {
        id: 4,
        name: "Crochet Project Tracker",
        description:
          "An upcoming project management tool tailored for crochet enthusiasts to plan, track, and showcase their crochet projects.",
        image: null,
        link: null,
        tags: ["Crochet", "Crafts", "Project Management", "Tech Stack TBD"],
        isActive: false,
      },
    ];

    return (
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--section-about)]"
        data-name="projects"
        data-file="components/Projects.jsx"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A showcase of the creative projects I've been working on. Each one
              reflects my passion for innovation and making a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg card-hover border-2 border-[var(--secondary-color)] overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--cute-mint)] flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-medium">
                        Project in Progress
                      </p>
                    </div>
                  )}
                  {!project.isActive && (
                    <div className="absolute top-3 right-3 bg-[var(--cute-yellow)] px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        Soon 
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                    {project.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.isActive ? (
                    <a
                      href={project.link} 
                      className="inline-flex items-center gap-2 btn-primary"
                    >
                      <div className="icon-external-link text-lg"></div>
                      Visit Project
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 px-6 py-3 rounded-lg font-medium">
                      <div className="icon-clock text-lg"></div>
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[var(--secondary-color)] p-8 rounded-2xl border-2 border-[var(--primary-color)]/20">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
                More Projects Coming Soon!
              </h3>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
                I'm constantly working on new and exciting projects. Stay tuned
                for more updates and feel free to reach out if you'd like to
                collaborate or learn more about my work!
              </p>

              <div className="mt-12 flex flex-col items-center gap-6">
                <p className="text-[var(--text-secondary)] text-lg">
                  Want to see more revolutionary work?
                </p>

                <a
                  href="https://github.com/OluwanifemiO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors text-[var(--text-primary)] font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 640 640">
                    <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
                  </svg>
                  <span>View All on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Projects component error:", error);
    return null;
  }
}
