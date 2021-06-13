import styled from 'styled-components';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.div`
  width: 100vw;
  z-index: 2;
  text-align: center;
  padding: 2em;
  position: absolute;
  left: ${(props) => (props.open ? '0' : '-100%')};
  top: calc(4em);
  transition: left 0.5s linear;
  
  @media only screen and (min-width: 902px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    height: 50%;
    padding: 0;
    transition: 0s;
  }
`;

export default function Navbar({ open }) {
  return (
    <StyledNav open={open}>
      <NavMenu />
      <ResumeButton />
    </StyledNav>
  );
}
