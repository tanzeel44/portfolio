import styled from 'styled-components';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 1.5em;
    font-size: 0.6em;
    text-align: center;
    width: 100%
  }

  h1 {
    margin-top: 60px;
    font-size: 0.777em;
  }

  @media only screen and (min-width: 375px) and (max-width: 539px) {
    h1 {
      font-size: 0.888em;
    }
    font-size: 1.2em;
  }

  @media only screen and (min-width: 540px) and (max-width: 767px) {
    h1 {
      margin-top: 144px;
      font-size: 1em;
    }
    font-size: 1.333em;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    h1 {
      margin-top: 144px;
      font-size: 1.5em;
    }
    font-size: 1.7em;
  }

  @media only screen and (min-width: 992px) {
    h1 {
      margin-top: 3em;
      font-size: 1.0em;
    }
    font-size: 2em;
  }
`;

export default function Intro() {
  return (
    <IntroContainer>
      <h1>Hi, I'm Tanzeel</h1>
      <h2>A Web Application Developer</h2>
      <p>Based in Toronto, Canada</p>
    </IntroContainer>
  );
}
