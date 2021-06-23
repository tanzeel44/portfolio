import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  text-transform: uppercase;
  background-color: #19456B;
  border: none;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  font: inherit;
  font-size: 16px;
  color: #16C79A;

  &:hover {
    background:#eaeaea;
    box-shadow:0px 2px 10px 5px #97B1BF;
    color:#252a34;
  }

  &:after {
    content: "";
    background: #16C79A;
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

  @media only screen and (max-width: 901px) {
    background-color: ${(props) => props.theme.resumeButtonBG};
    color: ${(props) => props.theme.resumeButtonTextMobile};
  }
`;

export default function ResumeButton({ href, target, children }) {
  return (
    <a href="/tanzeel-ur-rehman-resume.pdf" target="_blank">
      <Button>
        résumé
      </Button>
    </a>
  );
}
