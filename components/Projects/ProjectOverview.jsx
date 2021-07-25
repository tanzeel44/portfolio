import styled from 'styled-components';

const Overview = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.theme.projectCardBG}
  `;

export default function ProjectOverview() {
  return (
    <Overview />
  );
}
