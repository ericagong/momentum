
const API_KEY = 'fe3933f6d2b20dc2b55b954c206a956c';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    // Using openweatherapi's Current Weather api 
    // https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}$units={UNITS}
    // You should PUT your own API key for checking weather.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        const weatherDescription = data.weather[0].main;
        const temperature = data.main.temp;
        const location = data.name;
        
        
        weather.innerText = `${weatherDescription} | ${temperature}`;
        city.innerText = location;
    });

}

function onGeoError() {
    alert("Unable to display weather information since your location information is not available.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); // Browser gives geolocation of user.