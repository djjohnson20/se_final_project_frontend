import { newsApiBaseUrl } from "./constants";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const getNewsItems = ({ q, from, to, pageSize }) => {
  const apiKey =
    import.meta.env.VITE_API_KEY || "32278f01a38743c3918eae697c9cfb62";

  return fetch(
    `${newsApiBaseUrl}?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`
  ).then(checkRes);
};

export default getNewsItems;
