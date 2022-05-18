import axios from "axios";
const KEY = `${process.env.REACT_APP_MAPS_KEY}`;

export default function fetchCoordinates(jwt) {
  return axios
    .post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${KEY}`, {
      headers: {
        authorization: jwt,
      },
    })
    .then((res) => res.data)
    .catch(() => {
      console.log("ERR: 500");
    });
}
