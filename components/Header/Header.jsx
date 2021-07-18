import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 0 2rem;
  font-family: ${(props) => props.theme.fonts.navbar};
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  align-items: center;
  color: ${(props) => props.theme.headerText};
  position: relative;
  
  @media only screen and (min-width: 902px) {
    color: #fafafa;
    padding: 0 4rem;
  }
  a, a:before,
  a:after, a:visited {
    text-decoration: none;
    color: inherit;
    font-weight: 900;
    font-size: 2em;
  }
`;

const Logo = styled.p`
  color: ${(props) => props.theme.headerText};
  font-family: 'Red Hat Text', sans-serif;
  a {
    font-size: 2.5rem;  
  }
  span {
    color: #ff304f;
  }
`;

export default function Header({ darkMode, toggleDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a href="/">
            <span>{'{ '}</span>
            T
            <span>{' }'}</span>
          </a>
        </Link>
      </Logo>
      <nav>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          setNavOpen={setNavOpen}
          open={navOpen}
        />
        <Hamburger openHandler={setNavOpen} openState={navOpen} />
      </nav>
    </StyledHeader>
  );
}
