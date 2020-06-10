import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PropsInterface {
  title: string;
  description: string;
  link: string;
}

const HomeLink = styled.div`
  width: 48%;
  height: 48%;
  box-shadow: 0px 4px 7px 0px ${props => props.theme.colors.grey};
  display: flex;
  transition: 0.3s;
  &:hover {
    box-shadow: 1px 4px 15px 1px ${props => props.theme.colors.black};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 15px;
    color: ${props => props.theme.colors.black};
    &:hover {
      div:nth-child(1) {
        margin-top: 15%;
      }
      div:nth-child(2) {
        opacity: 1;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 45%;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    margin-top: 15%;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  transition: 0.3s;
  opacity: 0;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

const HomeCard: FunctionComponent<PropsInterface> = ({
  title,
  description,
  link
}) => {
  return (
    <HomeLink>
      <Link to={`/${link}`}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </HomeLink>
  );
};

export default HomeCard;
