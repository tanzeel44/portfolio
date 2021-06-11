import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.125em;
  margin: 1em 0.8em;
  color: #004bad;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid #004bad;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #004bad;
    border-right-color: #004bad;
  }

  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #004bad;
    border-left-color: #004bad;
  }

  &:hover:before,
  &:hover:after {
    border-bottom-color: #004bad;
    border-right-color: #004bad;
    border-top-color: #004bad;
    border-left-color: #004bad;
    width: 100%;
    height: 100%;
  }
`;

export default function ResumeButton() {
  return (
    <StyledButton>
      RESUME
    </StyledButton>
  );
}
