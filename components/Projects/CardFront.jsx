import styled from 'styled-components';

const Front = styled.div`
  position: absolute;
  border-radius: inherit;
  height: 100%;
  width: 100%;
  border-radius: inherit;    
  backface-visibility: hidden;
  transform-style: preserve-3d;
  font-family: inherit;
  font-size: 3em;

  img {
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  h1 {
    position: absolute;
    font-size: 3rem;
    z-index: 2;
    top: calc(50% - 1.5rem);
    left: 0;
    right: 0;
    text-align: center;
  } 
`;

export default function CardFront({ title, imageFileName }) {
  return (
    <Front>
      <div className="title-wrapper">
        <h1>{title}</h1>
      </div>
      <img
        src={`/screen_captures/${imageFileName}_dt.png`}
        alt={title}
      />
    </Front>
  );
}
