import React, { useEffect } from 'react';

import { Container } from './styles';

const Search = (props) => {

  const { action, beSmall } = props

  useEffect(() => {

    const resizeInput = (input) => {
      input.style.width = input.value.length + "ch";
    }

    const input = document.getElementById('city-weather-search');
    // console.log(input)
    input.addEventListener('input', (e) => {
      const { target } = e;
      target.style.width = target.value.length + 0.4 + "ch";
    }, false);

    return () => {
      input.removeEventListener('input', resizeInput, false)
    }

  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      action && action(e.target.value)
    }
  }

  const handleBlur = (e) => {
    action && action(e.target.value)
  }

  return (
  <Container small={beSmall}>
    <h3>How is the weather in
      <input
        id="city-weather-search"
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        type="text"
        {...props}
      ></input> now?</h3>
  </Container>);
}

export default Search;