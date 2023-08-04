import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "../src/constants/mock";
import {
  mockCompanyDetails,
  mockHistoricalData,
  mockSearchResults,
} from "../src/constants/mock";
import Dashboard from "./components/Dashboard";

function App() {
  return <Dashboard />;
}

export default App;
