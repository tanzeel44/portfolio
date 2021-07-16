import styled from 'styled-components';
import { motion } from 'framer-motion';

import TechCard from './TechCard';

const Tech = styled(motion.div)`
  height: 100%;
  width: 100%;
  border: 2px solid blue;
  h1 {
    font-size: 3rem;
    text-align: center;
    
    @media only screen and (min-width: 375px) and (max-width: 539px) {
      font-size: 4rem;
    }
    @media only screen and (min-width: 540px) {
      font-size: 5rem;
    }
  }
  .tech {
    height: calc(100% - 3rem);
    overflow: auto;
    @media only screen and (min-width: 375px) and (max-width: 539px) {
      height: calc(100% - 4rem);
    }
    @media only screen and (min-width: 540px) {
      height: calc(100% - 5rem);
    }
    @media only screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: 70% 30%;
      height: calc(100% - 5rem);
    }
  }
  .current {
    border: 1px solid green;
    height: 65%;
  }
  .learning {
    border: 1px solid red;
    height: 35%;
  }
`;

const techStack = [
  { name: 'HTML', image: 'html' },
  { name: 'CSS', image: 'css' },
  { name: 'JavaScript', image: 'javascript' },
  { name: 'React', image: 'react' },
  { name: 'Redux', image: 'redux' },
  { name: 'Node.JS', image: 'node' },
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
        <h4 className="heading">My Core Stack:</h4>
        {techStack.map((tech) => <div className="card-container"><TechCard title={tech.name} image={tech.image} /></div>)}
        <h4 className="heading">What I&apos;m Currently Learning:</h4>
        {learning.map((tech) => <div className="card-container"><TechCard title={tech.name} image={tech.image} /></div>)}
      </section>
    </Tech>
  );
}
