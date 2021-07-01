import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

  @media only screen and (min-width: 992px) {
    grid-template-rows: 50% 50%;
  }
`;

export default function Segment() {
  return (
    <Container />
  );
}
