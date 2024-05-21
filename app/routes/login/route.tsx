// app/routes/login.tsx
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/cities",
  });
}

export default function Screen() {
  return (
    <Form
      method="post"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <button>Sign In</button>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/cities",
    failureRedirect: "/login",
  });
}
