import { useState, useContext } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("INFY");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </StockContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
