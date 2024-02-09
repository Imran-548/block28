import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="red">Red</Link>
          <Link to="blue">Blue</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
