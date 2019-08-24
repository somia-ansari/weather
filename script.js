function search() {
    const city = document.querySelector('input').value;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99bf340ab3242744dbfe45645c790301`)
        .then(function(response) {
            // handle success
            console.log(response);
            document.querySelector('h1').innerHTML = `City Name: ${response.data.name}`;
            document.querySelector('p').innerHTML = `Weather: ${response.data.weather[0].main} <br/>
        Description: ${response.data.weather[0].description}`;

        })
        .catch(function(error) {
            // handle error
            document.querySelector('h1').innerHTML = `Error!! Wrong input`;

        })
        .finally(function() {
            // always executed
        });
}
