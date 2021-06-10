/* eslint-disable jsx-a11y/label-has-associated-control */

// import styles from './Hamburger.module.css';
import StyledHamburger from './Hamburger.Styled';

export default function Hamburger() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledHamburger>
      <div className="menuButton">
        <input type="checkbox" className="menuCheckbox" id="menu-checkbox" />
        <label htmlFor="menu-checkbox" className="menuLabel" id="menu-label">
          <div className="menuTextBar" />
        </label>
      </div>
    </StyledHamburger>
  );
}
