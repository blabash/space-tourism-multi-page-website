import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from ".";
import { getCrew, getDestinations, getTechnologies } from "./data";

const destinationData = getDestinations();
const crewData = getCrew();
const technologyData = getTechnologies();

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li>
            <Link className="nav-text" to="/">
              home
            </Link>
          </li>
          <li>
            <Link
              className="nav-text"
              to={`/${PATHS.destination.path}/${destinationData["the-moon"].slug}`}
            >
              destination
            </Link>
          </li>
          <li>
            <Link
              className="nav-text"
              to={`/${PATHS.crew.path}/${crewData["douglas-hurley"].slug}`}
            >
              crew
            </Link>
          </li>
          <li>
            <Link
              className="nav-text"
              to={`/${PATHS.technology.path}/${technologyData["launch-vehicle"].slug}`}
            >
              technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
