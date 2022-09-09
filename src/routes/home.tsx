import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="home-bg"></div>
      <main className="home">
        <h5 className="home__heading-5">So, you want to travel to</h5>
        <h2 className="home__heading-2">Space</h2>
        <p className="home__description">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <button className="home__explore-btn">EXPLORE</button>
      </main>
    </>
  );
}
