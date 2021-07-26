import styled from 'styled-components';

const Back = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;    
  box-shadow: inherit;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  transition: transform: 0.7s;

  button {
    cursor: pointer;
    transform: translateZ(1px);
    backface-visibility: hidden;
    z-index: 200;
  }
`;

export default function CardBack() {
  return (
    <Back>
      <button type="button" onClick={() => alert('test')}>test</button>
    </Back>
  );
}
