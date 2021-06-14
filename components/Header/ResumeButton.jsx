import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  background-color: #ff2e63;
  border: none;
  padding: 20px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  font-family: inherit;
  font-weight: 900;
  color: ${(props) => props.theme.resumeButtonText};

  &:hover {
    background:#eaeaea;
    box-shadow:0px 2px 10px 5px #97B1BF;
    color:#252a34;
  }

  &:after {
    content: "";
    background: #ff2e63;
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

export default function ResumeButton() {
  return (
    <Button>
      RESUME
    </Button>
  );
}
