import styled from 'styled-components';

import CardFront from './CardFront';
import CardBack from './CardBack';

const Card = styled.div`
  font-family: inherit;
  height: 240px;
  width: 240px;
  position: relative;
  perspective: 500px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (min-width: 375px) {
    width: 320px;
    height: 320px;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: box-shadow 0.5s, transform 0.8s ease-in 0.7s;
    transform-style: preserve-3d;
  }
  
  &:hover .content {
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
    transform: rotateY( 180deg);
  }

  .test {
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
    transform: rotateY( 180deg);
  }
`;

export default function ProjectCard({ title, imageFileName }) {
  return (
    <Card>
      <div className="content">
        <CardFront {...{ title, imageFileName }} />
        <CardBack />
      </div>
    </Card>
  );
}
