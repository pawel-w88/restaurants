import { useQuery } from "react-query";
import { useState } from "react";

export const apiData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/yelpData', {
      headers: { Accept: 'application/json' },
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: "Poland",
    latitude: "",
    longitude: "",
    term: "",
    price: "",
    open_now: "",
    sort_by: "best_match",
    limit: 20,
    offset: "",
  });
  return useQuery(["searchParams", searchParams], () => apiData(searchParams));
};

