import styled from 'styled-components';

interface WrapperIntrface {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

const Wrapper = styled.div<WrapperIntrface>`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Wrapper;
