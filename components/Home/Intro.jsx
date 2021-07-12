/* eslint-disable jsx-a11y/control-has-associated-label */
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SiGithub } from 'react-icons/si';
import Button from '../Button';

const IntroContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    span {
      color: ${(props) => props.theme.headerText}
    }
  }

  h2, h3 {
    font-size: 1.444rem;
    text-align: center;
  }

  @media only screen and (min-width: 768px and max-width: 991px) {
    h1 {
      font-size: 4rem
    }

    h2, h3 {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-evenly;
    padding: 4rem 0;
    h1 {
      font-size: 5rem;
    }

    h2, h3 {
      font-size: 2.5rem;
    }
  }
  
  .link-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a, a:visited,
  a:focus {
    font: inherit;
    color: inherit;
  }

  a > button {
    font-weight: 600;
  }

  a:nth-of-type(2) {
    margin-left: 1rem;
  }
`;

// framermotion variant for outer container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.25,
      duration: 2,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Intro() {
  return (
    <IntroContainer
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={headingVariants}
      >
        Hi,
        <br />
        {' '}
        I&apos;m
        <span> Tanzeel</span>
      </motion.h1>
      <motion.h2
        variants={headingVariants}
      >
        A Full Stack Web Developer
      </motion.h2>
      <motion.h3
        variants={headingVariants}
      >
        Based in Toronto, ON
      </motion.h3>
      <motion.div
        className="link-container"
        variants={headingVariants}
      >
        <a
          href="/about"
          className="about-link"
        >
          <Button>
            Learn More
          </Button>
        </a>
        <a
          className="github-link"
          href="https://www.github.com/dw44"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub size="3em" />

        </a>
      </motion.div>
    </IntroContainer>
  );
}
