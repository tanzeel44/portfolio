import styled from 'styled-components';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <img
        src="public/assets/moon.svg"
        alt="Tanzeel"
      />
      <nav>
        <Hamburger />
        <Navbar />
      </nav>
    </StyledHeader>
  );
}
