import styled from 'styled-components';
import { useState } from 'react';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 4em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  a, a:before,
  a:after, a:visited {
    text-decoration: none;
    color: inherit;
    font-weight: 900;
    font-size: 2em;
  }
`;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader>
      <h1><a href="/">{'<tanzeel />'}</a></h1>
      <nav>
        <Navbar open={navOpen} />
        <Hamburger openHandler={setNavOpen} openState={navOpen} />
      </nav>
    </StyledHeader>
  );
}
