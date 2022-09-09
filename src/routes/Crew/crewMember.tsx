import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PATHSType } from "../..";
import { getInvoice, deleteInvoice } from "../../data";

type CrewMemberProps = {};

export default function CrewMember({}: CrewMemberProps) {
  const { crewMemberName } = useParams<PATHSType["crew"]["paramType"]>();
  console.log(crewMemberName);
  return (
    <main>
      <h3>Crew Member</h3>
      <p>{JSON.stringify(crewMemberName, null, 2)}</p>
    </main>
  );
}
