import styled from 'styled-components';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.div`
  border: 1px solid #b6f;
  width: 100vw;
  text-align: center;
  padding: 2em;
  position: absolute;
  left:0;
  top: calc(4em + 1px);
  z-index: -1;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

export default function Navbar({ open }) {
  return (
    <StyledNav open={open}>
      <NavMenu />
      <ResumeButton />
    </StyledNav>
  );
}
