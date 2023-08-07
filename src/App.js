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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Dashboard />;
    </ThemeContext.Provider>
  );
}

export default App;
