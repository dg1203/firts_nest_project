import React, { useContext } from 'react';
import styled from 'styled-components';
import QuestionsList from '../components/QuestionsList';
import AuthContext from '../context/auth/authContext';

const DashBoard = styled.div`
  padding: 15px;
`;

const UserEmail = styled.h1``;

const Dashboard: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  console.log(authContext);
  return (
    user && (
      <DashBoard>
        <UserEmail>{user.userEmail}</UserEmail>
        <QuestionsList userId={user.userId}/>
      </DashBoard>
    )
  );
};

export default Dashboard;
