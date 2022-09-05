import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SPACE TOURISM</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">home</Link> | <Link to="/destination">destination</Link> |{" "}
        <Link to="/crew">crew</Link> | <Link to="/technology">technology</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
