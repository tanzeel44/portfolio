import styled from 'styled-components';

const StyledHamburger = styled.div`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.headerText};
  cursor: pointer;
  position: relative;
  
  .hamburger,
  .cross {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .hamburger span {
    display: block;
    width: 18px;
    height: 2px;
    margin-bottom: 3px;
    overflow: hidden;
    position: relative;
  }

  .hamburger span:last-child {
    margin: 0;
  }

  .hamburger span:before,
  .hamburger span:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.headerText};
    transform: translateX(-200%);
    transition: transform ease 300ms;
  }

  .hamburger span:after {
    transform: translateX(0);
  }

  .hamburger span:nth-child(2):before,
  .hamburger span:nth-child(2):after {
    transition-delay: 75ms;
  }

  .hamburger span:last-child:before,
  .hamburger span:last-child:after {
    transition-delay:150ms;
  }

  &.active .hamburger span:before {
    transform: translateX(100%);
  }

  &.active .hamburger span:after {
    transform: translateX(200%);
  }

  .cross span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${(props) => props.theme.headerText};
    transform: translateY(50%) rotate(45deg) scaleX(0);
    transition: transform ease 200ms;
  }

  .cross span:last-child {
    transform: translateY(-50%) rotate(-45deg) scaleX(0);
  }

  &.active .cross span {
    transition-delay: 450ms;
    transform: translateY(50%) rotate(45deg) scaleX(1);
  }

  &.active .cross span:last-child {
    transform: translateY(-50%) rotate(-45deg) scaleX(1);
  }

  @media only screen and (min-width: 902px) {
    &, 
    & * {
      display: none;
    }
  }
`;

export default function Hamburger({ openHandler, openState }) {
  return (
    <StyledHamburger
      onClick={() => openHandler(!openState)}
      className={openState ? 'active' : ''}
    >
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
      <div className="cross">
        <span />
        <span />
      </div>
    </StyledHamburger>
  );
}
