import styled from 'styled-components';

import CardFront from './CardFront';
import CardBack from './CardBack';

const Card = styled.div`
  font-family: inherit;
  height: 250px;
  width: 250px;
  position: relative;
  perspective: 1000px;
  border-radius: 10px;
  background-color: transparent;
  border-radius: 10px;

  @media only screen and (min-width: 375px) {
    width: 320px;
    height: 320px;
  }

  .container {
    height: 100%;
    width: 100%;
    transition: box-shadow 0.5s, transform 0.8s ease-in 0.7s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: inherit;
    transform-style: preserve-3d;
  }
  
  &:hover .container {
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
  }

  &hover .front {
    transform: rotateY(-180deg);
    transition: transform 0.7s;
  }
`;

export default function ProjectCard({ title, imageFileName }) {
  return (
    <Card>
      <div className="container">
        <CardFront className="front" {...{ title, imageFileName }} />
        <CardBack className="back" />
      </div>
    </Card>
  );
}
