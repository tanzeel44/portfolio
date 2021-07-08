import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 85%;

  .vector {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 15% 50% 35%;
    grid-template-rows: 100%;    
    
    .vector {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div style={{ backgroundColor: 'red' }} />
      <div />
      <div className="vector">
        <Image
          src="/about.svg"
          height="600"
          width="600"
          layout="responsive"
        />
      </div>
    </AboutContainer>
  );
}
