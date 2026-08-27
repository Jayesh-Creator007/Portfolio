import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Skills() {
  const { portfolioMode } = usePortfolioMode();

  const [typedText, setTypedText] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [showOutputText, setShowOutputText] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const handleViewportEnter = () => {
    if (showPrompt) return;
    setShowPrompt(true);

    const command = "skills";
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + command[index]);
      index++;
      if (index >= command.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowOutputText(true);
          setTimeout(() => {
            setShowSkills(true);
          }, 600);
        }, 400);
      }
    }, 120);
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap",
    "React", "Node.js", "MongoDB", "Express.js"
  ];

  if (portfolioMode === 0) {
    return (
      <section id="skills">
        <Reveal>
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={skill}
                className="skill-card"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    );
  }

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="skills" className="skills-new-section">
      <style>{`
        /* Styling for New Skills Section */
        .skills-new-section {
          position: relative;
          padding: 100px 0 80px;
          background-color: #030712;
          overflow: hidden;
        }

        .skills-new-bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
          pointer-events: none;
        }

        .skills-new-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
        }
        .skills-new-blob--purple {
          top: 10%;
          left: -5%;
          background: #a855f7;
        }
        .skills-new-blob--cyan {
          bottom: 10%;
          right: -5%;
          background: #06b6d4;
        }

        .skills-new-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .skills-new-head {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .skills-new-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .skills-new-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
        }

        .skills-new-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .skills-new-title-accent {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-new-sub {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
        }

        /* Terminal container & header */
        .skills-terminal {
          max-width: 850px;
          margin: 0 auto;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.05);
          overflow: hidden;
          font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
          text-align: left;
        }

        .terminal-header {
          background: rgba(30, 41, 59, 0.5);
          padding: 12px 18px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .terminal-dot--red { background: #ef4444; }
        .terminal-dot--yellow { background: #eab308; }
        .terminal-dot--green { background: #22c55e; }

        .terminal-title {
          flex-grow: 1;
          text-align: center;
          color: #64748b;
          font-size: 0.85rem;
          margin-right: 52px;
          font-weight: 500;
        }

        /* Terminal Body */
        .terminal-body {
          padding: 24px;
          color: #e2e8f0;
          font-size: 0.95rem;
          line-height: 1.6;
          min-height: 380px;
        }

        .terminal-prompt-line {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .terminal-prompt-user {
          color: #4ade80;
          font-weight: 600;
        }

        .terminal-prompt-colon {
          color: #f8fafc;
        }

        .terminal-prompt-path {
          color: #38bdf8;
          font-weight: 600;
        }

        .terminal-prompt-dollar {
          color: #f8fafc;
        }

        .terminal-command-input {
          color: #f8fafc;
          font-weight: 500;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: #6366f1;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        .terminal-output-status {
          color: #64748b;
          margin: 12px 0;
          font-size: 0.9rem;
        }

        /* Rows & Grid spacing */
        .terminal-row-1 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 24px;
          margin-bottom: 18px;
        }

        .terminal-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 66.6%;
          margin: 0 auto;
        }

        /* Card Styling inside Terminal */
        .terminal-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .terminal-card:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 20px -10px rgba(99, 102, 241, 0.2);
          background: rgba(99, 102, 241, 0.02);
        }

        .terminal-card-header {
          color: #f8fafc;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-card-arrow {
          color: #818cf8;
          font-size: 0.85rem;
        }

        .terminal-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .terminal-tag {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: #a5b4fc;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Responsive adjustment */
        @media (max-width: 768px) {
          .skills-new-title {
            font-size: 2.2rem;
          }
          
          .terminal-row-1 {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          
          .terminal-row-2 {
            grid-template-columns: 1fr;
            max-width: 100%;
            margin: 0;
            gap: 14px;
          }
          
          .terminal-body {
            padding: 16px;
            min-height: auto;
          }
        }
      `}</style>

      <div className="skills-new-bg-grid" aria-hidden="true" />
      <div className="skills-new-blob skills-new-blob--purple" aria-hidden="true" />
      <div className="skills-new-blob skills-new-blob--cyan" aria-hidden="true" />

      <div className="skills-new-inner">
        <motion.div
          className="skills-new-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="skills-new-eyebrow">
            <span className="skills-new-eyebrow-dot" aria-hidden="true" />
            <code>// skills</code>
          </span>
          <h2 className="skills-new-title">
            My <span className="skills-new-title-accent">Skills</span>
          </h2>
          <p className="skills-new-sub">
            Explore my technical skill set interactively via the terminal.
          </p>
        </motion.div>

        <motion.div
          className="skills-terminal"
          onViewportEnter={handleViewportEnter}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot terminal-dot--red" />
              <span className="terminal-dot terminal-dot--yellow" />
              <span className="terminal-dot terminal-dot--green" />
            </div>
            <div className="terminal-title">bash</div>
          </div>

          <div className="terminal-body">
            <div className="terminal-prompt-line">
              <span className="terminal-prompt-user">jayesh@portfolio</span>
              <span className="terminal-prompt-colon">:</span>
              <span className="terminal-prompt-path">~</span>
              <span className="terminal-prompt-dollar">$</span>
              <span className="terminal-command-input"> {typedText}</span>
              {!showOutputText && <span className="terminal-cursor" />}
            </div>

            {showOutputText && (
              <div className="terminal-output-status">
                Fetching skills database...
              </div>
            )}

            {showSkills && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="terminal-row-1">
                  <motion.div variants={cardVariants} className="terminal-card">
                    <div className="terminal-card-header">
                      <span className="terminal-card-arrow">▶</span> Web
                    </div>
                    <div className="terminal-card-tags">
                      <span className="terminal-tag">HTML</span>
                      <span className="terminal-tag">CSS</span>
                      <span className="terminal-tag">JavaScript</span>
                      <span className="terminal-tag">React</span>
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="terminal-card">
                    <div className="terminal-card-header">
                      <span className="terminal-card-arrow">▶</span> Mobile
                    </div>
                    <div className="terminal-card-tags">
                      <span className="terminal-tag">Flutter</span>
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="terminal-card">
                    <div className="terminal-card-header">
                      <span className="terminal-card-arrow">▶</span> Programming
                    </div>
                    <div className="terminal-card-tags">
                      <span className="terminal-tag">C</span>
                      <span className="terminal-tag">C++</span>
                    </div>
                  </motion.div>
                </div>

                <div className="terminal-row-2">
                  <motion.div variants={cardVariants} className="terminal-card">
                    <div className="terminal-card-header">
                      <span className="terminal-card-arrow">▶</span> Database
                    </div>
                    <div className="terminal-card-tags">
                      <span className="terminal-tag">SQLite</span>
                    </div>
                  </motion.div>

                  <motion.div variants={cardVariants} className="terminal-card">
                    <div className="terminal-card-header">
                      <span className="terminal-card-arrow">▶</span> Desktop
                    </div>
                    <div className="terminal-card-tags">
                      <span className="terminal-tag">Electron</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="terminal-prompt-line"
                  style={{ marginTop: "24px" }}
                >
                  <span className="terminal-prompt-user">jayesh@portfolio</span>
                  <span className="terminal-prompt-colon">:</span>
                  <span className="terminal-prompt-path">~</span>
                  <span className="terminal-prompt-dollar">$</span>
                  <span className="terminal-cursor" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}