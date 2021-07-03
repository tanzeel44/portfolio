import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

  @media only screen and (min-width: 992px) {
    grid-template-rows: 50% 50%;
  }

  div {
    height: 100%;
    width: 100%;
    padding: 3% 0;
  }
`;

export default function Segment({ imageName }) {
  return (
    <Container>
      <div>
        <Image src={`/${imageName}.svg`} layout="responsive" width="100%" height="5000" />
      </div>
      <div />
    </Container>
  );
}
