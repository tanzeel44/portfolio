import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// import Display from '../components/About/Display';
import AboutMe from '../components/About/AboutMe';
import TechStack from '../components/About/TechStack';

const AboutContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.main};\

  .mobile-display {
    height: 100%;
    font-family: inherit;
    display: grid;
    grid-template-rows: 90% 10%;
    @media only screen and (min-width: 992px) {
      display: none;
    }
  }

  .desktop-display {
    height: 100%;
    font-family: inherit;
    display: grid;
    grid-template-rows: 60% 40%;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }

  .toggle-display {
    border: 1px solid blue;
    background-color: transparent;
    font-family: inherit;
    font-weight: 900;
    font-size: 1.7rem;
    color: inherit;
    cursor: pointer;
    transition: all 0.8s;
  }
`;

export default function About() {
  // 0 = About Me; 1 = Tech Stack
  const [nowShowing, setNowShowing] = useState(0);

  const toggleNowShowing = () => {
    if (nowShowing === 0) setNowShowing(1);
    if (nowShowing === 1) setNowShowing(0);
    // default to 0/about if somehow set to an erroneous value
    if (nowShowing !== 0 && nowShowing !== 1) setNowShowing(0);
  };

  return (
    <AboutContainer>
      <div className="mobile-display">
        {nowShowing === 0 ? <AboutMe /> : <TechStack />}
        <button onClick={toggleNowShowing} className="toggle-display" type="button">
          {/* 0 => showing AM, button says tech and vice versa */}
          {nowShowing === 0
            ? (
              <motion.span
                className="now-showing-text"
              >
                See My Tech
              </motion.span>
            )
            : (
              <motion.span
                className="now-showing-text"
              >
                About Me
              </motion.span>
            )}
        </button>
      </div>
      <div className="desktop-display">
        <AboutMe />
        <TechStack />
      </div>
    </AboutContainer>
  );
}
