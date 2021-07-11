import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = styled(motion.div)`
  height: 88%;
  width: 100%;
  background-color: orange;
  position: relative; 

  @media only screen and (min-width: 992px) {
    height: 100%;
  }
`;

export default function AboutMe() {
  return (
    <About>
      <h1>ABOUT ME</h1>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur aperiam aliquid totam non provident tempore sequi, magnam quidem dolorum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eos, vitae laboriosam nemo quibusdam necessitatibus nulla numquam eaque pariatur accusamus repellendus quisquam molestiae quas dicta cum consequuntur quo, quaerat libero saepe omnis repellat quis similique voluptate soluta. Laborum, placeat voluptate.</p>

      </div>
    </About>
  );
}
