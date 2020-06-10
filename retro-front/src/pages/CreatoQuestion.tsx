import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
`;

const QuestionType = styled(Link)`
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  color: black;
  box-shadow: 0px 4px 7px 0px ${props => props.theme.colors.grey};
  border-radius: 3px;
  margin: 10px 0px;
  transition: .3s;
   &:hover {
    box-shadow: 1px 4px 15px 1px ${props => props.theme.colors.black};
  }
  &:after {
    content: '>';
    position: absolute;
    right: 15px;
  }
`;

const CreateQuestion = () => {
  return (
    <Wrapper>
      <QuestionType to="/createQuestion/text">Text</QuestionType>
      <QuestionType to="/createQuestion/select">Select</QuestionType>
      <QuestionType to="/createQuestion/checkbox">Checkbox</QuestionType>
    </Wrapper>
  );
};

export default CreateQuestion;
