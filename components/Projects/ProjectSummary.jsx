import styled from 'styled-components';

const Summary = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.theme.projectCardBG}
`;

export default function ProjectSummary() {
  return (
    <Summary />
  );
}
