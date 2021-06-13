import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.125em;
  margin: 1em 0;
  color: #000;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid #000;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #000;
    border-right-color: #000;
  }

  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #000;
    border-left-color: #000;
  }

  &:hover:before,
  &:hover:after {
    border-bottom-color: #000;
    border-right-color: #000;
    border-top-color: #000;
    border-left-color: #000;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 902px) {
    margin: 0 0 0 1.5em;
  }
`;

export default function ResumeButton() {
  return (
    <StyledButton>
      RESUME
    </StyledButton>
  );
}
