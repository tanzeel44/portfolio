import styled from 'styled-components';
import ProjectOverview from './ProjectOverview';

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function CardBack() {
  return (
    <Back>
      <ProjectOverview />
    </Back>
  );
}
