import { useScrollReveal } from "../hooks/useScrollReveal";


export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="relative py-10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />

      <div
        ref={ref}
        className={`section-container reveal ${visible ? "visible" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label glass text-[var(--color-accent-purple)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            About Me
          </span>
          <h2 className="section-title">
            Full Stack Developer &amp; <br />
            <span className="gradient-text">Security Researcher</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[800px] mx-auto text-center">
          {/* Image / Visual */}
          <div className="relative flex justify-center w-full">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-xl" />
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full glass-strong overflow-hidden flex items-center justify-center">
                {/* Abstract developer visual */}
                <img
                  src="/profile.jpg"
                  alt="Shreyas — Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s infinite linear",
                  }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 right-0 md:-right-6 glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl animate-float text-xs md:text-sm font-medium text-[var(--color-accent-cyan)] shadow-lg shadow-cyan-500/10">
                🔐 CTF Competitor
              </div>
              <div className="absolute -bottom-2 left-0 md:-left-6 glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl animate-float-delayed text-xs md:text-sm font-medium text-[var(--color-accent-purple)] shadow-lg shadow-purple-500/10">
                ⚡ Full Stack Dev
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full text-center flex flex-col items-center">
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-lg md:text-xl max-w-[700px]">
              I'm a <strong className="text-white">Full Stack Developer</strong> and <strong className="text-white">security researcher</strong> who
              builds production-grade web applications and breaks things apart to understand how they work.
              Both skills feed each other more than most people expect.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-lg md:text-xl max-w-[700px]">
              On the web side, I specialize in React, Next.js, Node.js, and MongoDB — building everything
              from real-time applications to SaaS dashboards with a focus on clean architecture and shipping
              things that actually work. On the security side, I compete in CTFs with team NullPointers,
              working across reverse engineering, cryptography, and forensics. I run Arch Linux with a
              custom Hyprland setup because I like knowing exactly how my tools behave.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg md:text-xl max-w-[700px]">
              I care about building things that are both functional and defensible —{" "}
              <span className="text-white font-medium">good software shouldn't just work, it should be hard to break.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
