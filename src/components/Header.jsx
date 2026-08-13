import { usePortfolioMode } from "../context/PortfolioModeContext";

export default function Header() {
  const { portfolioMode, togglePortfolioMode } = usePortfolioMode();

  if (portfolioMode === 0) {
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

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="header-new">
      <a href="#hero" className="header-new-brand" aria-label="Jayesh Aswani — Home">
        <span className="header-new-brand-mark">JA</span>
        <span className="header-new-brand-name">
          Jayesh<span className="header-new-brand-dot">.</span>Aswani
        </span>
      </a>

      <nav className="header-new-nav" aria-label="Primary">
        <ul className="header-new-list">
          {navLinks.map((link) => (
            <li key={link.href} className="header-new-item">
              <a href={link.href} className="header-new-link">
                <span className="header-new-link-text">{link.label}</span>
                <span className="header-new-link-line" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="header-new-divider" aria-hidden="true" />

        <div className="toggle-wrapper header-new-toggle">
          <span className={`toggle-label header-new-toggle-label ${portfolioMode === 0 ? "active" : ""}`}>Classic</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={portfolioMode === 1}
              onChange={togglePortfolioMode}
              aria-label="Toggle between Classic and New portfolio"
            />
            <span className="toggle-slider" />
          </label>
          <span className={`toggle-label header-new-toggle-label ${portfolioMode === 1 ? "active" : ""}`}>New</span>
        </div>
      </nav>
    </header>
  );
}
