import styled from 'styled-components';
import Carousel from './Carousel';

const StyledCard = styled.div`
  height: 260px;
  width: 260px;
  border-radius: 12px;

  .card {
    height: 320px;
    width: 320px;
    border-radius: inherit;
    transition: transform 1.7s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .face {
    height: 100%;
    width: 100%;
    border-radius:inherit;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    cursor: pointer;
  }

  .front {
    background-color: #28c7fa;
    padding: 1rem;
    transition: transform 1.7s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .project-title {
    text-align: center;
    font-size: 3rem;
  }

  .back {
    transform: rotateY(180deg);
    transition: transform 1.7s;
  }

  &:hover .front {
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
    transform: rotateY(-180deg);
    transition: box-shadow 0.5s, transform 0.7s ease-in 0.5s;
  }

  &:hover .back {
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
    transform: rotateY(0deg);
    transition: box-shadow 0.5s, transform 0.7s ease-in 0.5s;
  }
`;

export default function FlipCard() {
  return (
    <StyledCard>
      <div className="card">
        <div className="face front">
          <h1 className="project-title">Where In The World</h1>
        </div>
        <div className="face back">
          <Carousel />
        </div>
      </div>
    </StyledCard>
  );
}
