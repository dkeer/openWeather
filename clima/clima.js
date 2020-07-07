const axios = require("axios");
const getClima = async (lat, lng) => {
  let resp = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9606fa8bab90ed9ba1638241c0f4b250`
  );
  return {
    temp: resp.data.main.temp
  };
};
module.exports = {
  getClima
};
