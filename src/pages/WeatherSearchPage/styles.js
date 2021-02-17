import styled from 'styled-components';

export const Container = styled.div`
  height: 75vh;
`;

export const Body = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s;

  justify-content: ${props => props.hasData && 'flex-start'};
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const WeatherInfo = styled.div`
  display: none;
  height: 100%;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.8s;

  display: ${props => props.show && 'flex'};

`;

export const HistoryList = styled.div`
  background: #fdfdfd;
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  gap: 35px;
`;



export const ErrorMessage = styled.h6`
  color: #f20202;
  font-size: 30px;
  font-weight: 500;
`;
