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

  h4 {
    font-size: 2rem;
    grid-column: 1/-1;
    text-align: center;
  }

  .tech {
    padding: 1rem;
    height: 97%;
    width: calc(100% - 4.8rem);
    position: absolute;
    left: 0;
    overflow-y: scroll;
    padding-right: 10px;
    font-weight: 500;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: 100%;

    @media only screen and (min-width: 360px) and (max-width: 767px) {      
      grid-template-columns: 50% 50%;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) { 
      font-size: 1.5rem;
      grid-template-columns: 33.33% 33.33% 33.33%;
    }

    @media only screen and (min-width: 992px) {
      font-size: 1.2rem;
      grid-template-columns: 33.33% 33.33% 33.33%;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 97%;
  }
`;

const techStack = [
  { name: 'HTML', image: 'html' },
  { name: 'CSS', image: 'css' },
  { name: 'JavaScript', image: 'javascript' },
  { name: 'React', image: 'react' },
  { name: 'Redux', image: 'redux' },
  { name: 'Node.JS', image: 'node-js' },
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
        <h4>My Core Stack:</h4>
        {techStack.map((tech) => <TechCard title={tech.name} image={tech.image} />)}
        <h4>What I'm Currently Learning:</h4>
        {learning.map((tech) => <TechCard title={tech.name} image={tech.image} />)}
      </section>

    </Tech>
  );
}
