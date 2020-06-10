import React from 'react';
import { AddDataInterface } from '../services/question/type';
import Form from '../components/Form';

const Checkbox: React.FC = () => {
  const data: AddDataInterface = {
    name: '',
    code: '',
    open: true,
    type: 'checkbox',
    options: ['', ''],
  };
  return <Form formData={data} />;
};

export default Checkbox;
