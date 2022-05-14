import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function patchActivateDeliverer(params, id, jwt) {
  return axios
    .patch(`${ENDPOINT}/deliverer/setactive/${id}`, params, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
