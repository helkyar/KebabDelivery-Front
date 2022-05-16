import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function patchOrder(params, id, jwt) {
  return axios
    .patch(`${ENDPOINT}/orders/update/${id}`, params, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("TEMPLATE PATCH", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
