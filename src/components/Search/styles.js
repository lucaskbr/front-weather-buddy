import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 35px;
    font-weight: 400;

    font-size: ${props => props.small && '25px'};

    input {
      width: 1.4ch;
      font-size: 35px;
      outline: none;
      border: 0px;
      margin: 0 2px;
      border-bottom: solid 1px;

      &:focus {
        outline: none;
      }

      font-size: ${props => props.small && '25px'};

    }
  }
`;
