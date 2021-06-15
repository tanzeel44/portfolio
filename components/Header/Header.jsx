import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

import Navbar from './Navbar';
import Hamburger from './Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 6.25em;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px rgba(0,0,0,0.2);

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
      {/* <h1><a href="/">{'<tanzeel />'}</a></h1> */}
      <Image
        src={darkMode ? '/logo_night.png' : '/logo_day.png'}
        height={72}
        width={102}
        alt="Tanzeel"
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
