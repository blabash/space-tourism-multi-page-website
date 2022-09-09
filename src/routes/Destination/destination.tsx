import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PATHSType } from "../..";
import { getInvoice, deleteInvoice } from "../../data";

type DestinationProps = {};
type InvoiceParams = {
  invoiceId: string;
};

export default function Destination({}: DestinationProps) {
  let navigate = useNavigate();
  let location = useLocation();
  let { destinationName } = useParams<PATHSType["destination"]["paramType"]>();
  // let invoice = getInvoice(Number(invoiceId));
  return (
    <main className="destination">
      <h5>
        <span style={{ opacity: 0.4 }}>01</span> Pick your destination
      </h5>
      <img
        src="/assets/destination/image-moon.png"
        alt="da moon"
        className="destination__img"
      />
      <nav className="destination__nav">
        <ul>
          <li>
            <a href="" className="nav-text">
              Moon
            </a>
          </li>
          <li>
            <a href="" className="nav-text">
              Mars
            </a>
          </li>
          <li>
            <a href="" className="nav-text">
              Europa
            </a>
          </li>
          <li>
            <a href="" className="nav-text">
              Titan
            </a>
          </li>
        </ul>
      </nav>
      <h3>Moon</h3>
      <p>
        See our planet as you've never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you're
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div className="hairline"></div>
      <h5>Avg. Distance</h5>
      <h4>384400 KM</h4>
      <h5>Est. Travel Time</h5>
      <h4>3 Days</h4>
    </main>
  );

  // <div className="home-bg"></div>
  //     <main className="home">
  //       <h5 className="home__heading-5">So, you want to travel to</h5>
  //       <h2 className="home__heading-2">Space</h2>
  //       <p className="home__description">
  //         Let's face it; if you want to go to space, you might as well genuinely
  //         go to outer space and not hover kind of on the edge of it. Well sit
  //         back, and relax because we'll give you a truly out of this world
  //         experience!
  //       </p>
  //       <button className="home__explore-btn">EXPLORE</button>
  //     </main>
  //   <></>

  // if (invoice) {
  //   return (
  //     <main style={{ padding: "1em" }}>
  //       <h2>Destination</h2>
  //       <h2>Total Due: {invoice.amount}</h2>
  //       <p>
  //         {invoice.name}: {invoice.number}
  //       </p>
  //       <p>Due Date: {invoice.due}</p>
  //       <p>
  //         <button
  //           onClick={() => {
  //             invoice && deleteInvoice(invoice.number);
  //             navigate("/invoices" + location.search);
  //           }}
  //         >
  //           Delete
  //         </button>
  //       </p>
  //     </main>
  //   );
  // } else return <></>;
}
