import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Display from '../components/About/Display';

const AboutContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  font: ${(props) => props.theme.fonts.main};

  .vector {
    display: none;
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 60% 40%;

    .vector {
      display: flex;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <Display />
      <div className="vector">
        <Image
          src="/about.svg"
          height="600"
          width="600"
          layout="intrinsic"
        />
      </div>
    </AboutContainer>
  );
}
