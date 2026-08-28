import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Projects() {
  const { portfolioMode } = usePortfolioMode();
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Product Manager",
      img: "/img/project1.png",
      desc: "A product management app built using React.",
      link: "https://product-manager-by-jayesh-aswani.netlify.app/",
      git: "https://github.com/jayeshaswani/product-manager",
      tags: ["React", "CSS", "HTML", "Netlify"],
      badge: "React App",
      index: "01"
    },
    {
      title: "Calculator",
      img: "/img/project2.png",
      desc: "A modern calculator built using HTML, CSS & JS.",
      link: "https://calculaterusingradio.netlify.app/",
      git: "https://github.com/Jayesh-Creator007/Calculater_Project-",
      tags: ["HTML", "CSS", "JavaScript"],
      badge: "JS Utility",
      index: "02"
    },
    {
      title: "Weather App",
      img: "/img/project3.png",
      desc: "Weather API project showing live weather updates.",
      link: "https://testig-api-madeforweather.netlify.app/",
      git: "https://github.com/Jayesh-Creator007/Weather_app",
      tags: ["JavaScript", "API", "CSS", "Netlify"],
      badge: "API Showcase",
      index: "03"
    }
  ];

  if (portfolioMode === 0) {
    return (
      <section id="projects">
        <Reveal>
          <h2 style={{ marginBottom: "30px" }}>Projects</h2>

          <div className="project-grid">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={p.img} alt={p.title} className="project-img" />

                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <a href={p.link} target="_blank" className="project-btn" rel="noreferrer">
                    View Project
                  </a>
                  <a href={p.git} target="_blank" className="project-btn" rel="noreferrer">
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>
    );
  }

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="projects-explorer-section">
      <style>{`
        /* Styling for New Projects Explorer Section */
        .projects-explorer-section {
          position: relative;
          padding: 100px 0 80px;
          background-color: #030712;
          overflow: hidden;
        }

        .projects-explorer-bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center;
          pointer-events: none;
        }

        .projects-explorer-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.1;
          pointer-events: none;
        }
        .projects-explorer-blob--1 {
          top: 15%;
          left: -10%;
          background: #6366f1;
        }
        .projects-explorer-blob--2 {
          bottom: 10%;
          right: -10%;
          background: #a855f7;
        }

        .projects-explorer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        /* Header style */
        .projects-explorer-head {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .projects-explorer-eyebrow {
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

        .projects-explorer-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
        }

        .projects-explorer-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .projects-explorer-title-accent {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-explorer-sub {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
        }

        /* Explorer Layout */
        .project-explorer-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Left Sidebar */
        .project-explorer-sidebar {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .sidebar-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #64748b;
          text-transform: uppercase;
          padding: 0 24px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sidebar-title-icon {
          font-size: 0.8rem;
          color: #a855f7;
        }

        .sidebar-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-item-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 14px 24px;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .sidebar-item-btn--active {
          background: rgba(99, 102, 241, 0.08);
          border-left-color: #6366f1;
        }

        .sidebar-item-index {
          font-family: monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
        }

        .sidebar-item-btn--active .sidebar-item-index {
          color: #a5b4fc;
        }

        .sidebar-item-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #94a3b8;
          transition: color 0.3s ease;
        }

        .sidebar-item-btn--active .sidebar-item-name {
          color: #f8fafc;
        }

        .sidebar-item-btn:hover:not(.sidebar-item-btn--active) {
          background: rgba(255, 255, 255, 0.02);
          border-left-color: rgba(255, 255, 255, 0.15);
        }

        .sidebar-item-btn:hover:not(.sidebar-item-btn--active) .sidebar-item-name {
          color: #cbd5e1;
        }

        /* Right Preview Panel */
        .project-explorer-preview-panel {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
          min-height: 450px;
        }

        .preview-img-wrap {
          width: 100%;
          height: 100%;
          min-height: 300px;
          position: relative;
          overflow: hidden;
          background: #090d16;
        }

        .preview-img-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, transparent 75%, rgba(15, 23, 42, 0.4)),
                      linear-gradient(to bottom, transparent 75%, rgba(15, 23, 42, 0.4));
          pointer-events: none;
          z-index: 2;
        }

        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .preview-badge {
          display: inline-flex;
          align-self: flex-start;
          padding: 5px 12px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 8px;
          color: #a5b4fc;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .preview-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .preview-desc {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.68;
          margin-bottom: 24px;
        }

        .preview-tags-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: #475569;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .preview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .preview-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 500;
        }

        .preview-btns {
          display: flex;
          gap: 14px;
        }

        .preview-btn {
          flex: 1;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .preview-btn--primary {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
        }

        .preview-btn--primary:hover {
          box-shadow: 0 8px 22px rgba(99, 102, 241, 0.45);
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .preview-btn--secondary {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }

        .preview-btn--secondary:hover {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.3);
          color: #f8fafc;
          transform: translateY(-2px);
        }

        /* Responsive adjustment */
        @media (max-width: 992px) {
          .project-explorer-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .project-explorer-preview-panel {
            grid-template-columns: 1fr;
          }
          
          .preview-img-wrap {
            height: 250px;
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .projects-explorer-title {
            font-size: 2.2rem;
          }
          
          .preview-content {
            padding: 24px;
          }
          
          .preview-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="projects-explorer-bg-grid" aria-hidden="true" />
      <div className="projects-explorer-blob projects-explorer-blob--1" aria-hidden="true" />
      <div className="projects-explorer-blob projects-explorer-blob--2" aria-hidden="true" />

      <div className="projects-explorer-inner">
        <motion.div
          className="projects-explorer-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="projects-explorer-eyebrow">
            <span className="projects-explorer-eyebrow-dot" aria-hidden="true" />
            <code>// projects</code>
          </span>
          <h2 className="projects-explorer-title">
            Project <span className="projects-explorer-title-accent">Explorer</span>
          </h2>
          <p className="projects-explorer-sub">
            Explore my selected works interactively inside a developer workspace.
          </p>
        </motion.div>

        <div className="project-explorer-layout">
          {/* Left Sidebar */}
          <div className="project-explorer-sidebar">
            <div className="sidebar-title">
              <span className="sidebar-title-icon">📁</span> Project Explorer
            </div>
            <div className="sidebar-list">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`sidebar-item-btn ${activeIndex === idx ? "sidebar-item-btn--active" : ""}`}
                >
                  <span className="sidebar-item-index">{p.index}</span>
                  <span className="sidebar-item-name">{p.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Preview Panel */}
          <div className="project-explorer-preview-container" style={{ position: "relative", minHeight: "450px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="project-explorer-preview-panel"
              >
                <div className="preview-img-wrap">
                  <img src={activeProject.img} alt={activeProject.title} className="preview-img" />
                </div>

                <div className="preview-content">
                  <div className="preview-badge">{activeProject.badge}</div>
                  <h3 className="preview-title">{activeProject.title}</h3>
                  <p className="preview-desc">{activeProject.desc}</p>

                  <div className="preview-tags-title">Technologies Used</div>
                  <div className="preview-tags">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="preview-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="preview-btns">
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-btn preview-btn--primary"
                    >
                      View Project ↗
                    </a>
                    <a
                      href={activeProject.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-btn preview-btn--secondary"
                    >
                      View Code &lt;/&gt;
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
