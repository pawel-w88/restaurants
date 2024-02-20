import { useQuery } from "react-query";
import { useState } from "react";
import { YELP_API_KEY } from "./config";

export const apiData = async () => {
  try {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Poland&sort_bybest_match&limit=20&categories=restaurants&open_now=true&price=1,2,3,4&term=food",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Access-Control-allow-Orgin": "*",
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useSearchParams = () => {
  const searchParams = useState({
    categories: "restaurants",
    location: "Poland",
    latitude: "",
    longitude: "",
    term: "",
    price: "",
    open_now: "",
    sort_by: "best_match",
    limit: 20,
    offset: "",
  })[0];
  return useQuery(["searchParams", searchParams], () => apiData(searchParams));
};
