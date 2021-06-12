import styled from 'styled-components';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.div`
  border: 2px solid #b6f;
  width: 100vw;
  height: 100vh;
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
