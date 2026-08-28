// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Contact() {
  const { portfolioMode } = usePortfolioMode();

  const contactData = {
    email: "aswanijayesh500@gmail.com",
    github: "https://github.com/Jayesh-Creator007",
    linkedin: "https://www.linkedin.com/in/jayesh-aswani-7760492a7/",
    instagram: "https://www.instagram.com/jayesh.aswani07/"
  };

  if (portfolioMode === 0) {
    return (
      <section id="contact">
        <Reveal>
          <div className="glass">
            <h2>Contact Me</h2>

            <p>Email: <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>

            <p>Instagram:
              <a href={contactData.instagram} target="_blank" rel="noreferrer">
                @jayesh.aswani07
              </a>
            </p>
            
            <p>Git-Hub:
              <a href={contactData.github} target="_blank" rel="noreferrer">
                Jayesh
              </a>
            </p>

            <p>LinkedIn:
              <a href={contactData.linkedin} target="_blank" rel="noreferrer">
                Jayesh Aswani
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-new-section">
      <style>{`
        /* Styling for New Contact Section */
        .contact-new-section {
          position: relative;
          padding: 120px 0 100px;
          background-color: #030712;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-new-bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: center;
          pointer-events: none;
        }

        .contact-new-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(160px);
          opacity: 0.08;
          pointer-events: none;
        }
        .contact-new-blob--left {
          bottom: -20%;
          left: -10%;
          background: #6366f1;
        }
        .contact-new-blob--right {
          top: -20%;
          right: -10%;
          background: #ec4899;
        }

        .contact-new-inner {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        /* Glass Window Card */
        .contact-glass-window {
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .contact-glass-window::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0.03) 100%
          );
          pointer-events: none;
        }

        /* Title & Content */
        .contact-window-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-window-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ec4899;
        }

        .contact-window-name {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #f8fafc;
          margin-bottom: 12px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #f8fafc 30%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-window-sub {
          font-size: 1.35rem;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 48px;
        }

        /* Button Grid */
        .contact-window-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .contact-window-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.88rem;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .contact-window-btn-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Custom theme glows for buttons */
        .contact-window-btn--email:hover {
          background: rgba(239, 68, 68, 0.06);
          border-color: rgba(239, 68, 68, 0.35);
          color: #fca5a5;
          box-shadow: 0 10px 25px -10px rgba(239, 68, 68, 0.3);
        }

        .contact-window-btn--github:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          box-shadow: 0 10px 25px -10px rgba(255, 255, 255, 0.2);
        }

        .contact-window-btn--linkedin:hover {
          background: rgba(10, 102, 194, 0.06);
          border-color: rgba(10, 102, 194, 0.35);
          color: #7dd3fc;
          box-shadow: 0 10px 25px -10px rgba(10, 102, 194, 0.3);
        }

        .contact-window-btn--instagram:hover {
          background: rgba(236, 72, 153, 0.06);
          border-color: rgba(236, 72, 153, 0.35);
          color: #fbcfe8;
          box-shadow: 0 10px 25px -10px rgba(236, 72, 153, 0.3);
        }

        .contact-window-btn:hover {
          transform: translateY(-4px);
        }

        .contact-window-btn:hover .contact-window-btn-icon {
          transform: scale(1.15);
        }

        /* Responsiveness */
        @media (max-width: 768px) {
          .contact-window-name {
            font-size: 2.5rem;
            letter-spacing: 0.05em;
          }
          
          .contact-window-sub {
            font-size: 1.1rem;
            margin-bottom: 36px;
          }
          
          .contact-window-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .contact-glass-window {
            padding: 40px 24px;
          }
          
          .contact-new-section {
            padding: 80px 0 60px;
          }
        }

        @media (max-width: 480px) {
          .contact-window-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-new-bg-grid" aria-hidden="true" />
      <div className="contact-new-blob contact-new-blob--left" aria-hidden="true" />
      <div className="contact-new-blob contact-new-blob--right" aria-hidden="true" />

      <div className="contact-new-inner">
        <motion.div
          className="contact-glass-window"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="contact-window-eyebrow">
            <span className="contact-window-eyebrow-dot" aria-hidden="true" />
            <code>// contact</code>
          </span>

          <h2 className="contact-window-name">Jayesh Aswani</h2>
          <p className="contact-window-sub">Have an idea? Let’s build something together.</p>

          <div className="contact-window-grid">
            <a
              href={`mailto:${contactData.email}`}
              className="contact-window-btn contact-window-btn--email"
            >
              <span className="contact-window-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>Email</span>
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-window-btn contact-window-btn--github"
            >
              <span className="contact-window-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </span>
              <span>GitHub</span>
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-window-btn contact-window-btn--linkedin"
            >
              <span className="contact-window-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-window-btn contact-window-btn--instagram"
            >
              <span className="contact-window-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
