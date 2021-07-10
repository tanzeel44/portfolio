import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = styled(motion.div)`
  height: 88%;
  width: 100%;
  background-color: orange;
  @media only screen and (min-width: 992px) {
    height: 100%;
  }
`;

export default function AboutMe() {
  return (
    <About />
  );
}
