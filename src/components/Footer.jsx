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

const quotes = [
  {
    text: "programs must be written for people to read, and only incidentally for machines to execute.",
    author: "harold abelson",
  },
  {
    text: "talk is cheap. show me the code.",
    author: "linus torvalds",
  },
  {
    text: "any fool can write code that a computer can understand. good programmers write code that humans can understand.",
    author: "martin fowler",
  },
  {
    text: "first, solve the problem. then, write the code.",
    author: "john johnson",
  },
  {
    text: "simplicity is the soul of efficiency.",
    author: "austin freeman",
  },
  {
    text: "make it work, make it right, make it fast.",
    author: "kent beck",
  },
  {
    text: "code is like humor. when you have to explain it, it's bad.",
    author: "cory house",
  },
  {
    text: "the best code is no code at all.",
    author: "jeff atwood",
  },
  {
    text: "walking on water and developing software from a specification are easy if both are frozen.",
    author: "edward v berard",
  },
  {
    text: "deleted code is debugged code.",
    author: "jeff sickel",
  },
];

function useTypewriter(text, speed = 38) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return { displayed, done };
}

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { displayed, done } = useTypewriter(quotes[quoteIndex].text, 38);

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
        .f-root {
          width: 100%;
          background: #0a0a1a;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        .f-topline {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4) 40%, rgba(6,182,212,0.4) 60%, transparent);
        }
        .f-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 1.25rem;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }
        /* ghost watermark */
        .f-watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(56px, 10vw, 110px);
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.025);
          letter-spacing: -0.02em;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          z-index: 0;
        }
        /* ── main row ── */
        .f-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }
        /* LOGO — centered above row */
        .f-logo-wrap {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .f-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 0.08em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        /* LEFT */
        .f-left { display: flex; flex-direction: column; text-align: left; }
        .f-logo .br {
          background: linear-gradient(135deg, #a855f7, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .f-logo .nm { color: #f1f5f9; }
        /* quote box */
        .f-quote-box {
          width: 360px;
          max-width: 100%;
          min-height: 42px;
          overflow: hidden;
          position: relative;
          text-align: left;
        }
        .f-quote-text {
          font-size: 0.82rem;
          color: rgba(241,245,249,0.35);
          line-height: 1.65;
          font-style: italic;
        }
        .f-cursor {
          display: inline-block;
          width: 1.5px; height: 11px;
          background: #06b6d4;
          margin-left: 1px;
          vertical-align: middle;
          border-radius: 1px;
          animation: fcblink 1s step-end infinite;
        }
        @keyframes fcblink { 0%,100%{opacity:1} 50%{opacity:0} }
        .f-author {
          margin-top: 6px;
          font-size: 0.74rem;
          color: rgba(168,85,247,0.65);
          letter-spacing: 0.03em;
          transition: opacity 0.35s ease;
        }
        /* RIGHT */
        .f-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex-shrink: 0;
        }
        .f-connect {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(241,245,249,0.22);
          margin-bottom: 10px;
        }
        .f-links {
          display: grid;
          grid-template-columns: repeat(2, 112px);
          gap: 8px;
        }
        .f-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 8px 0;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: rgba(241,245,249,0.45);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.22s ease;
        }
        .f-link:hover {
          border-color: rgba(168,85,247,0.35);
          background: rgba(168,85,247,0.07);
          color: #f1f5f9;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(168,85,247,0.12);
        }
        .f-link:hover svg { color: #a855f7; }
        /* bottom */
        .f-bottom {
          position: relative;
          z-index: 1;
          margin-top: 1.5rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          font-size: 0.78rem;
          color: rgba(241,245,249,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .f-heart {
          color: #ec4899;
          animation: fhbeat 1.8s ease-in-out infinite;
        }
        @keyframes fhbeat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.3)} }
        /* reveal */
        .f-reveal { opacity:0; transform:translateY(14px); transition: opacity .5s ease, transform .5s ease; }
        .f-reveal.in { opacity:1; transform:translateY(0); }
        .f-reveal:nth-child(2) { transition-delay:.1s }
        .f-reveal:nth-child(3) { transition-delay:.18s }
        /* mobile */
        @media(max-width:640px){
          .f-inner { padding: 1.5rem 1.25rem 1rem; }
          .f-logo-wrap { margin-bottom: 1rem; }
          .f-logo { font-size: 1rem; }
          .f-row { flex-direction:column; align-items:center; gap:1.25rem; }
          .f-left { align-items: center; }
          .f-quote-box { width: 100%; min-height: 36px; text-align: center; }
          .f-quote-text { font-size: 0.78rem; line-height: 1.55; }
          .f-author { font-size: 0.7rem; margin-top: 4px; text-align: center; }
          .f-watermark { font-size: clamp(40px, 18vw, 60px); }
          .f-right { align-items: center; width: 100%; }
          .f-connect { font-size: 0.62rem; margin-bottom: 8px; }
          .f-links { grid-template-columns: repeat(4, 1fr); width: 100%; gap: 6px; }
          .f-link { padding: 8px 4px; font-size: 0.72rem; gap: 4px; }
          .f-link svg { width: 13px; height: 13px; }
          .f-bottom { margin-top: 1rem; padding-top: 0.75rem; font-size: 0.72rem; }
        }
        /* small mobile */
        @media(max-width:380px){
          .f-links { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <footer className="f-root" ref={ref}>
        <div className="f-topline" />
        <div className="f-inner">
          <div className="f-watermark" aria-hidden="true">CIPHEROOT</div>

          {/* LOGO — centered */}
          <div className={`f-logo-wrap f-reveal ${visible ? "in" : ""}`}>
            <a href="#home" className="f-logo" data-hover>
              <span className="br">&lt;</span>
              <span className="nm">CIPHEROOT</span>
              <span className="br">/&gt;</span>
            </a>
          </div>

          <div className="f-row">
            {/* LEFT */}
            <div className={`f-left f-reveal ${visible ? "in" : ""}`}>
              <div className="f-quote-box">
                <p className="f-quote-text">
                  "{displayed}{!done && <span className="f-cursor" />}"
                </p>
              </div>
              <p className="f-author" style={{ opacity: done ? 1 : 0 }}>
                — {quotes[quoteIndex].author}
              </p>
            </div>

            {/* RIGHT */}
            <div className={`f-right f-reveal ${visible ? "in" : ""}`}>
              <span className="f-connect">Connect</span>
              <div className="f-links">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank"
                    rel="noopener noreferrer" className="f-link"
                    aria-label={s.label} data-hover>
                    {s.icon}{s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="f-bottom">
            built with <span className="f-heart">♥</span> tailwind &amp; coffee
          </div>
        </div>
      </footer>
    </>
  );
}
