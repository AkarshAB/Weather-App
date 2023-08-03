function searchWeather(){
  search = searchBox.value;
  


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)

  .then(res => res.json())
  .then(data => weatherData(data))
  .catch(error => alert('Cannot fetch weather data'))
  
}

function weatherData(data){

  

  weatherMain = data.weather[0].main;
  weatherDesc = data.weather[0].description;
  temp = data.main.temp;
  tempFeelsLike = data.main.feels_like;
  name = data.name;
  image = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`

  countryData = data.sys.country;
  pressureData = data.main.pressure;
  humidityData = data.main.humidity;
  windData = data.wind.speed;

  htmlData5 = `${temp}&deg;C`
  temperature.innerHTML = htmlData5;

  htmlData6 = `Feels like ${tempFeelsLike}`
  feelsLike.innerHTML = htmlData6;

  htmlData7 = `${name}`
  locationName.innerHTML = htmlData7;

  htmlData8 = `${weatherMain}`
  weatherType.innerHTML = htmlData8;

  htmlData9 = `${weatherDesc}`
  weatherDescription.innerHTML = htmlData9;

  htmlData1 = `${countryData}`
  country.innerHTML = htmlData1;

  htmlData2 = `${humidityData}%`
  humidity.innerHTML = htmlData2;

  htmlData3 = `${windData} mps`
  wind.innerHTML = htmlData3;

  htmlData4 = `${pressureData} Pa`
  pressure.innerHTML = htmlData4;

  htmlData10 = image
  weatherDetailsImg.innerHTML = htmlData10;


}
