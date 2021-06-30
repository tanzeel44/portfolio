import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 1em 4em;
  font-family: ${(props) => props.theme.fonts.headings};
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  align-items: center;
  background-color: #da0037;
  box-shadow: rgba(200, 0, 0, 0.36) 0px 1px 3px, rgba(225, 0, 0, 0.72) 0px 1px 2px;
  color: ${(props) => props.theme.headerText};
  position: relative;
  
  @media only screen and (min-width: 992px) {
    color: #fafafa;
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
  color: #fafafa;
  a {
    font-size: 2.2em !important;  
  }
  span {
    color: #cfcfcf;
  }
`;

export default function Header({ darkMode, toggleDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a>
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
