import styled from 'styled-components';

import NavMenu from './NavMenu';
import ResumeButton from './ResumeButton';

const StyledNav = styled.nav`
  border: 1px solid green;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <NavMenu />
      <ResumeButton />
    </StyledNav>
  );
}
