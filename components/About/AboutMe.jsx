import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: orange;
`;

export default function AboutMe() {
  return (
    <About />
  );
}
