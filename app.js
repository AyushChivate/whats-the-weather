var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var andUnits = "&units=";
var apiKey = "&appid=87846ec7c9b24097c9951ca770e54585";

var units = "imperial";


// when enter is pressed inside the input field, call getWeather()
document.getElementById("city").onkeypress = function(event) {
  if (event.keyCode == 13 || event.which == 13){
    document.getElementById("main-information").style.visibility = "visible";
    document.getElementById("main-temp-icon").style.visibility = "visible";
    document.getElementById("additional-information-div").style.visibility = "visible";
    document.getElementById("more-info-table").style.visibility = "visible";
    document.getElementById("search-for-location").innerHTML = "";
    getWeather();
  }
};

async function getWeather(clicked_id = null) {
  // if the input box is empty, then alert the user
  if (document.getElementById("city").value.length == 0) {
    // alert("Please enter a city, state, or country.");
  }

  // default unit is Fahrenheit
  // var units = "imperial";

  // changes temperature based on which unit button is clicked
  if (clicked_id == "c-to-f") {
    units = "imperial";
    document.getElementById("c-to-f").style.backgroundColor = "#3d6cb9";
    document.getElementById("f-to-c").style.backgroundColor = "#24b273";
  }
  else if (clicked_id == "f-to-c") {
    units = "metric";
    document.getElementById("c-to-f").style.backgroundColor = "#24b273";
    document.getElementById("f-to-c").style.backgroundColor = "#3d6cb9";
  }

  // get the value typed inside the input field
  var city_location = document.getElementById("city").value;
  // fetches the json file from the url and stores it in data
  var weather_url = api + city_location + andUnits + units + apiKey;
  // gets the json data from the weather_url
  const response = await fetch(weather_url);
  data = await response.json();

  console.log(weather_url);
  console.log(data);

  // change the weather weather icon
  document.getElementById("main-temp-icon").src = "images\\" + data.weather[0].icon + ".png";
  // change the weather description
  document.getElementById("description").textContent = data.weather[0].description;
  // change the location
  document.getElementById("location").textContent = data.name;
  // change the humidity
  document.getElementById("humidity").textContent = data.main.humidity + "%";
  // change the pressure
  // document.getElementById("pressure").textContent = data.main.pressure + " hPa";

  // set the main temperature and unit
  if (units == "imperial") {
    // change the main temperature
    document.getElementById("main-temp").textContent = Math.round(data.main.temp) + "°F";
    // change the feels like temperature
    document.getElementById("feels-like").textContent = "Feels like " + Math.round(data.main.feels_like) + "°F";
    // change the high temperature
    document.getElementById("high").textContent = Math.round(data.main.temp_max) + "°F";
    // change the low temperature
    document.getElementById("low").textContent = Math.round(data.main.temp_min) + "°F";
    // change the wind speed
    document.getElementById("wind_speed").textContent = data.wind.speed + " mph";
  }
  else {
    // change the main temperature
    document.getElementById("main-temp").textContent = Math.round(data.main.temp) + "°C";
    // change the feels like temperature
    document.getElementById("feels-like").textContent = "Feels like " + Math.round(data.main.feels_like) + "°C";
    // change the high temperature
    document.getElementById("high").textContent = Math.round(data.main.temp_max) + "°C";
    // change the low temperature
    document.getElementById("low").textContent = Math.round(data.main.temp_min) + "°C";
    // change the wind speed
    var windspeed = 3.6 * data.wind.speed;
    document.getElementById("wind_speed").textContent = windspeed.toFixed(2) + " km/h";
  }
}

getWeather()
