import styled from 'styled-components';

const StyledCard = styled.div`
  height: 260px;
  width: 260px;
  border-radius: 12px;

  .card {
    height: 320px;
    width: 320px;
    border-radius: inherit;
    transition: transform 1s;
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
    background-color:blueviolet;
    transition: transform 0.5s;
  }

  .back {
    transform: rotateY(180deg);
    transition: transform 0.5s;
    background-color: #ff304f;
  }

  &:hover .front {
    transform: rotateY(-180deg);
    transition: transform 0.5s;
  }

  &:hover .back {
    transform: rotateY(0deg);
    transition: transform 0.5s;
  }
`;

export default function FlipCard() {
  return (
    <StyledCard>
      <div className="card">
        <div className="face front" />
        <div className="face back">
          <button type="button" onClick={() => alert('ABC!')}>Test</button>
        </div>
      </div>
    </StyledCard>
  );
}
