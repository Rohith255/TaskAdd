import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  const [active, setActive] = useState(true);
  function toggleActiveState() {
    setActive(!active);
  }

  return (
    <div className="App">
      <Navbar toggleActiveState={toggleActiveState} />
      <Hero active={active} />
    </div>
  );
}
export default App;
