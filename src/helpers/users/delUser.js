import axios from "axios";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
export default function delUser(id, jwt) {
  return axios
    .delete(`${ENDPOINT}/users/delete/${id}`, {
      headers: {
        "auth-token": jwt,
      },
    })
    .then((res) => {
      if (!res.data) throw new Error("Response is NOT ok");
      console.log("USER DEL", res.data);
      return res.data;
    })
    .catch(() => {
      console.log("ERR: 500");
    });
}
