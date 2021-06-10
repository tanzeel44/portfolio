/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState } from 'react';

import StyledBurger from './Hamburger.Styled';

export default function Hamburger() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledBurger>
      <input type="checkbox" id="check" />
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}
