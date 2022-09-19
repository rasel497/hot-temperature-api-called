// dont not show your api js file
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY = `0e78555d9f392cf9837b60d1123d1802`;

//load data
const loadTemperature = city => {
    // added city name= city, API key = API_KEY and add &units=metric
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data.data));
}

//
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}

// set cloud inner
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    //set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})

loadTemperature('dhaka');