import styled from "styled-components";


const BigSelect = styled.select`
  max-width: 500px;
  height: 54px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.grey};
  outline: none;
  transition: .3s;
  padding: 5px 10px;
  font-size: 1.5rem;
  margin-bottom: 15px;
  background: ${props => props.theme.colors.white};
  &:focus {
    border: 2px solid ${props => props.theme.colors.blue};
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default BigSelect;
