import styled from 'styled-components';
import { motion } from 'framer-motion';

import TechCard from './TechCard';

const Tech = styled(motion.div)`
  height: 88%;
  width: 100%;
  position: relative;
  padding: 10px;
  
  h1 {
    writing-mode: vertical-rl;
    position: absolute;
    top: 1rem;
    right: 0.7rem;
    font-size: 4rem;
  }

  h2 {
    font-weight: 600;
    text-align: center;
  }

  .tech {
    padding: 1rem;
    height: 97%;
    width: calc(100% - 4rem);
    position: absolute;
    left: 0;
    padding-right: 10px;
    font-weight: 500;

    @media only screen and (min-width: 768px) and (max-width: 991px) { 
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 992px) {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 97%;
  }
`;

const tech = [
  { name: 'HTML', image: 'html' },
  { name: 'CSS', image: 'css' },
  { name: 'JavaScript', image: 'javascript' },
  { name: 'React', image: 'react' },
  { name: 'Redux', image: 'redux' },
  { name: 'Node.JS', image: 'node-js' },
  { name: 'Express', image: 'express' },
  { name: 'MongoDB', image: 'mongodb' },
  { name: 'Python', image: 'python' },
  { name: 'Git', image: 'git' },
];

const learning = [
  { name: 'TypeScript', image: 'typescript' },
  { name: 'PostgreSQL', image: 'postgresql' },
];

export default function TechStack() {
  return (
    <Tech>
      <h1>My Tech</h1>
      <section className="tech">
        <h2>
          My core skills include:
        </h2>
      </section>
    </Tech>
  );
}
