import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.div`
  width: 100vw;
  height: calc(100vh - 6.25em);
  z-index: 2;
  text-align: center;
  padding: 3em 3em 20em 3em;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  left: ${(props) => (props.open ? '0' : '-200%')};
  top: 6.25em;
  background-color: inherit;
  transition: left 0.5s linear;
  background-color: ${(props) => props.theme.background};

  &.pause {
    transition: none !important;
  }


  
  @media only screen and (min-width: 902px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    flex-flow: row;
    align-items: center;
    height: 50%;
    padding: 0;
    transition: none;

    & > * {
      margin: 0;
    }
  }
`;

const DarkModeButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;

  @media only screen and (min-width: 902px) {
    margin-left: 2em;
  }
`;
export default function Navbar({
  open, setNavOpen, darkMode, toggleDarkMode,
}) {
  // control when menu animations are on and when they aren't
  const [animationOff, setAnimationOff] = useState(true);

  // pause menu transition and close menu during viewport resizing
  useEffect(() => {
    let resizeTimer;
    window.addEventListener('resize', () => {
      setAnimationOff(true);
      clearTimeout(resizeTimer);
      if (window.innerWidth > 902) {
        setNavOpen(false);
      }
      resizeTimer = setTimeout(() => {
        setAnimationOff(false);
      }, 400);
    });
  }, []);

  return (
    <StyledNav className={animationOff ? 'pause' : ''} open={open}>
      <NavMenu />
      <ResumeButton />
      <DarkModeButton
        type="button"
        onClick={() => toggleDarkMode(!darkMode)}
      >
        <Image
          className="darkModeIcon"
          src={darkMode ? '/moon.png' : '/sun.png'}
          alt="night mode"
          width="48"
          height="48"
        />
      </DarkModeButton>
    </StyledNav>
  );
}
