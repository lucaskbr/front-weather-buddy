import React, { useEffect } from 'react';

import { Container } from './styles';

const Search = () => {

  

  useEffect(() => {

    const resizeInput = (input) => {
      console.log()
      input.style.width = input.value.length + "ch";
    }

    const input = document.getElementById('city-weather-search');
    // console.log(input)
    input.addEventListener('input', (e) => {
      const { target } = e;
      target.style.width = target.value.length + "ch";
    }, false); // bind the "resizeInput" callback on "input" event
    // resizeInput.call(input); // immediately call the function
  

    return () => {
      input.removeEventListener('input', resizeInput, false)
    }

  }, []);

 



  return (
  <Container>
    <h3>How is the weather in <input id="city-weather-search" type="text"></input> now?</h3>
  </Container>);
}

export default Search;