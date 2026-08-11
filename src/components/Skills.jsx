import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap",
    "React", "Node.js", "MongoDB", "Express.js"
  ];

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