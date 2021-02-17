import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  min-width: 140px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.19);
  border: 1px solid transparent;
  border-radius: 4px;


  h4 {
    font-weight: 400;
    font-size: 18px;
  }

  h5 {
    font-weight: 600;
    font-size: 30px;
  }

  h6 {
    font-weight: 400;
    font-size: 16px;
  }

  img {
    width: 40px;
    position: absolute;
    right: -15px;
    top: -25px;
    background: #37373766;
    border: 1px solid transparent;
    border-radius: 4px;
  }

`;
