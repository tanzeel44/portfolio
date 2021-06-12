import styled from 'styled-components';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.div`
  border: 1px solid #b6f;
  width: 100vw;
  z-index: 2;
  text-align: center;
  padding: 2em;
  position: absolute;
  left: ${(props) => (props.open ? '0' : '-100%')};
  top: calc(4em);
  transition: left 0.5s linear;
`;

export default function Navbar({ open }) {
  return (
    <StyledNav open={open}>
      <NavMenu />
      <ResumeButton />
    </StyledNav>
  );
}
