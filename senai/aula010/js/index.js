const inputCidade = document.querySelector("#city-name");
const info = document.querySelector(".info");

const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

function getTemp() {
  api
    .get(
      `/current.json?key=0caff844f67f4ae4adc115813231004&q=${inputCidade.value}&lang=pt`
    )
    .then((resp) => {
      const city = resp.data.location.name;
      const tempC = resp.data.current.temp_c;
      const feelslikeC = resp.data.current.feelslike_c;
      const descTemp = resp.data.current.condition.text;
      const iconTemp = resp.data.current.condition.icon;

      info.innerHTML = `<p>${city}</p>
      <p>Temperatura(°C): ${tempC}</p>
      <p>Sens.Térmica(°C): ${feelslikeC}</p>
      <p>Descrição: ${descTemp}</p>
      <img src=${iconTemp} />`;
    });

  info.style.visibility = "visible";
}
