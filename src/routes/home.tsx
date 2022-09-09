import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="home-bg">
        <h2>Home</h2>
      </div>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          eius cum magni odio quam quibusdam asperiores optio? Debitis,
          distinctio. Laudantium odio nesciunt eius explicabo voluptas sequi in
          dolore nisi recusandae!
        </p>
      </main>
    </>
  );
}
