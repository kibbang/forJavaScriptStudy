// weather Infomation //

const weather = document.querySelector(".js-weather");
const API_KEY = "c3e07f4b3efa5098b146efe035bd38eb"; // API = Application Programming Interface
const COORDS = "coords";

function getWeather(lat, long){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(jason){
    const temperature = Math.floor(jason.main.temp);
    const place = jason.name;
    weather.innerText = `${temperature}°c in ${place}`;
  })
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(longitude, longitude);
}

function handleGeoError(){
  console.log("Fail to access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();

function checkSupGps(){
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }
}

checkSupGps();
