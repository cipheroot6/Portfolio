import { useState, useEffect, useRef } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/cipheroot6",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cipheroot/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/cipheroot",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:cipheroot@proton.me",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        .footer-root {
          position: relative;
          margin-top: 80px;
          width: 100%;
          background: #080809;
          overflow: hidden;
          font-family: 'DM Mono', monospace;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .footer-top-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,163,0.4) 30%, rgba(0,200,255,0.4) 70%, transparent);
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 20px 80px 14px;
          box-sizing: border-box;
        }

        .footer-wordmark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -52%);
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(40px, 8vw, 80px);
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.03);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .footer-grid {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }

        @media (max-width: 640px) {
          .footer-grid { flex-direction: column; gap: 20px; }
          .footer-inner { padding: 24px 24px 16px; }
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 0.08em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          margin-bottom: 10px;
        }

        .footer-logo .bracket {
          background: linear-gradient(135deg, #00ffa3, #00c8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-logo .name {
          color: #ffffff;
        }

        .footer-tagline {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          line-height: 1.7;
          max-width: 280px;
        }

        .footer-socials-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 16px;
        }

        .footer-socials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          transition: all 0.2s;
          background: rgba(255,255,255,0.02);
        }

        .footer-social-link:hover {
          border-color: rgba(0,255,163,0.35);
          color: #ffffff;
          background: rgba(0,255,163,0.05);
          transform: translateX(4px);
        }

        .footer-social-link:hover svg {
          color: #00ffa3;
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-made {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-made .heart {
          color: #ff5f7e;
          animation: pulse-heart 1.8s ease-in-out infinite;
        }

        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .footer-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .footer-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-reveal:nth-child(2) { transition-delay: 0.1s; }
        .footer-reveal:nth-child(3) { transition-delay: 0.2s; }
      `}</style>

      <footer className="footer-root" ref={ref}>
        <div className="footer-top-line" />

        <div className="footer-inner">
          <div className="footer-wordmark" aria-hidden="true">
            CIPHEROOT
          </div>

          <div className="footer-grid">
            {/* Brand — left */}
            <div
              className={`footer-brand footer-reveal ${visible ? "visible" : ""}`}
              style={{ textAlign: "left" }}
            >
              <a href="#home" className="footer-logo" data-hover>
                <span className="bracket">&lt;</span>
                <span className="name">CIPHEROOT</span>
                <span className="bracket">/&gt;</span>
              </a>

              <p className="footer-tagline">
                turning ideas into web products.
              </p>


            </div>

            {/* Socials — right */}
            <div
              className={`footer-reveal ${visible ? "visible" : ""}`}
              style={{ textAlign: "right" }}
            >
              <div
                className="footer-socials-label"
                style={{ textAlign: "right" }}
              >
                Connect
              </div>
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={s.label}
                    data-hover
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-made" style={{ margin: "0 auto" }}>
              built with <span className="heart">♥</span> react &amp; tailwind
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
