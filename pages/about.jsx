import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    
  }

  div {
    border: 1px solid #f16882;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div />
      <div />
    </AboutContainer>
  );
}
