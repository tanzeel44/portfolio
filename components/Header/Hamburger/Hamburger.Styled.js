import styled from 'styled-components';

const StyledHamburger = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 39px;
  margin: 0 auto;
  z-index: 10;
  transform: translateY(-50%) scale(2);
  
  .menuButton {
    width: 39px;
    overflow: hidden;
  }

  .menuCheckbox {
    display: none;
  }

  .menuLabel {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  .menuLabel:before,
  .menuLabel:after,
  .menuLabel > .menuTextBar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #0e3577;
  }

  .menuLabel:before,
  .menuLabel:after {
    content: '';
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  .menuLabel:before {
    top: 0;
  }

  .menuLabel:after {
    top: 12px;
  }

  .menuLabel > .menuTextBar {
    top: 24px;
  }

  .menuLabel > .menuTextBar:before {
    content: 'MENU';
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    color: #0e3577;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .menuCheckbox:checked + .menuLabel:before {
    left: -39px;
  }

  .menuCheckbox:checked + .menuLabel:after {
    left: 39px;
  }

  .menuCheckbox:checked + .menuLabel .menuTextBar:before {
    animation: moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  @keyframes moveUpThenDown {
    0%{ top:0; }
    50%{ top:-27px;}
    100%{ top:-14px; }
  }
  
  @keyframes shakeWhileMovingUp {
    0%{ transform: rotateZ(0); }
    25%{ transform:rotateZ(-10deg); }
    50%{ transform:rotateZ(0deg); }
    75%{ transform:rotateZ(10deg); }
    100%{ transform:rotateZ(0); }
  }
  
  @keyframes shakeWhileMovingDown {
    0%{ transform:rotateZ(0); }
    80%{ transform:rotateZ(3deg); }
    90%{ transform:rotateZ(-3deg); }
    100%{ transform:rotateZ(0); }
  }
`;

export default StyledHamburger;
