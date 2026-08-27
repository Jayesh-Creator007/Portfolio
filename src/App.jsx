import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePortfolioMode } from "./context/PortfolioModeContext";
import "./App.css";

function App() {
  const { portfolioMode } = usePortfolioMode();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "auto" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [portfolioMode]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
