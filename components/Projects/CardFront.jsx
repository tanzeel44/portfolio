import styled from 'styled-components';

const Front = styled.div`
  position: absolute;
  border-radius: inherit;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  backface-visibility: hidden;
  font-family: inherit;
  font-size: 3em;

  img {
    object-fit: cover;
    object-position: top left;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  h1 {
    position: absolute;
    width: 240px:
    z-index: 2;
    margin-top: 50%;
    text-align: center;
    border: 1px solid green;
  }
`;

export default function CardFront({ title, imageFileName }) {
  return (
    <Front>
      <h1>{title}</h1>
      <img
        src={`/screen_captures/${imageFileName}.png`}
        alt={title}
      />
    </Front>
  );
}
