import styled from 'styled-components';
import { motion } from 'framer-motion';

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
      <section className="tech" />
    </Tech>
  );
}
