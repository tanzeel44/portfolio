import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const carouselNavigation = (targetIndex) => {
    if (targetIndex < 0) {
      setIndex(3);
    } else if (targetIndex > 3) {
      setIndex(0);
    } else {
      setIndex(targetIndex);
    }
  };

  return (
    <StyledCarousel>
      <h1 className="index">
        {index + 1}
        {' '}
        / 4
      </h1>
      <button className="btn-next" type="button" onClick={() => carouselNavigation(index + 1)}>&#10095;</button>
      <button className="btn-prev" type="button" onClick={() => carouselNavigation(index - 1)}>&#10094;</button>
    </StyledCarousel>
  );
}
