import logo from "./logo.svg";
import "./App.css";
import "../src/constants/mock";
import {
  mockCompanyDetails,
  mockHistoricalData,
  mockSearchResults,
} from "../src/constants/mock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SIPTRACKER</p>
      </header>
    </div>
  );
}

export default App;
