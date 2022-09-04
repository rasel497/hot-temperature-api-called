// dont not show your api js file
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY = `0e78555d9f392cf9837b60d1123d1802`;

//load data
const loadTepmerature = (city) => {
    // added city name= city, API key = API_KEY and add &units=metric
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

loadTepmerature('dhaka');