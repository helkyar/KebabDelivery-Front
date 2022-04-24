import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function startSession(sessionParams, endpoint) {
  return axios
    .post(`${ENDPOINT}/session/${endpoint}`, sessionParams)
    .then((res) => {
      if (!res.data.token) throw new Error("Response is NOT ok");
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
