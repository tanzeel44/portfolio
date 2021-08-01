import styled from 'styled-components';
import Carousel from './Carousel';

const StyledCard = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 12px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    height: 300px;
    width: 300px;
  }

  .card {
    height: 250px;
    width: 250px;
    border-radius: inherit;
    transition: transform 1.7s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    
    @media only screen and (min-width: 768px) {
      height: 300px;
      width: 300px;
    }
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
    padding: 1rem;
    transition: transform 1.7s;
    color: #002651;
  }
  
  .project-title {
    text-align: center;
    font-size: 1.444rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
    }
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

export default function FlipCard({
  title, image, tech, github, overview, url,
}) {
  return (
    <StyledCard>
      <div className="card">
        <div
          className="face front"
          style={{
            background: `url('/screen_captures/${image}_dt.png') no-repeat center center`,
            backgroundSize: '100% auto',
            backgroundColor: '#ccc',
          }}
        >
          <h1 className="project-title">{title}</h1>
        </div>
        <div className="face back">
          <Carousel {...{
            title, image, tech, github, overview, url,
          }}
          />
        </div>
      </div>
    </StyledCard>
  );
}
