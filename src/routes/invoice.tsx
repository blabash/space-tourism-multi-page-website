import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

type Props = {};
type InvoiceParams = {
  invoiceId: string;
};

export default function Invoice({}: Props) {
  let navigate = useNavigate();
  let location = useLocation();
  let { invoiceId } = useParams<InvoiceParams>();
  let invoice = getInvoice(Number(invoiceId));
  if (invoice) {
    return (
      <main style={{ padding: "1em" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
          <button
            onClick={() => {
              invoice && deleteInvoice(invoice.number);
              navigate("/invoices" + location.search);
            }}
          >
            Delete
          </button>
        </p>
      </main>
    );
  } else return <></>;
}
