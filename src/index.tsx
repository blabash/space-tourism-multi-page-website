import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Crew from "./routes/Crew/crew";
import Technologies from "./routes/Technology/technologies";
import Destinations from "./routes/Destination/destinations";
import Destination from "./routes/Destination/destination";
import Technology from "./routes/Technology/technology";
import CrewMember from "./routes/Crew/crewMember";
import Home from "./routes/home";

export const PATHS = {
  destination: {
    path: "destination",
    param: ":destinationName",
    paramType: { destinationName: ":destinationName" },
  },
  crew: {
    path: "crew",
    param: ":crewMemberName",
    paramType: { crewMemberName: ":crewMemberName" },
  },
  technology: {
    path: "technology",
    param: ":technologyName",
    paramType: { technologyName: ":technologyName" },
  },
};

export type PATHSType = typeof PATHS;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path={PATHS.destination.path} element={<Destinations />}>
            <Route path={PATHS.destination.param} element={<Destination />} />
          </Route>
          <Route path={PATHS.crew.path} element={<Crew />}>
            <Route path={PATHS.crew.param} element={<CrewMember />} />
          </Route>
          <Route path={PATHS.technology.path} element={<Technologies />}>
            {/* <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            /> */}
            <Route path={PATHS.technology.param} element={<Technology />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
