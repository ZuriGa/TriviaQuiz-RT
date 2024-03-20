import styled, { createGlobalStyle } from 'styled-components'; 
import BGImage from './Images/background.png';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Trocchi', sans-serif;

}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #fff;
}

.score {
  color: #fff;
  font-size: 2rem;
  margin: 0;
}

h1 {
  font-family: 'Rethink', Sans-ital; 
  background-image: linear-gradient(180deg, #fff, #e17a8c, #d85f9a, #b8428d, #c83b52);
  font-weight: 600;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-background-clip: transparent;
  filter: drop-shadow(2px 2px #0085a3);
  font-size: 70px;
  text-align: center;
  margin: 20px;
}

.start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #e17a8c, #d85f9a, #b8428d, #c83b52);
  border: 2px solid #d85f9a;
  box-shadow: 0px, 5px, 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40;
  font-size: 1rem;
  color: #fff;
}

.start {
  max-width: 200px;
}


`;
