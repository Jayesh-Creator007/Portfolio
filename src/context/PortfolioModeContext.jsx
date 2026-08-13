import { createContext, useContext, useState } from "react";

const PortfolioModeContext = createContext();

export function PortfolioModeProvider({ children }) {
  const [portfolioMode, setPortfolioMode] = useState(0);

  const togglePortfolioMode = () => {
    setPortfolioMode((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <PortfolioModeContext.Provider
      value={{ portfolioMode, setPortfolioMode, togglePortfolioMode }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolioMode must be used within a PortfolioModeProvider"
    );
  }
  return context;
}

export default PortfolioModeContext;
