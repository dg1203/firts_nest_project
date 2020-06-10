import React, { useState, FormEvent, Fragment, useContext } from 'react';
import Wrapper from './Wrapper';
import BigInput from './BigInput';
import BigButton from './BigButton';
import Card from '../components/Card';
import { AddDataInterface } from '../services/question/type';
import styled from 'styled-components';
import QuestionService from '../services/question/question.service';
import ToastContext from '../context/toast/toastContext';

const OptionsWrapper = styled.div`
  position: relative;
`;

const SmallButton = styled(BigButton)`
  position: absolute;
  width: 54px;
`;

const SmallButtonRemove = styled(BigButton)`
  position: absolute;
  width: 54px;
  margin-left: -55px;
  background-color: ${(props) => props.theme.colors.red};
`;

interface PropInterface {
  formData: AddDataInterface;
}

const Form: React.FC<PropInterface> = ({ formData }) => {
  const questionService = new QuestionService();
  const toastContext = useContext(ToastContext);
  const [data, setData] = useState<AddDataInterface>(formData);
  const [loading, setLoading] = useState<boolean>(false);
  const onCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await questionService.create(data);
      toastContext.setMessage(response.data.message, 'success');
      setLoading(false);
    } catch (error) {
      toastContext.setMessage(error.response.data.message, 'error');
      setLoading(false);
    }
  };
  const setOption = (value: any, index: number) => {
    const optionsCopy: any[] | undefined = data.options;
    let val = value === '' ? 'Option' : value;
    if (optionsCopy && (optionsCopy[index] !== undefined)) {
      optionsCopy[index] = val;
    } else if (optionsCopy) {
      optionsCopy.push(val);
    }
    setData({
      ...data,
      options: optionsCopy ? [...optionsCopy] : [''],
    });
  };
  const addOptionInput = () => {
    setData({
      ...data,
      options: data.options ? [...data.options, ''] : [''],
    });
  };
  const removeOptionInput = (idx: number) => {
    const optionsCopy: any[] | undefined =
      data.options !== undefined
        ? data.options.filter(
            (option: AddDataInterface, index: number) => idx !== index
          )
        : data.options;
    setData({
      ...data,
      options: optionsCopy ? [...optionsCopy] : [''],
    });
  };
  return (
    <Wrapper justifyContent="center" alignItems="center" flexDirection="column">
      <Card maxWidth={500}>
        <form onSubmit={(event) => onCreate(event)}>
          <BigInput
            onChange={(event) => setData({ ...data, name: event.target.value })}
            placeholder="Question"
            value={data.name}
            required
          />
          {(data.type === 'select' || data.type === 'checkbox') && (
            <OptionsWrapper>
              {data &&
                data.options &&
                data.options.map((option: any, index: number) => (
                  <Fragment key={index}>
                    <BigInput
                      onChange={(event) => setOption(event.target.value, index)}
                      placeholder="Option"
                      value={option}
                      required
                    />
                    {index > 1 && (
                      <SmallButtonRemove
                        onClick={() => removeOptionInput(index)}
                      >
                        -
                      </SmallButtonRemove>
                    )}
                  </Fragment>
                ))}
              <SmallButton onClick={addOptionInput}>+</SmallButton>
            </OptionsWrapper>
          )}
          <BigInput
            onChange={(event) => setData({ ...data, code: event.target.value })}
            placeholder="Code"
            value={data.code}
            required
          />
          <BigButton isLoading={loading} isDisabled={loading}>
            Save
          </BigButton>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Form;
