import styled from 'styled-components';
import { useState } from 'react';

import { Typewriter } from 'react-typewriting-effect';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid #08D9D6;

  & .typewriter {
    text-align: center;
    font-size: 0.95em;

    @media only screen and (min-width: 190px) and (max-width: 449px) {
      font-size: 1em;
    }

    @media only screen and (min-width: 450px) and (max-width: 677px) {
      font-size: 1.9em;
    }

    @media only screen and (min-width: 678px) and (max-width: 901px) {
      font-size: 2.4em;
    }

    @media only screen and (min-width: 902px) {
      text-align: left;
      font-size: 1.8em;
    }
  }
`;
export default function Intro() {
  // prevent second line from rendering simultaneously with first
  const [displaySecondLine, setDisplaySecondLine] = useState(false);
  return (
    <IntroContainer>
      <Typewriter
        className="typewriter"
        string="Hello World"
        delay={100}
        cursor="_"
        onComplete={() => setDisplaySecondLine(true)}
        stopBlinkinOnComplete
      />
      <br />
      {displaySecondLine && (
      <Typewriter
        className="typewriter"
        string="I am Tanzeel"
        delay={100}
        cursor="_"
        stopBlinkinOnComplete
      />
      )}
    </IntroContainer>
  );
}
