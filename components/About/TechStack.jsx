import styled from 'styled-components';
import { motion } from 'framer-motion';

import TechCard from './TechCard';

const Tech = styled(motion.div)`
  height: 100%;
  position: relative;
    
  h1 {
    font-size: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    
    @media only screen and (min-width: 375px) and (max-width: 539px) {
      font-size: 4rem;
    }

    @media only screen and (min-width: 540px) {
      font-size: 5rem;
    }

    @media only screen and (min-width: 992px) {
      font-size: 4rem;
    }
  }

  .tech {
    height: calc(100% - 4rem);
    width: 100%;
    padding-top: 10px;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
    overflow: auto;

    
    ::-webkit-scrollbar {
      width: 1rem;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
     
    ::-webkit-scrollbar-thumb {
      background: #28c7fa; 
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #775ada; 
    }

    @media only screen and (min-width: 360px) and (max-width: 539px) {
      height: calc(100% - 5rem);
      grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (min-width: 540px) and (max-width: 991px) {
      height: calc(100% - 6rem);
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 992px) and (max-width: 1279px) { 
      height: calc(100% - 5rem);
      grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (min-width: 1280px) { 
      height: calc(100% - 5rem);
      grid-template-columns: repeat(9, 1fr);
    }
  }

  .card-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .learning-tech {
    font-size: 2rem;
    text-align: center;
    grid-column: 1/-1;
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <Tech
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h1>
        My Tech
      </h1>
      <motion.div
        className="tech"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {techStack.map((tech) => (
          <div className="card-container" key={tech.name}>
            <TechCard image={tech.image} title={tech.name} />
          </div>
        ))}
        <h2 className="learning-tech">
          Currently Learning:
        </h2>
        {learning.map((tech) => (
          <div className="card-container" key={tech.name}><TechCard image={tech.image} title={tech.name} /></div>
        ))}
      </motion.div>
    </Tech>
  );
}
