import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
  font-family: Arial, Helvetica, sans-serif;
  h1 {
    color: #fff;
    font-size: 4em;
    font-weight: 300;
  }

  .stopwatch {
    display: flex;
    align-items: center;
    gap: 2em;

    div {
      text-align: center;
      p {
        color: #fff;
      }
      span {
        color: #fff;
        font-size: 4em;
      }
    }
  }
  button{
    width: 20em;
    height: 3em;
    border: none;
    margin-top: 1em;
    border-radius: 5px;
    cursor: pointer;
  }
`;
