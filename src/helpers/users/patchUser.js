import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function patchUser(params, id, jwt) {
  console.log(params, id, jwt, "LOS PARAMS");
  return axios
    .patch(`${ENDPOINT}/users/update/${id}`, params, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("USER PATCH", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
