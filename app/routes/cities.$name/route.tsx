import { useParams } from "@remix-run/react";

export default function CityByName() {
  const params = useParams();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>City name: {params.name}</h1>
      <p>Here you can find information about the city {params.name}</p>
    </div>
  );
}
