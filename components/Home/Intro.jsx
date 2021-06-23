import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  
  .intro {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
    justify-content: space-around;

    h1, h2, h3 {
      text-align: center;
    }
  }

  .buttonContainer {
    width: 100%;
    height: 50px;
    border-top: none;
  }
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
      <motion.div
        className="intro"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        <h1>
          {firstLine.split('').map((char, index) => (
            <motion.span className="lineOne" key={`${char}_${index * 3}`} variants={letter}>{char}</motion.span>
          ))}
        </h1>
        <h2>
          {secondLine.split('').map((char, index) => (
            <motion.span className="lineTwo" key={`${char}_${index * 4}`} variants={letter}>{char}</motion.span>
          ))}
        </h2>
        <h3>
          {thirdLine.split('').map((char, index) => (
            <motion.span className="lineThree" key={`${char}_${index * 5}`} variants={letter}>{char}</motion.span>
          ))}
        </h3>
      </motion.div>
      <div className="buttonContainer">
        <button />
        <button />
      </div>
    </IntroContainer>
  );
}
