import { useState, useContext } from "react";
import "./App.css";
import "../src/constants/mock";
import {
  mockCompanyDetails,
  mockHistoricalData,
  mockSearchResults,
} from "../src/constants/mock";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("INFY");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />;
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
