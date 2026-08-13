import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Header() {
  const { portfolioMode, togglePortfolioMode } = usePortfolioMode();

  return (
    <header>
      <h2>Jayesh Portfolio</h2>
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="toggle-wrapper">
          <span className={`toggle-label ${portfolioMode === 0 ? "active" : ""}`}>Classic</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={portfolioMode === 1}
              onChange={togglePortfolioMode}
            />
            <span className="toggle-slider" />
          </label>
          <span className={`toggle-label ${portfolioMode === 1 ? "active" : ""}`}>New</span>
        </div>
      </nav>
    </header>
  );
}
