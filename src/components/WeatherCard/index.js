import React from 'react';
import { Container } from './styles';

const WeatherCard = (props) => {

  const { cityName, weather } = props.data

  return (
    <Container>
      <h4>{ cityName }</h4>
      <h5>{`${weather.temperature.celsius}°C`}</h5>
      <h6>{weather.description}</h6>
      <img src={weather.icon} alt={weather.description} />
    </Container>
  );
}

export default WeatherCard;