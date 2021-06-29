import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  
  .intro {
    width: 100%;
    height: calc(100% - 60px);
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

    @media only screen and (min-width: 992px) and (max-width: 1279px) {

    }

    @media only screen and (min-width: 992px) {
      font-size: 3em;
      height: calc(100% - 180px);
      justify-content: flex-end;      
    }

    h1, h2, h3 {
      text-align: center;
      
      span:hover {
        color: #16C79A;
      }
      
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
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 992px) {
      height: 180px;
      align-items: flex-start;
    }

    a {
      position: relative;
      text-transform: uppercase;
      background-color: #ffc947;
      border: none;
      padding: 20px;
      width: 130px;
      margin: 0 3px;
      text-align: center;
      transition-duration: 0.4s;
      text-decoration: none;
      overflow: hidden;
      cursor: pointer;
      font: inherit;
      font-size: 16px;
      color: #0a1931;
      font-weight: 700;
      @media only screen and (min-width: 992px) {
        width: 200px;
      }
    }

    a:hover {
      background:#eaeaea;
      box-shadow:0px 2px 10px 5px #97B1BF;
    }

    a:after {
      content: "";
      background: #ffc947;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    a:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
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
        <a type="button" href="/tanzeel-ur-rehman-resume.pdf" target="_blank">résumé</a>
        <a type="button" href="/" target="_blank">projects</a>
      </div>
    </IntroContainer>
  );
}
