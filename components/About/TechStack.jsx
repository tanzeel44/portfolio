import styled from 'styled-components';
import { motion } from 'framer-motion';

import TechCard from './TechCard';

const Tech = styled(motion.div)`

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
