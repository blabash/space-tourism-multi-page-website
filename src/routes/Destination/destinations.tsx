import React from "react";
import {
  Link,
  NavLink,
  NavLinkProps,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getInvoices } from "../../data";

function QueryNavLink({ to, ...props }: NavLinkProps) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

type DestinationProps = {};

export default function Destinations({}: DestinationProps) {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="destinations-bg">
        {/* <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            ))}
        </nav> */}
      </div>
      <Outlet />
    </>
  );
}
