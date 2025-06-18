let API_KEY = '26266aa45569a6ef99268e85c776cd87';
let input = document.getElementById("searchinput");
let showDiv = document.getElementById("showData");

let searchData = async () => {
  try {
    let city = input.value.trim();
    if (!city) {
      showDiv.innerHTML = "<p style='color:red;'>Please enter a city name.</p>";
      return;
    }

    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(API_URL);
    let data = await response.json();

    console.log("Weather API Response:", data);

    showWeatherData(data);
  } catch (error) {
    console.error("Fetch error:", error);
    showDiv.innerHTML = `<p style='color:red;'>City not found or error fetching data.</p>`;
  }
};

let showWeatherData = (data) => {
  if (data.cod !== 200) {
    showDiv.innerHTML = `<p style='color:red;'>${data.message}</p>`;
    return;
  }

  showDiv.innerHTML = `
    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
      <h3>${data.name}, ${data.sys.country}</h3>
      <h3>${data.main.temp}°C</h3>
      <h3>${data.weather[0].main}</h3>
    </div>
  `;
};
