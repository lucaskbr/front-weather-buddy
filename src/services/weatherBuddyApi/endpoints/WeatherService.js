const { default: weatherBuddyApi } = require("..")

const WeatherService = {
  getByCityName: (cityName) => 
    weatherBuddyApi({
      method: 'GET',
      url: `weather/${cityName}`
    })
  ,
  getLatestCitiesSearched: (max) => 
    weatherBuddyApi({
      method: 'GET',
      url: 'weather',
      params: {
        max
      }
    })
  
}

export default WeatherService