import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Exo', sans-serif;

`;

export default function Intro() {
  const firstLine = 'Hi, I\'m Tanzeel';
  const secondLine = 'A Web Application Developer';
  const thirdLine = 'Based in Toronto, Canada';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <IntroContainer>
      <motion.h1
        className="intro"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {firstLine.split('').map((char, index) => (
          <motion.span className="lineOne" key={`${char}_${index * 3}`} variants={letter}>{char}</motion.span>
        ))}
        <br />
        {secondLine.split('').map((char, index) => (
          <motion.span className="lineTwo" key={`${char}_${index * 4}`} variants={letter}>{char}</motion.span>
        ))}
        <br />
        {thirdLine.split('').map((char, index) => (
          <motion.span className="lineThree" key={`${char}_${index * 5}`} variants={letter}>{char}</motion.span>
        ))}
        <br />
      </motion.h1>
    </IntroContainer>
  );
}
