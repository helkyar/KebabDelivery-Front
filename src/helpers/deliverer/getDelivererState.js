import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function getDelivererState(id, jwt) {
  return axios
    .get(`${ENDPOINT}/deliverer/state/${id}`, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      return res.data;
    })
    .catch(() => {
      if (!id) return;
      console.log("ERR: 500");
    });
}
