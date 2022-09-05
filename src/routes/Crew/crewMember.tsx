import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../../data";

type CrewMemberProps = {};
type CrewMemberParams = {
  crewMemberName: string;
};

export default function CrewMember({}: CrewMemberProps) {
  const params = useParams<CrewMemberParams>();
  console.log(params);
  return (
    <div>
      <h3>Crew Member</h3>
      <p>{JSON.stringify(params, null, 2)}</p>
    </div>
  );
}
