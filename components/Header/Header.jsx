import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

import Navbar from './Navbar';
import Hamburger from './Hamburger';
import HeaderBG from './HeaderBG';

const StyledHeader = styled.header`
  width: 100%;
  height: 6.25em;
  padding: 1em 4em;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.headerText};
  position: relative;
  transition: color 0.8s;
  
  a, a:before,
  a:after, a:visited {
    text-decoration: none;
    color: inherit;
    font-weight: 900;
    font-size: 2em;
  }
`;

export default function Header({ darkMode, toggleDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader>
      <HeaderBG />
      <Image
        src="/logo.png"
        height={64}
        width={90}
        alt="Tanzeel"
        loading="eager"
      />
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
