import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
