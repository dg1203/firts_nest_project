import styled, {keyframes} from 'styled-components';

interface BigButtonInterface {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const loader = keyframes`
  0%{ width : 10px; height: 10px; opacity: 1; }
  33%{ width : 20px; height: 20px; opacity: .5; }
  33%{ width : 30px; height: 30px; opacity: 0;}
  100%{ width : 10px; height: 10px; opacity: 1; }
`;

const loader1 = keyframes`
  0%{ width : 30px; height: 30px; opacity: 1; }
  33%{ width : 20px; height: 20px; opacity: .5; }
  33%{ width : 10px; height: 10px; opacity: 0;}
  100%{ width : 30px; height: 30px; opacity: 1; }
`;

const BigButton = styled.button<BigButtonInterface>`
  border-radius: 5px;
  background: ${props => props.theme.colors.blue};
  color: white;
  font-size: 1.5rem;
  width: 100%;
  max-width: 500px;
  height: 54px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  opacity: ${props => props.isDisabled ? 0.5 : 1};
  &:hover {
    opacity: 0.8;
  }
  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 10px;
    border: 2px solid ${props => props.theme.colors.white};
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 10px;
    animation: ${loader} 1s linear infinite;
    display: ${props => (props.isLoading ? 'block' : 'none')};
  }
  &:before {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 30px;
    border: 2px solid ${props => props.theme.colors.white};
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 30px;
    animation: ${loader1} 1s linear infinite;
    display: ${props => (props.isLoading ? 'block' : 'none')};
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default BigButton;
