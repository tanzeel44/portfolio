import styled from 'styled-components';
import Carousel from './Carousel';

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: inherit;    
  box-shadow: inherit;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
`;

export default function CardBack() {
  return (
    <Back>
      <Carousel />
    </Back>
  );
}
