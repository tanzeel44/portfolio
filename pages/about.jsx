import styled from 'styled-components';

import Segment from '../components/About/Segment';

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <Segment imageName="webdev" />
      <Segment imageName="dw" />
    </AboutContainer>
  );
}
