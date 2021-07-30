import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .index {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 20;
    color: #fff;
  }

  .btn-prev,
  .btn-next {
    cursor: pointer;
    position: absolute;
    width: auto;
    bottom: 16px;
    padding: 16px;
    color: #fff;
    font-weight: bold;
    font-size: 1.125rem;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  .btn-prev {
    left: 0;
  }

  .btn-next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .btn-prev:hover,
  .btn-next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .placeholder-slide {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    transition: opacity 0.75s ease-in;
    z-index: 19;
  }

  .placeholder-slide:nth-of-type(1) {
    background-color: #254611 ;
  }

  .placeholder-slide:nth-of-type(2) {
    background-color: #987545 ;
  }

  .placeholder-slide:nth-of-type(3) {
    background-color: #545466 ;
  }

  .placeholder-slide:nth-of-type(4) {
    background-color: #778825 ;
  }
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
      <div style={{ opacity: index === 0 ? 1 : 0 }} className="placeholder-slide" />
      <div style={{ opacity: index === 1 ? 1 : 0 }} className="placeholder-slide" />
      <div style={{ opacity: index === 2 ? 1 : 0 }} className="placeholder-slide" />
      <div style={{ opacity: index === 3 ? 1 : 0 }} className="placeholder-slide" />
    </StyledCarousel>
  );
}
