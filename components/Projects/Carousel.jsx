import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: inherit;

  button {
    cursor: pointer;
    z-index: 20000;
  }

`;

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const toShow = [];

  const carouselNavigation = (targetIndex) => {
    console.log('test');
    alert('test 2');
  };

  return (
    <StyledCarousel>
      <h1>{index}</h1>
      <button type="button" onClick={() => setIndex(index + 1)}>+</button>
      <button type="button" onClick={() => setIndex(index - 1)}>-</button>
    </StyledCarousel>
  );
}
