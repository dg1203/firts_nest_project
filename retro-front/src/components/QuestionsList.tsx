import React, {useEffect} from 'react';
import QuestionService from "../services/question/question.service";

interface PropsInterface {
  userId: string;
}

const QuestionsList: React.FC<PropsInterface> = ({ userId }) => {
  const questionService = new QuestionService();
  useEffect(() => {

  }, []);
  return <h1>{userId}</h1>;
};

export default QuestionsList;
