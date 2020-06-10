import styled from 'styled-components';

interface CardProps {
  maxWidth?: number;
  backgroundColor?: string;
}

const Card = styled.div<CardProps>`
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  width: 100%;
  box-shadow: 0px 3px 10px 0px ${props => props.theme.colors.black};
  border-radius: 3px;
  padding: 30px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.white};
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 3px 10px 2px ${props => props.theme.colors.black};
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export default Card;
