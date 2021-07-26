/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
`;

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: inherit;

  .slide {
    display: none;
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #000;
    border: none;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6sease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0  0 3px;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .slideIndex {
    color: ${(props) => props.theme.projectCardBG};
    font-size: 1rem;
    padding: 0.75rem;
    positon: absolute;
    top: 0;
  }

  .fade {
    animation-name: ${fade};
    animation-duration: 1.5s;
  }
`;

export default function Carousel() {
  // start with 1 for simpler numbering on ui
  const [index, setIndex] = useState(1);

  const carouselNavigation = (targetIndex) => {
    // 4 slides per carousel so hard set to 4
    if (targetIndex > 4) {
      setIndex(1);
    }
    if (targetIndex < 1) {
      setIndex(4);
    }

    setIndex(targetIndex);
    console.log(index);
  };
  return (
    <StyledCarousel>
      <div className="slide fade" style={{ display: index === 1 ? 'block' : 'none' }}>
        <div className="slideIndex">1 / 4</div>
      </div>
      <div className="slide fade" style={{ display: index === 2 ? 'block' : 'none' }}>
        <div className="slideIndex">2 / 4</div>
      </div>
      <div className="slide fade" style={{ display: index === 3 ? 'block' : 'none' }}>
        <div className="slideIndex">3 / 4</div>
      </div>
      <div className="slide fade" style={{ display: index === 4 ? 'block' : 'none' }}>
        <div className="slideIndex">4 / 4</div>
      </div>
      <button onClick={() => carouselNavigation(index - 1)} type="button" className="previous">&#10094;</button>
      <button onClick={() => carouselNavigation(index + 1)} type="button" className="next">&#10095;</button>
    </StyledCarousel>
  );
}
