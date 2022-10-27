let weatherData;
const city = document.getElementById('search');
const citySubmit = document.getElementById('city-submit');

city.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    event.preventDefault();
    citySubmit.click();
  }
});

async function getWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=150614b3ad55d17899c929e2ffd1e3f4`,
    { mode: 'cors' }
  );
  weatherData = await response.json();
  let celcius = celciusConversion(weatherData.main.temp);
  let fahrenheit = fahrenheitConversion(weatherData.main.temp);
  console.log(weatherData);
  console.log(`City: ${weatherData.name}`);
  console.log(`Fahrenheit: ${fahrenheit}`);
  console.log(`Celcius: ${celcius}`);
  console.log(weatherData.timezone);
  return weatherData;
}

function celciusConversion(temp) {
  let celcius = temp - 273.15;

  celcius = Math.ceil(celcius);

  return celcius;
}

function fahrenheitConversion(temp) {
  let fahrenheit = (temp - 273) * 1.8 + 32;
  fahrenheit = Math.floor(fahrenheit);
  return fahrenheit;
}

let today = new Date();
let date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

function getTime() {
  //   console.log(today);
  //   //console.log(date);
  //   console.log(time);
  //   console.log(utc);

  //let timeZone = weatherData.timezone;

  var d = new Date(new Date().getTime() + weatherData.timezone * 1000);
  let x = d.toISOString();
  let y = x.split('T');
  let dateString = y[0];
  let timeString = y[1];
  let time = y[1].split(':');
  let hours = time[0];
  let min = time[1];
  console.log(today);
  console.log(weatherData.timezone);
  console.log(d);
  console.log(y);
  console.log(dateString);
  console.log(timeString);
  console.log(time);
  console.log(hours);
  console.log(min);
}
