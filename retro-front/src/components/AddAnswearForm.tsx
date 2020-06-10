import React, { useState, FormEvent, useContext } from 'react';
import BigInput from './BigInput';
import BigButton from './BigButton';
import BigSelect from './BigSelect';
import Checkbox from './Checkbox';
import Card from './Card';
import { QuestionDataInterface } from '../services/question/type';
import QuestionService from '../services/question/question.service';
import ToastContext from '../context/toast/toastContext';

interface AddAnswearPropsInterface {
  question: QuestionDataInterface;
  answearWasAdded: () => void;
}

const AddAnswearForm: React.FC<AddAnswearPropsInterface> = ({
  question,
  answearWasAdded
}) => {
  const questionService = new QuestionService();
  const toastContext = useContext(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [answear, setAnswear] = useState<string>('');
  const [checkedData, setCheckedData] = useState<string[]>([]);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = question.type === 'checkbox' ? checkedData : answear;
      const response = await questionService.addAnswear(data, question._id);
      toastContext.setMessage(response.data.message, 'success');
      setLoading(false);
      answearWasAdded();
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
      setLoading(false);
    }
  };
  const onChangeCheckbox = (checked: boolean, index: number) => {
    if (checked) {
      const checkedCopy = checkedData;
      checkedCopy.push(question.options[index]);
      setCheckedData(checkedCopy);
    } else {
      const checkedCopy = checkedData.filter(
        (check: string) => check !== question.options[index]
      );
      setCheckedData(checkedCopy);
    }
  };
  return (
    <Card maxWidth={500}>
      <h2>{question.name}</h2>
      <form data-testid="form" onSubmit={event => onSubmit(event)}>
        {question.type === 'select' && (
          <BigSelect
            onChange={event => setAnswear(event.target.value)}
            required
            data-testid="select-input"
          >
            <option></option>
            {question.options.map((option: any, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </BigSelect>
        )}
        {question.type === 'text' && (
          <BigInput
            onChange={event => setAnswear(event.target.value)}
            placeholder="Answear"
            value={answear}
            required
            data-testid="text-input"
          />
        )}
        {question.type === 'checkbox' &&
          question.options.map((option: string, index: number) => (
            <Checkbox
              label={option}
              key={index}
              idx={index}
              onChange={onChangeCheckbox}
            />
          ))}
        <BigButton isLoading={loading} isDisabled={loading}>
          Save
        </BigButton>
      </form>
    </Card>
  );
};

export default AddAnswearForm;
