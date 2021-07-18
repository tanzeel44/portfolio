import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import NavMenu from './NavMenu';
import Button from '../Button';

const StyledNav = styled.div`
  width: 100vw;
  height: calc(100vh - 6.25rem);
  z-index: 20;
  text-align: center;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0 5rem 0;
  left: ${(props) => (props.open ? '0' : '-200%')};
  top: 6.25rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.headerText};
  transition: left 0.5s linear, background-color 0.5s;
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
    background-color: transparent;
    
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
  margin-top: 2em;
  @media only screen and (min-width: 902px) {
    margin: 0 0 0 2em;
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
      <a href="/tanzeel-ur-rehman-resume.pdf" target="_blank">
        <Button>
          résumé
        </Button>
      </a>
      <DarkModeButton
        type="button"
        onClick={() => toggleDarkMode(!darkMode)}
      >
        {darkMode
          ? (
            <Image
              src="/moon.png"
              height={48}
              width={48}
              alt="switch to day mode"
              loading="eager"
            />
          )
          : (
            <Image
              src="/sun.png"
              height={48}
              width={48}
              alt="switch to night mode"
              loading="eager"
            />
          )}
      </DarkModeButton>
    </StyledNav>
  );
}
