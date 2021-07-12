import styled from 'styled-components';
import { motion } from 'framer-motion';

const Tech = styled(motion.div)`
  height: 88%;
  width: 100%;
  background-color: purple;
  @media only screen and (min-width: 992px) {
    height: 100%;
  }
`;

export default function TechStack() {
  return (
    <Tech />
  );
}
