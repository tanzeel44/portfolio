import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutMe from './AboutMe';
import TechStack from './TechStack';

const DisplayContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.main};

  .menu {
    height: 12%;
    background-color: red;
    display: flex;

    button {
      flex: 1; 
      border: none;
      font-family: inherit;
      font-size: 1.25rem;
      font-weight: 600;
    }

  }
`;

export default function Display() {
  // only for mobile. both will be displayed on desktop
  const [nowShowing, setNowShowing] = useState('about');

  return (

    <DisplayContainer>
      <div className="menu">
        <button type="button">About</button>
        <button type="button">My Tech</button>
      </div>
      <AboutMe />
      <TechStack />
    </DisplayContainer>
  );
}
