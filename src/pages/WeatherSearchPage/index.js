
import React from 'react';

import Header from 'components/Header';
import Search from 'components/Search';
import WeatherCard from 'components/WeatherCard';

import WeatherService from 'services/weatherBuddyApi/endpoints/WeatherService';

import { Container, Body, LoadingContainer, HistoryList, WeatherInfo, ErrorMessage } from './styles';

const WeatherSearchPage = () => {

  const [cityWeather, setCityWeather] = React.useState()
  const [cityWeatherHistory, setCityWeatherHistory] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)


  const handleAction = async (cityName) => {
    console.log('handleAction')
    if (cityWeather?.cityName.toUpperCase() === cityName.toUpperCase()) {
      return;
    }
    setLoading(true)

    await getCityWeatherByName(cityName);
    await getCityWeatherHistory(cityName);

    await setTimeout(() => {
      setLoading(false)
    }, 500);
    
  }

  const getCityWeatherByName = async (cityName) => {
    try {
      const response = await WeatherService.getByCityName(cityName)

      setCityWeather(response.data)

    } catch (e) {
      setError(true)
    }
  }

  const getCityWeatherHistory = async (removeFromResult) => {
    try {
      const response = await WeatherService.getLatestCitiesSearched(5)

      setCityWeatherHistory(response.data.filter(item => item.cityName.toUpperCase() !== removeFromResult.toUpperCase()))

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      { loading ? (
        <LoadingContainer>
          <h3>Loading...</h3>
        </LoadingContainer>
      ) :
        (<>
          <Header />
          <Body hasData={cityWeather || cityWeatherHistory}>
            <Search action={handleAction} beSmall={cityWeather || cityWeatherHistory} />
                <WeatherInfo show={cityWeather || cityWeatherHistory}>
                  {(cityWeather && !error && (<WeatherCard data={cityWeather} />))}
                  {error && <ErrorMessage>Sorry. We couldn't find the specified city</ErrorMessage>}

                  {(cityWeatherHistory && cityWeatherHistory?.length > 0 && (
                  <HistoryList>
                    {cityWeatherHistory.map(item => (
                      <WeatherCard data={item} />
                    ))}
                  </HistoryList>))}
              </WeatherInfo>
          </Body>
        </>)
      }
    </Container>
  );
}

export default WeatherSearchPage;