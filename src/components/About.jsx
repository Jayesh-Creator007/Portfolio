import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function About() {
  const { portfolioMode } = usePortfolioMode();

  const scrollRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);

  const cards = [
    {
      id: 1,
      index: "01",
      title: "Who I Am",
      icon: "♟",
      accent: "purple",
      body:
        "I'm curious by nature and enjoy things that challenge the way I think. Outside coding, I like strategy games such as chess and shogi. I also enjoy messing with my friends' minds and making them overthink things. 😄",
    },
    {
      id: 2,
      index: "02",
      title: "Education",
      icon: "🎓",
      accent: "cyan",
      body:
        "I'm currently pursuing a Bachelor of Computer Applications (BCA), while continuously improving my development skills through practical projects.",
    },
    {
      id: 3,
      index: "03",
      title: "What I Build",
      icon: "🛠",
      accent: "mint",
      body:
        "I enjoy turning ideas into working projects, especially applications with useful functionality and good UI. I like solving real problems while experimenting with new ideas.",
    },
    {
      id: 4,
      index: "04",
      title: "How I Learn",
      icon: "🧪",
      accent: "pink",
      body:
        "I'm curious about what will happen if I try something different. I learn by experimenting, making mistakes, discovering unexpected results, and figuring out why things work.",
    },
    {
      id: 5,
      index: "05",
      title: "Vibe Coding",
      icon: "✨",
      accent: "gold",
      body:
        "I combine traditional coding with AI-assisted development to experiment faster, explore ideas, and turn concepts into working projects. For me, vibe coding is another way to learn, experiment, and build.",
    },
  ];

  const loopedCards = [...cards, ...cards];

  useEffect(() => {
    if (portfolioMode === 0) return undefined;

    const scroller = scrollRef.current;
    if (!scroller) return undefined;

    const getSingleSetWidth = () => {
      const total = scroller.scrollWidth / 2;
      return total > 0 ? total : scroller.scrollWidth;
    };

    const normalizeScroll = (allowBackwardWrap = false) => {
      const singleSet = getSingleSetWidth();
      if (singleSet <= 0) return false;

      if (scroller.scrollLeft >= singleSet) {
        scroller.scrollLeft -= singleSet;
        return true;
      } else if (
        allowBackwardWrap &&
        scroller.scrollLeft <= 0 &&
        scroller.scrollWidth > scroller.clientWidth
      ) {
        scroller.scrollLeft += singleSet;
        return true;
      }
      return false;
    };

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const warped = normalizeScroll(true);
      if (warped) {
        isProgrammaticScrollRef.current = true;
        requestAnimationFrame(() => {
          isProgrammaticScrollRef.current = false;
        });
      }
    };

    let autoScrollRaf = 0;
    let paused = false;
    const scrollSpeed = 0.75;

    const tick = () => {
      if (!paused) {
        scroller.scrollLeft += scrollSpeed;
        const warped = normalizeScroll(false);
        if (warped) {
          isProgrammaticScrollRef.current = true;
          requestAnimationFrame(() => {
            isProgrammaticScrollRef.current = false;
          });
        }
      }
      autoScrollRaf = requestAnimationFrame(tick);
    };

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("touchend", resume, { passive: true });
    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("pointercancel", resume);

    autoScrollRaf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(autoScrollRaf);
      scroller.removeEventListener("scroll", handleScroll);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("touchend", resume);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("pointercancel", resume);
    };
  }, [portfolioMode]);

  if (portfolioMode === 0) {
    return (
      <section id="about">
        <Reveal>
          <div className="glass">
            <h2>About Me</h2>
            <p>I am a developer passionate about UI, logic and smooth user experience.</p>
            <p>I mainly use JavaScript, Node.js, React, MongoDB and Express.</p>
            <p>I love building clean, modern and scalable web applications.</p>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="about" className="about-new">
      <div className="about-new-bg-grid" aria-hidden="true" />
      <div className="about-new-blob about-new-blob--purple" aria-hidden="true" />
      <div className="about-new-blob about-new-blob--cyan" aria-hidden="true" />
      <div className="about-new-blob about-new-blob--mint" aria-hidden="true" />

      <div className="about-new-inner">
        <motion.div
          className="about-new-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="about-new-eyebrow">
            <span className="about-new-eyebrow-dot" aria-hidden="true" />
            <code>// about</code>
          </span>
          <h2 className="about-new-title">
            About <span className="about-new-title-accent">Me</span>
          </h2>
          <p className="about-new-sub">
            Five cards. Scroll sideways to get the full picture.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="about-new-scroll-wrap"
          aria-label="About cards — scroll horizontally"
        >
          <motion.div
            className="about-new-track"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {loopedCards.map((card, i) => {
              const originalIndex = i % cards.length;
              return (
                <motion.article
                  key={`${card.id}-${i < cards.length ? "a" : "b"}`}
                  className={`about-new-card about-new-card--${card.accent}`}
                  custom={originalIndex}
                  variants={{
                    hidden: { opacity: 0, x: 30, y: 10 },
                    show: (idx) => ({
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        delay: 0.1 + idx * 0.09,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }),
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <div className="about-new-card-glow" aria-hidden="true" />
                  <div className="about-new-card-inner">
                    <div className="about-new-card-head">
                      <span className="about-new-card-index">{card.index}</span>
                      <span className="about-new-card-icon" aria-hidden="true">
                        {card.icon}
                      </span>
                    </div>
                    <div className="about-new-card-title-wrap">
                      <h3 className="about-new-card-title">{card.title}</h3>
                    </div>
                    <div className="about-new-card-body-wrap">
                      <p className="about-new-card-body">{card.body}</p>
                    </div>
                    <div className="about-new-card-foot">
                      <span className="about-new-card-tag">
                        #{card.title.toLowerCase().replace(/\s+/g, "")}
                      </span>
                      <span className="about-new-card-arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="about-new-fade about-new-fade--left" aria-hidden="true" />
          <div className="about-new-fade about-new-fade--right" aria-hidden="true" />
        </div>

        <div className="about-new-scroll-hint" aria-hidden="true">
          <span className="about-new-scroll-hint-icon">⇆</span>
          <span>Scroll horizontally</span>
        </div>
      </div>
    </section>
  );
}
