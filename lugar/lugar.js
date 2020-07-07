const axios = require("axios");
const getLugarLatLng = async direccion => {
  const encodeURL = encodeURI(direccion);
  const baseURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyClNkx8SAWyByM0aJLd3p7weeE24eZuBf0`;
  /*CON HEADERS*/
  /*const instance = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyClNkx8SAWyByM0aJLd3p7weeE24eZuBf0`
  });*/
  //instance
  let resp = await axios.get(baseURL);
  if (resp.data.status === "ZERO_RESULTS") {
    throw new Error(`NO HAY RESULTADOS PARA LA CIUDAD ${direccion}`);
  }
  let location = resp.data.results[0];
  let coors = location.geometry.location;
  return {
    direccion: location.formatted_address,
    lat: coors.lat,
    lng: coors.lng
  };
};
module.exports = {
  getLugarLatLng
};
