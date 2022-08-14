import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

type Props = {};
type InvoiceParams = {
  invoiceId: string;
};

export default function Invoice({}: Props) {
  let { invoiceId } = useParams<InvoiceParams>();
  let invoice = getInvoice(Number(invoiceId));
  return (
    <main style={{ padding: "1em" }}>
      <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
    </main>
  );
}
