import React from 'react';

import { Container } from './styles';

const WeatherCard = (props) => {

  const { cityName, temperature, description } = props

  return (
    <Container>
      <h4>{ cityName }</h4>
      <h5>{`${temperature}°C`}</h5>
      <h6>{description}</h6>
    </Container>
  );
}

export default WeatherCard;