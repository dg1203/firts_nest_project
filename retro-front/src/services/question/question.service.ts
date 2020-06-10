import axios from 'axios';
import { QuestionInterface, AddDataInterface } from './type';

export default class QuestionService implements QuestionInterface {
  create = async (body: AddDataInterface) => {
    return await axios.post('/api/question/create', body);
  };
  findQuestionByCode = async (code: string) => {
    return await axios.get(`/api/question/findQuestionByCode/${code}`);
  }
  findQuestionById = async (id: string) => {
    return await axios.get(`/api/question/findQuestionById/${id}`);
  }
  addAnswear = async (answear: string | string[], id: string) => {
    return await axios.patch(`/api/question/addAnswear/${id}`, { answear });
  }
  myQuestions = async () => {
    return await axios.get(`/api/question/myQuestions`);
  }
}
