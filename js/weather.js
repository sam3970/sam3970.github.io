const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "b917af57d8339c7f3a00a60b24363d5b";

function onGeoOk(position) {
  //const lat = position.coords.latitude;
  //const lon = position.coords.longitude;
    const lat = "37.553676";
    const lon = "126.947780";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//위치좌표를 줌(정상작동 됐을 때 실행,실패했을 때 실행)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);