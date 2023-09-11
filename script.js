const button = document.getElementById('getWeatherButton');
const inputUbi = document.getElementById ('locationInput');
const temperatura = document.getElementById ('temperature');
const descripcion = document.getElementById ('description');
const humedad = document.getElementById ('humidity');
const viento = document.getElementById ('windSpeed');

function Pasaje_Kelvin_Celcius(temp) {
    /* K − 273.15 =  °C */
    let tempCelcius = (temp - 273.15);
    return (tempCelcius + "°C");
}

button.addEventListener('click', function()
{
    const ubicacion = inputUbi.value;
    let URLFetch = "https://api.openweathermap.org/data/2.5/weather?q={ubicacion},&appid=68173e9e371142fa668996603e3fc023";
    if(ubicacion){
        fetch(URLFetch)
            .then (function(response) {
                return response.json();
            })
            .then (function (data) {
                mostrar(data)
                humedad.textContent = `${main.humidity}`;
            })
            .catch (function (error) {
                return console.error("Ha ocurrido el siguiente error: ",error)
            });
        }
})

function mostrar(data){
    
}


/*
en celcius:
https://api.openweathermap.org/data/2.5/weather?q=Londres,&units=metric&appid=68173e9e371142fa668996603e3fc023 

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
*/