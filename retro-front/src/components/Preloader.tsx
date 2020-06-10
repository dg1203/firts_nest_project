import styled, {keyframes} from "styled-components";

const loader = keyframes`
  0%{ width : 10px; height: 10px; opacity: 1; }
  33%{ width : 50px; height: 50px; opacity: .5; }
  33%{ width : 100px; height: 100px; opacity: 0;}
  100%{ width : 10px; height: 10px; opacity: 1; }
`;

const loader1 = keyframes`
  0%{ width : 100px; height: 100px; opacity: 1; }
  33%{ width : 50px; height: 50px; opacity: .5; }
  33%{ width : 10px; height: 10px; opacity: 0;}
  100%{ width : 100px; height: 100px; opacity: 1; }
`;

const Preloader = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 10px;
    border:2px solid ${props => props.theme.colors.blue};
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 10px;
    animation: ${loader} 1s linear infinite;
  }
  &:before {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 100px;
    border:2px solid ${props => props.theme.colors.blue};
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 100px;
    animation: ${loader1} 1s linear infinite;
  }
`;

export default Preloader;