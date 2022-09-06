import React from "react";
import { Link, Outlet } from "react-router-dom";

type TechnologiesProps = {};

export default function Technologies({}: TechnologiesProps) {
  return (
    <main className="technologies">
      <h2>Technologies</h2>
      <Link to={`/technology/space-capsule`}>Space Capsule</Link>
      <Outlet />
    </main>
  );
}
