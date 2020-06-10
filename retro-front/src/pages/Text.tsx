import React from 'react';
import { AddDataInterface } from '../services/question/type';
import Form from '../components/Form';

const Text: React.FC<{}> = () => {
  const data: AddDataInterface = {
    name: '',
    code: '',
    open: true,
    type: 'text',
  };
  return <Form formData={data} />;
};

export default Text;
