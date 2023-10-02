
function getWeather() {
    const apiKey = '2a1700c6afff6d1697e718282947e338'; // Replace this with your API key
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const cityName = document.getElementById('city-name');
        cityName.innerText='';
        cityName.innerHTML=`<h2>${data.name}<h2>`;
        
        const currentTime = new Date();
        const reqTime=currentTime.toString().slice(0,25);
        console.log(reqTime);        

        const realTime = document.getElementById('curr-time');
        realTime.innerText='';
        realTime.innerHTML=`<h2>${reqTime}<h2>`;

        // document.getElementById('curr-time').innerHTML=`<h2>${reqTime}<h2>`;

        const tempP = document.getElementById('temp');
        tempP.innerText='';
        tempP.innerHTML=`${Math.round(data.main.temp)}°C`;

        document.getElementById('max').innerHTML=`<h2>${Math.round(data.main.temp_max)}° /<h2>`;
        document.getElementById('min').innerHTML=`<h2>${Math.round(data.main.temp_min)}°<h2>`;

        const weather = document.getElementById('weather');
        weather.innerText='';
        weather.innerHTML=`<h2>${data.weather[0].description}<h2>`;
        // const weatherInfo = document.getElementById('weather-info');
        // weatherInfo.innerHTML = `
        //   <h2>${data.name}</h2>
        //   <p>Temperature: ${data.main.temp}°C</p>
        //   <h1>Temperature Feel: ${data.main.feels_like}°C</h1>
        //   <p>Weather: ${data.weather[0].main}</p>
        // `;
        
        document.getElementById('wind').innerHTML=`<h2>${Math.round(data.wind.speed)}k/h<h2>`;
        document.getElementById('humidity').innerHTML=`<h2>${Math.round(data.main.humidity)}%<h2>`;
        document.getElementById('cloud').innerHTML=`<h2>${Math.round(data.clouds.all)}%<h2>`;

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
      });
  }