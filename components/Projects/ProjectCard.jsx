import styled, { keyframes } from 'styled-components';

const Card = styled.div`
  font-family: inherit;
  height: 400px;
  width: 400px;
  position: relative;
  perspective: 500px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: box-shadow 0.5s, transform 1s ease 0.5s;
    transform-style: preserve-3d;
  }
  
  &:hover .content {
    box-shadow: 0 0 24px rgba(0,0,0,0.8);
    transform: rotateY( 180deg);
  }
  
  .front,
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 300px;
    color: #03446A;
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    backface-visibility: hidden;
  }
  
  .back {
    background: #03446A;
    color: white;
    transform: rotateY( 180deg );
  }
`;

export default function ProjectCard() {
  return (
    <Card>
      <div className="content">
        <div className="front">
          Front
        </div>
        <div className="back">
          Back!
        </div>
      </div>
    </Card>
  );
}
