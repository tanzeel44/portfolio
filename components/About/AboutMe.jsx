/* eslint-disable max-len */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = styled(motion.div)`
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 992px) {   
    height: 100%;
    display: grid;
    grid-template-columns: 65% 35%;
  }

  .vector {
    display: none;
    
    @media only screen and (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      object-fit: contain;
    }
  }

  .description {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 10px;
  }

  .about-me-title {
    font-size: 3rem;
    text-align: center;
    
    @media only screen and (min-width: 375px) and (max-width: 539px) {
      font-size: 4rem;
    }

    @media only screen and (min-width: 540px) {
      font-size: 5rem;
    }

    @media only screen and (min-width: 992px) {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      position: absolute;
      top: 0;
      left: 4rem;
      height: 100%;
      text-align: center;
    }
  }

  .about-me-text {
    width: 100%;
    height: calc(100% - 3rem);
    overflow-y: scroll;
    padding: 1rem 0;
    font-weight: 600;
    line-height: 1.1;

    @media only screen and (min-width: 375px) and (max-width: 539px) {
      height: calc(100% - 4rem);
    }

    @media only screen and (min-width: 540px) and  (min-width: 991px) {
      height: calc(100% - 6rem);
    }

    @media only screen and (min-width: 992px) {
      height: calc(100% - 1rem);
      width: calc(100% - 10rem);
      position: absolute;
      right: 0;
      overflow-y: auto;
      font-size: 1.333rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .text-container {
    padding: 0 1rem;
  }
`;

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <About>
      <motion.div
        className="description"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <h1
          className="about-me-title"
        >
          About Me

        </h1>
        <motion.div
          className="about-me-text"
          variants={childVariants}
          initial="hidden"
          animate="show"
        >
          <div>
            <p>
              Hi, my name is Tanzeel and I&apos;m a Full Stack Web Application Developer based in Toronto, Canada. Over the last three years, I have steadily worked to polish my skillset, and build a portfolio of projects, with a focus on web application development.
            </p>
            <br />
            <p>
              My journey towards becoming a software developer started by chance, when I had to automate data entry for a project I was supervising, leading me down the rabbit hole that would have me spend the next three years learning everything I could about programming, and how to translate what I was learning into actual projects. My persistence, and ability to easily learn new concepts, has taken me from never having written a line of JavaScript, to building fully functioning web applications covering the entire technology stack, while juggling a full time career as a Senior Engineer, and an unplanned move across the world during a pandemic.
            </p>
            <br />
            <p>
              When I&apos;m not coding, I enjoy cooking, running, following esports, and creating some truly mind boggling playlists for my workouts (&quot;Wu Tang Clan&quot; and &quot;Amon Amarth&quot; anyone?).
            </p>
            <br />
          </div>
        </motion.div>
      </motion.div>
      <div className="vector">
        <Image src="/about.svg" width="640" height="480" layout="intrinsic" />
      </div>
    </About>
  );
}
