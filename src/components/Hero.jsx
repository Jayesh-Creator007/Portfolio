import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Hero() {
  const { portfolioMode } = usePortfolioMode();

  if (portfolioMode === 0) {
    return (
      <section className="hero" id="hero">
        <Reveal>
          <h1>Welcome! I'm Jayesh Aswani</h1>
          <p>A developer who loves clean UI and powerful web apps.</p>
        </Reveal>
      </section>
    );
  }

  const chipVariants = {
    hidden: { opacity: 0, y: 12 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section className="hero hero-new" id="hero">
      <div className="hero-new-grid" aria-hidden="true" />
      <div className="hero-new-blob hero-new-blob--purple" aria-hidden="true" />
      <div className="hero-new-blob hero-new-blob--cyan" aria-hidden="true" />
      <div className="hero-new-blob hero-new-blob--mint" aria-hidden="true" />

      <div className="hero-new-inner">
        <motion.span
          className="hero-new-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="hero-new-badge-dot" />
          <code>portfolio.new</code>
        </motion.span>

        <motion.h1
          className="hero-new-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Hello, I am Jayesh Aswani
          <span className="hero-new-caret" aria-hidden="true">|</span>
        </motion.h1>

        <motion.p
          className="hero-new-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          I code. I build. I experiment — with both coding and vibe coding.
        </motion.p>

        <motion.div
          className="hero-new-chips"
          initial="hidden"
          animate="show"
        >
          {[
            "<Developer />",
            "UI Craft",
            "Experimenter",
            "Vibe Coder",
          ].map((chip, i) => (
            <motion.span
              key={chip}
              className="hero-new-chip"
              custom={i}
              variants={chipVariants}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hero-new-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="hero-new-scroll-line" />
          <span className="hero-new-scroll-text">scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
