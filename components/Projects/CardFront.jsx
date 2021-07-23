import styled from 'styled-components';

const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  backface-visibility: hidden;
  font-family: inherit;
  font-size: 3em;
  background: ${(props) => props.theme.resumeButtonBG}
`;

export default function CardFront({ title }) {
  return (
    <Front>
      <h1>{title}</h1>
    </Front>
  );
}
