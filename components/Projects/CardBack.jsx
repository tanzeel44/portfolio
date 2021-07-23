import styled from 'styled-components';

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: ${(props) => props.theme.resumeButtonBG}
`;

export default function CardBack() {
  return (
    <Back>
      <h1>Back</h1>
    </Back>
  );
}
