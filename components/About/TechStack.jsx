import styled from 'styled-components';
import { motion } from 'framer-motion';

import TechCard from './TechCard';

const Tech = styled(motion.div)`
  height: 100%;
  border: 10px solid green;

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
    width: 100%;
    padding-top: 10px;
    overflow-y: auto;

    @media only screen and (min-width: 375px) and (max-width: 539px) {
      height: calc(100% - 4rem);
    }

    @media only screen and (min-width: 540px) {
      height: calc(100% - 5rem);
    }
  }

  .card-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
        {techStack.map((tech) => (
          <div className="card-container" key={tech.name}><TechCard image={tech.image} title={tech.name} /></div>
        ))}
      </section>
    </Tech>
  );
}
