const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const InputSearch = document.querySelector(".search-input");
const ButtonSearch = document.querySelector(".button-search");
const WeatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else {
        var data = await response.json();
        document.querySelector(".error").style.display = "none"

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    
        if(data.weather[0].main == "Clouds") {
            WeatherIcon.src = "./assets/clouds.png"
        }
        if(data.weather[0].main == "Clear") {
            WeatherIcon.src = "./assets/clear.png"
        }
        if(data.weather[0].main == "Snow") {
            WeatherIcon.src = "./assets/snow.png"
        }
        if(data.weather[0].main == "Rain") {
            WeatherIcon.src = "./assets/rain.png"
        }
        if(data.weather[0].main == "mist") {
            WeatherIcon.src = "./assets/Mist.png"
        }
        if(data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "./assets/drizzle.png"
        }
    
        document.querySelector(".weather").style.display = "block"
    }
}

ButtonSearch.addEventListener("click", ()=>{
    checkWeather(InputSearch.value);
})
