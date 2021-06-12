import styled from 'styled-components';
import { useState } from 'react';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader>
      <svg viewBox="-10 20 160 160">
        <text>
          {'<Tanzeel />'}
        </text>
      </svg>
      <nav>
        <Hamburger openHandler={setNavOpen} openState={navOpen} />
        <Navbar open={navOpen} />
      </nav>
    </StyledHeader>
  );
}
