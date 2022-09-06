import React from "react";
import { Link, Outlet } from "react-router-dom";
import { PATHS } from ".";
import "./App.css";
import { getCrew, getDestinations, getTechnologies } from "./data";

const destinationData = getDestinations();
const crewData = getCrew();
const technologyData = getTechnologies();

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
        <Link to="/">home</Link> |{" "}
        <Link
          to={`/${PATHS.destination.path}/${destinationData["the-moon"].slug}`}
        >
          destination
        </Link>{" "}
        |{" "}
        <Link to={`/${PATHS.crew.path}/${crewData["douglas-hurley"].slug}`}>
          crew
        </Link>{" "}
        |{" "}
        <Link
          to={`/${PATHS.technology.path}/${technologyData["launch-vehicle"].slug}`}
        >
          technology
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
