import { newsApiBaseUrl } from "./constants";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const getNewsItems = ({ q, from, to, pageSize }) => {
  return fetch(
    `${newsApiBaseUrl}?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
  ).then(checkRes);
};

export default { getNewsItems };
