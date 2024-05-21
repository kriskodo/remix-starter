import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { addCity, getCities } from "~/db";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    redirect("/login");
    return;
  }
  const cities = await getCities();
  return cities;
};

export default function Cities() {
  const data = useLoaderData<ReturnType<typeof loader>>();
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/cities";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>All cities</h1>
      <p>Here you can find information about cities</p>
      <Form method="post">
        <input type="text" name="city" />
        {isSubmitting ? "Loading" : <button type="submit">Add city</button>}
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
        {data.map((city, idx) => (
          <Link
            key={`${city}${idx}`}
            to={`/cities/${city}`}
            style={{ color: "#222", textDecoration: "none" }}
          >
            {city}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const city = body.get("city");
  if (!city) return { ok: false };
  await addCity(city.toString());
  return { ok: true };
}
