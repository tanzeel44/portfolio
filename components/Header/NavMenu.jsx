import styled from 'styled-components';

const StyledMenu = styled.ul`
  font-weight: 700;
  font-size: 1.25em;
  
  li {
    margin: 1em;
    a, a:focus, a:visited {
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;
      display: inline-block;
      position: relative;
      padding-bottom: 3px;
    }

    a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #000;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    a:hover:after {
      width: 100%; 
      left: 0; 
    }
  }
  
  li:first-of-type {
    margin-top: 4em;
  }
`;

export default function NavMenu() {
  return (
    <StyledMenu>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Contact Me</a></li>
    </StyledMenu>
  );
}
