import React from 'react';
import { AddDataInterface } from '../services/question/type';
import Form from '../components/Form';

const Select: React.FC = () => {
  const data: AddDataInterface = {
    name: '',
    code: '',
    open: true,
    type: 'select',
    options: ['', ''],
  };
  return <Form formData={data} />;
};

export default Select;
