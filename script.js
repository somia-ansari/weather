function search() {
    const city = document.querySelector('input').value;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99bf340ab3242744dbfe45645c790301`)
        .then(function(response) {
            // handle success
            console.log(response);

            document.querySelector('#weather h1').innerHTML = `City Name: ${response.data.name}`;
            document.querySelector('#weather-status').innerHTML = `Weather: ${response.data.weather[0].main}`;
            document.querySelector('#weather-desc').innerHTML = `Description: ${response.data.weather[0].description}`;
            document.querySelector('#temperature').innerHTML = `Temperature in Celsius: ${Math.floor(response.data.main.temp-273.15)}deg C`;
            document.querySelector('#wind-speed').innerHTML = `Wind Speed: ${response.data.wind.speed} min/sec`;

            document.querySelector('#time').innerHTML = `Time: ${new Date(response.data.dt * 1000).getHours()}:${new Date(response.data.dt * 1000).getMinutes()}:${new Date(response.data.dt * 1000).getSeconds()}`;
            document.querySelector('#date').innerHTML = `Date: ${new Date(response.data.dt * 1000).getDate()} of ${new Date(response.data.dt * 1000).getMonth()}th ${new Date(response.data.dt * 1000).getFullYear()}`;




        })
        .catch(function(error) {
            // handle error
            document.querySelector('#weather h1').innerHTML = `Error!! Wrong input`;
            document.querySelector('#weather-status').innerHTML = "";


        })
        .finally(function() {
            // always executed
        });
}