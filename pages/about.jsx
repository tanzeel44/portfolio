import styled from 'styled-components';
import { motion } from 'framer-motion';

// import Display from '../components/About/Display';
import AboutMe from '../components/About/AboutMe';

const AboutContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  display: grid;
  grid-template-rows: 100%;  
  @media only screen and (min-width: 992px) {
    grid-template-rows: 60% 40%;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutMe />
<<<<<<< HEAD
=======
      <div style={{ borderTop: 'none' }} />
>>>>>>> parent of 1954498 (about layout wip)
    </AboutContainer>
  );
}
