import styled from 'styled-components';
import { motion } from 'framer-motion';

const Tech = styled(motion.div)`
  height: 88%;
  width: 100%;
  position: relative;

  h1 {
    writing-mode: vertical-rl;
    position: absolute;
    top: 1rem;
    right: 0;
    font-size: 4rem;
  }

  .tech {
    padding: 1rem;
    height: 100%;
    width: calc(100% - 4rem);
    position: absolute;
    right: 0;
    font-weight: 500;
    font-size: 1rem;

    @media only screen and (min-width: 768px) and (max-width: 991px) { 
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 992px) {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 100%;
  }
`;

export default function TechStack() {
  return (
    <Tech>
      <h1>My Tech</h1>
    </Tech>
  );
}
