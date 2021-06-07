import styled from "styled-components";

const Logo = styled.h1`
  font-family: 'Kanit', sans-serif;
  color: #441688;
  font-size: 3rem;
`;

export default function Header() {
  return (
    <header>
      <nav>
        <Logo>{'<'}Tanzeel{' />'}</Logo>
      </nav>
    </header>
  );
}