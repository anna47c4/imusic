import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  return (
    <>
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.category}</p>
          <p>Brand: {career.brandname}</p>
        </Link>
      ))}
    </>
  );
}

//loader function
export const careersLoader = async () => {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products");

  if (!res.ok) {
    throw Error("Could not fetch the careers");
  }

  return res.json();
};
export default Careers;
