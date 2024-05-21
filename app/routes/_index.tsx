import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import Cities from "./cities/route";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Explore some cities!</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/cities">Cities</Link>
      </div>
      <Outlet />
    </div>
  );
}
