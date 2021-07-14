import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutMe from './AboutMe';
import TechStack from './TechStack';

const DisplayContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  font-family: ${(props) => props.theme.fonts.main};

  .desktop {
    display: none;
  }
  
  .mobile {
    display: block;
    height: 100%;
  }

  .menu {
    height: 12%;
    display: flex;

    button {
      flex: 1; 
      border: none;
      font-family: inherit;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 992px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      height: 100%;
      width: 100%;
    }
  }

`;

export default function Display() {
  // only for mobile. both will be displayed on desktop
  const [nowShowing, setNowShowing] = useState('about');

  return (
    <DisplayContainer>
      <div className="mobile">
        <div className="menu">
          <button onClick={() => setNowShowing('about')} type="button">About</button>
          <button onClick={() => setNowShowing('tech')} type="button">My Tech</button>
        </div>
        {nowShowing === 'about' ? <AboutMe /> : <TechStack />}
      </div>
      <div className="desktop">
        <AboutMe />
        <TechStack />
      </div>
    </DisplayContainer>
  );
}
