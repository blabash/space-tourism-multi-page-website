import React from "react";
import { Link, Outlet } from "react-router-dom";

type CrewProps = {};

export default function Crew({}: CrewProps) {
  return (
    <div>
      <h2>Crew</h2>
      <Link to={`/crew/victor-glover`}>Victor Glover</Link>
      <Outlet />
    </div>
  );
}
