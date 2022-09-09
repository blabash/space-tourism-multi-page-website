import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
