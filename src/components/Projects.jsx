import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Product Manager",
      img: "/img/project1.png", // you will replace with your image
      desc: "A product management app built using React.",
      link: "https://product-manager-by-jayesh-aswani.netlify.app/",
      git:"https://github.com/jayeshaswani/product-manager"
    },
    {
      title: "Calculator",
      img: "/img/project2.png",
      desc: "A modern calculator built using HTML, CSS & JS.",
      link: "https://calculaterusingradio.netlify.app/",
      git:"https://github.com/Jayesh-Creator007/Calculater_Project-"
    },
    {
      title: "Weather App",
      img: "/img/project3.png",
      desc: "Weather API project showing live weather updates.",
      link: "https://testig-api-madeforweather.netlify.app/",
      git:"https://github.com/Jayesh-Creator007/Weather_app"
    }
  ];

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

                <a href={p.link} target="_blank" className="project-btn">
                  View Project
                </a>
                <a href={p.git} target="_blank" className="project-btn">
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
