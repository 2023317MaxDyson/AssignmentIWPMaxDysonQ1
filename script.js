
/** 
 * @name: Assignment 2 Q1: Get the Weather Using an API
 * @Course Code: SODV1201
 * @class: Software Development Diploma program. 
 * @author: Max Dyson
 * 
*/

// URL for the Weather API

const WeatherAppURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.048615&lon=-114.070847&appid=e9693214cbd9da2b5699284485fd3cfc&units=metric";

$(document).ready(function(){

// Using a GET HTTP request to get the JSON data

$.getJSON(WeatherAppURL, (getWeatherAppURL) => {

    // Using a for loop to get all the data from the API of the WeatherAppURL 


// Gets the cuurent temperature 
    let currentTemperature = getWeatherAppURL.list[0].main.temp;

//
  let Calgary = getWeatherAppURL.city.name;

   let weatherDescription = getWeatherAppURL.list[0].weather[0].description;
 

        // Only want to display the current weather information (temperature and description)  for Calgary 

        
        // Adding html templates to the getAPI class 

        // &#8451 to create ℃

    $(".getAPI").append(`<div class="background"> </br> </br> <h2 "> ${Calgary} </h2> </br> </br> <p style = "color: yellow";> Current Temperature: ${currentTemperature} &#8451 </br></br> Weather Description: ${weatherDescription} </p>  </div>`);


});
});
