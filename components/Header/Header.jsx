import styled from "styled-components";

const Logo = styled.h1`
  position: relative;
  display: inline-block;
  margin: 0 0 0 200px;
  font-family: 'Righteous', cursive;
  font-size: 3em;
  padding: 0;
  &:after {
    content: '';
    background: #73cd91;
    opacity: 0.7;
    position: absolute;
    display: block;
    z-index: -1;
    width: 110%;
    height: 0.6em;
    margin: -0.96em 0 0 -0.3em;
  }
`;

export default function Header() {
  return (
    <header>
      <Logo>{'<'}tanzeel{' />'}</Logo>
    </header>
  );
}