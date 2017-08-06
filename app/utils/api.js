import axios from 'axios'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily'
const API_KEY = '466066da73d395cb3223e349115651f6'
const options = {
  weekday: "long",
  month: "short",
  day: "numeric"
}

function buildParamsFromCity(city) {
  return {APPID: API_KEY, q: city, type: 'accurate', cnt: 5}
}

function kelToCelDegree(d) {
  return (d - 273.15).toFixed()
}

function formatDate(sec) {
  const date = new Date(sec * 1000);
  return date.toLocaleDateString('en-US', options);
}

function formatDataForWeather(data) {
  return {
    date: formatDate(data.dt),
    minTemp: kelToCelDegree(data.temp.min),
    maxTemp: kelToCelDegree(data.temp.max),
    humidity: data.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon
  }
}

const Api = {
  getWeatherForCity: function (city) {
    return axios
      .get(BASE_URL, {params: buildParamsFromCity(city)})
      .then(({data}) => {
        return {
          city: data.city.name,
          weathers: data
            .list
            .map(formatDataForWeather)
        }
      })
      .catch(e => {
        console.error(e)
        return null
      })
  }
}

export default Api