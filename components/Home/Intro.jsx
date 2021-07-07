/* eslint-disable jsx-a11y/control-has-associated-label */
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';
import Button from '../Button';

const IntroContainer = styled.div`
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    span {
      color: ${(props) => props.theme.headerText}
    }
  }

  h2, h3 {
    font-size: 1.444rem;
    text-align: center;
  }

  @media only screen and (min-width: 768px and max-width: 991px) {
    h1 {
      font-size: 4rem
    }

    h2, h3 {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-evenly;
    h1 {
      font-size: 5rem;
    }

    h2, h3 {
      font-size: 2.5rem;
    }
  }
  
  .link-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a, a:visited,
  a:focus {
    font: inherit;
    color: inherit;
  }

  a > button {
    font-weight: 600;
  }

  a:nth-of-type(2) {
    margin-left: 1rem;
  }
`;

export default function Intro() {
  return (
    <IntroContainer>
      <h1>
        Hi,
        <br />
        {' '}
        I'm
        <span> Tanzeel</span>
      </h1>
      <h2>A Full Stack Web Developer</h2>
      <h3>Based in Toronto, ON</h3>
      <div className="link-container">
        <a href="/about" className="about-link">
          <Button>
            Learn More
          </Button>
        </a>
        <a className="github-link" href="/"><SiGithub size="3em" /></a>
      </div>
    </IntroContainer>
  );
}
