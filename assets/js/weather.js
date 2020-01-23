function getTemperature(cityName) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial`,
        type: 'GET',
        dataType: 'JSON',
        data: {
            appid: 'ed71690cc8140b9596d75e6f7e359f75'
        }
    })
        .done((data) => {
            // Remove Placeholder
            const placeholder = document.getElementById("weather-placeholder");
            if (placeholder) {
                placeholder.remove();
            }

            // Set the City Name
            const cityTag = document.getElementById("cityName");
            cityTag.innerHTML = cityName;
            // Set the Temperature
            const tempTag = document.getElementById("temperature");
            tempTag.innerHTML = data.main.temp + ' &deg F';

            //Show Weather Card
            const weatherCard = document.getElementById("weather");
            weatherCard.classList.add('show');
        })
        .fail((error) => {
            console.error('error', error);
        });
}
