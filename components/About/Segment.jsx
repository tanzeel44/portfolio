import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

  &:nth-child(1) {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    grid-template-rows: 40% 60%;
    
    &:nth-child(1) {
      display: block;
    }
  }
`;

export default function Segment() {
  return (
    <Container>
      <div />
      <div />
    </Container>
  );
}
