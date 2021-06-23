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
    padding-top: 1.25em;
    font-size: 1.1em;
    justify-content: space-around;

    @media only screen and (min-width: 360px) and (max-width: 767px) {
      font-size: 1.5em;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 2.5em;
    }

    @media only screen and (min-width: 992px) {
      font-size: 3em;
      height: calc(100% - 120px);
      justify-content: flex-end;      
    }

    h1, h2, h3 {
      text-align: center;
      @media only screen and (min-width: 992px) {
        margin-bottom: 3rem;
      }
    }

    h1 {
      font-size: 1.75em;
    }
  }

  .buttonContainer {
    width: 100%;
    height: 50px;
    @media only screen and (min-width: 992px) {
      height: 120px;
    }
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
