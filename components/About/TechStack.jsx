import styled from 'styled-components';
import { motion } from 'framer-motion';

const Tech = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: purple;
  z-index: 10;
`;

export default function TechStack() {
  return (
    <Tech />
  );
}
