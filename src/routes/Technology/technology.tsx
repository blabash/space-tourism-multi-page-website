import React from "react";
import { useParams } from "react-router-dom";
import { PATHSType } from "../..";

type Props = {};

export default function Technology({}: Props) {
  const { technologyName } = useParams<PATHSType["technology"]["paramType"]>();
  console.log(technologyName);
  return (
    <main>
      <h3>Technology</h3>
      <p>{JSON.stringify(technologyName, null, 2)}</p>
    </main>
  );
}
