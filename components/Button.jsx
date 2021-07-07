import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.resumeButtonBG};
  color: ${(props) => props.theme.resumeButtonTextMobile};
  border: none;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.8s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  font: inherit;
  font-size: 1rem;

  &:hover {
    background:#eaeaea;
    box-shadow:0px 2px 10px 5px #97B1BF;
    color: #002651;
  }

  &:after {
    content: "";
    background: ${(props) => props.theme.resumeButtonBG};
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export default Button;
