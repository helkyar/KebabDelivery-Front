import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;

export default function postUser(params, jwt) {
  return axios
    .post(`${ENDPOINT}/users/add`, params, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("USER POST", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
