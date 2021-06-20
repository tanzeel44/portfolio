import styled from 'styled-components';

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Intro() {
  return (
    <IntroContainer />
  );
}
