let place = document.querySelector('.place');
let temp = document.querySelector('.temp');
let humid = document.querySelector('.humid-11');
let wind = document.querySelector('.wind-11');
let search = document.getElementById("input_text");
let weather_photo = document.getElementById("weather_photo");
let press = document.querySelector("#search");
let disply = document.querySelector(".content")
let error = document.querySelector(".error");

let apikey = "e21a4f9a3d2646aedc2e18fb1288a96f";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const checkWeather = async(text) => {
    const response = await fetch(apiUrl + text + `&appid=${apikey}`);
    let data = await response.json();

    if(response.status == 404){
        error.style.display = "block";
        disply.style.display = "none";
    }else{
        error.style.display = "none";
        temp.innerHTML = Math.round(data.main.temp) + '°c';
        place.innerHTML = data.name;
        humid.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
            weather_photo.src = "images/clouds.png";

        else if(data.weather[0].main == "Clear")
            weather_photo.src = "images/clear.png";

        else if(data.weather[0].main == "Cist")
            weather_photo.src = "images/mist.png";

        else if(data.weather[0].main == "Rain")
            weather_photo.src = "images/rain.png";

        else if(data.weather[0].main == "Snow")
            weather_photo.src = "images/snow.png";
    
        else if(data.weather[0].main == "Drizzle")
            weather_photo.src = "images/drizzle.png";

        disply.style.display = "block";
    }
}

press.addEventListener('click', () => {
    let text = search.value;
    checkWeather(text);
})
