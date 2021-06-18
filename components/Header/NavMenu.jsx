import styled from 'styled-components';

const StyledMenu = styled.ul`
  padding: 1em;  
  
  li {
    margin-bottom: 20px;
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
      background: ${(props) => props.theme.color};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    a:hover:after {
      width: 100%; 
      left: 0; 
    }

    @media only screen and (min-width: 902px) {
      display: inline-block;
      margin: 0 1em;
      font-size: 0.5em;
    }
  }
`;

export default function NavMenu() {
  return (
    <StyledMenu>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Contact Me</a></li>
    </StyledMenu>
  );
}
