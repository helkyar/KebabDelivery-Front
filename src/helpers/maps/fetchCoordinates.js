import axios from "axios";
const KEY = `${process.env.REACT_APP_MAPS_KEY}`;

export default function fetchCoordinates(params, jwt) {
  return axios
    .post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${KEY}`)
    .then((res) => res.data)
    .catch(() => {
      console.log("ERR: 500");
    });
}
