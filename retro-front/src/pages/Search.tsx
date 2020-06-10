import React, { useState, useContext, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import ToastContext from '../context/toast/toastContext';
import QuestionService from '../services/question/question.service';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import BigInput from '../components/BigInput';
import BigButton from '../components/BigButton';

const Search: React.FC = () => {
  const questionService = new QuestionService();
  const toastContext = useContext(ToastContext);
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);
  const onSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await questionService.findQuestionByCode(code);
      const id = response.data.question._id;
      setLoading(false);
      setId(id);
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
      setLoading(false);
    }
  };
  return id ? (
    <Redirect
      to={{
        pathname: `/question/${id}`,
      }}
    />
  ) : (
    <Wrapper justifyContent="center" alignItems="center">
      <Card maxWidth={500}>
        <form onSubmit={(event) => onSearch(event)}>
          <BigInput
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter the code"
            value={code}
            required
          />
          <BigButton isLoading={loading} isDisabled={loading}>
            Search
          </BigButton>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Search;
