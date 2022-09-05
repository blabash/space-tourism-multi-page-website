import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../../data";

type DestinationProps = {};
type InvoiceParams = {
  invoiceId: string;
};
type DestinationParams = {
  destinationName: string;
};

export default function Destination({}: DestinationProps) {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams<DestinationParams>();
  console.log(params);
  // let invoice = getInvoice(Number(invoiceId));
  return (
    <div>
      <h3>Destination</h3>
      <p>{JSON.stringify(params, null, 2)}</p>
    </div>
  );
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
