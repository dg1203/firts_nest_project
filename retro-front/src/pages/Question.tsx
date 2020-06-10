import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { QuestionDataInterface } from '../services/question/type';
import QuestionService from '../services/question/question.service';
import ToastContext from '../context/toast/toastContext';
import Wrapper from '../components/Wrapper';
import AddAnswearForm from '../components/AddAnswearForm';
import Chart from '../components/Chart';

const socket = io('http://localhost:3000');

const Question = () => {
  const questionService = new QuestionService();
  const toastContext = useContext(ToastContext);
  let params = useParams<{ id: string }>();
  const [question, setQuestion] = useState<QuestionDataInterface | null>(null);
  const [replies, setReplies] = useState<string[]>([]);
  useEffect(() => {
    const { id } = params;
    getQuestion(id);
  }, []);
  useEffect(() => {
    socket.on('msgToClient', (reply: { data: string[] }) => {
      setReplies(reply.data);
    });
  }, []);
  const sendMessage = () => {
    const { id } = params;
    socket.emit('msgToServer', id);
  };
  const getQuestion = async (id: string) => {
    try {
      const response = await questionService.findQuestionById(id);
      setQuestion(response.data.question);
      setReplies(response.data.question.reply);
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
    }
  };
  return question ? (
    <Wrapper>
      <AddAnswearForm question={question} answearWasAdded={sendMessage} />
      <Chart reply={replies} />
    </Wrapper>
  ) : (
    <h1>Not found</h1>
  );
};

export default Question;
