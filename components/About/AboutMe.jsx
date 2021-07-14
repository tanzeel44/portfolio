/* eslint-disable max-len */
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = styled(motion.div)`
  height: 88%;
  width: 100%;
  position: relative;
  padding: 10px;
  
  h1 {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: absolute;
    top: 1rem;
    left: 0;
    font-size: 4rem;
  }

  .about-text {
    padding: 0.5rem 1rem;
    height: 97%;
    width: calc(100% - 4rem);
    position: absolute;
    right: 0;
    font-weight: 500;
    font-size: 1rem;
    overflow-y: auto;

    @media only screen and (min-width: 768px) and (max-width: 991px) { 
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 992px) {
      font-size: 1.07rem;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 100%;
  }
`;

export default function AboutMe() {
  return (
    <About>
      <h1>About Me</h1>
      <section className="about-text">
        <p>
          Hi, my name is Tanzeel and I&apos;m a Full Stack Software Developer based in Toronto, Canada. Over the last three years, I have steadily worked to build up a skillset, and portfolio of projects, with a focus on web application development.
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
      </section>
    </About>
  );
}
