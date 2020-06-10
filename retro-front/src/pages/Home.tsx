import React, { FunctionComponent } from 'react';
import HomeCard from '../components/HomeCard';
import styled from 'styled-components';

interface MenuInterface {
  title: string;
  description: string;
  link: string;
};

const Wrapper = styled.div`
  width: 96%;
  max-width: 800px;
  height: 96%;
  max-height: 800px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Menu: MenuInterface[] = [
  {
    title: 'Log in',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'login'
  },
  {
    title: 'Register',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'register'
  },
  {
    title: 'Crate question',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'createQuestion'
  },
  {
    title: 'Search',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'search'
  }
];

const Home: FunctionComponent = () => {
  return (
    <Wrapper>
      {Menu.map((item, index: number) => (
        <HomeCard
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </Wrapper>
  );
};

export default Home;
