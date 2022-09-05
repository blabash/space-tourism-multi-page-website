import React from "react";
import { useParams } from "react-router-dom";

type Props = {};
type TechnologyParams = { technologyName: string };

export default function Technology({}: Props) {
  const params = useParams<TechnologyParams>();
  console.log(params);
  return (
    <div>
      <h3>Technology</h3>
      <p>{JSON.stringify(params, null, 2)}</p>
    </div>
  );
}
