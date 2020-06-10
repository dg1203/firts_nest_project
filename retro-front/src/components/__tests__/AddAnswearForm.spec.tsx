import React from 'react';
import AddAnswearForm from '../AddAnswearForm';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import { theme } from '../../utils/theme';
import mockAxios from '../../__mocks__/axios';
import ToastContext from '../../context/toast/toastContext';
import { act } from 'react-dom/test-utils';
import exp from "constants";

const defaultProps = {
  question: {
    time: 3600,
    created: '20.05.2020',
    options: ['test', 'test1'],
    reply: [],
    _id: 'daldj219hfk',
    name: 'Test question?',
    code: 'testcode',
    open: true,
    type: 'text',
    __v: 0
  },
  answearWasAdded: jest.fn()
};

const defaultContext = {
  message: '',
  type: '',
  setMessage: (message: string, type: string) => ''
};

const renderComponent = (props: any) =>
  render(
    <ToastContext.Provider value={defaultContext}>
      <ThemeProvider theme={theme}>
        <AddAnswearForm {...props} />
      </ThemeProvider>
    </ToastContext.Provider>
  );

describe('<AddAnswearForm />', () => {
  it('To match snapshot', () => {
    const { asFragment } = renderComponent(defaultProps);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('Test text input', () => {
    it('If type text should visible text input', () => {
      const { getByTestId } = renderComponent(defaultProps);
      expect(getByTestId('text-input')).toBeTruthy();
    });
    it('On change input value should set answear state', () => {
      const { getByTestId } = renderComponent(defaultProps);
      const input = getByTestId('text-input') as HTMLInputElement;
      expect(input.value).toBe('');
      fireEvent.change(input, {
        target: { value: 'answear' }
      });
      expect(input.value).toBe('answear');
    });
  });
  describe('Test select input', () => {
    it('If type select should visible select input', () => {
      const { getByTestId } = renderComponent({
        ...defaultProps,
        question: {
          ...defaultProps.question,
          type: 'select'
        }
      });
      expect(getByTestId('select-input')).toBeTruthy();
    });
    it('On change select value should set answear state', () => {
      const { getByTestId } = renderComponent({
        ...defaultProps,
        question: {
          ...defaultProps.question,
          type: 'select'
        }
      });
      const input = getByTestId('select-input') as HTMLSelectElement;
      expect(input.value).toBe('');
      fireEvent.change(input, {
        target: { value: 'test' }
      });
      expect(input.value).toBe('test');
    });
  });
  describe('Test checkbox input', () => {
    it('If type checkbox should visible checkbox inputs', () => {
      const { getAllByTestId } = renderComponent({
        ...defaultProps,
        question: {
          ...defaultProps.question,
          type: 'checkbox'
        }
      });
      expect(getAllByTestId('checkbox-input')).toBeTruthy();
      expect(getAllByTestId('checkbox-input').length).toBe(
        defaultProps.question.options.length
      );
    });
  });
  describe('Test form', () => {
    it('Check if form is exists', () => {
      const { getByTestId } = renderComponent(defaultProps);
      expect(getByTestId('form')).toBeTruthy();
    });
    it('Test submit form with success',  () => {
      const { getByTestId } = renderComponent(defaultProps);
      mockAxios.patch.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            message: 'Success'
          }
        })
      );
      fireEvent.submit(getByTestId('form'));
      expect(mockAxios.patch).toHaveBeenCalled();
    });
    it('Test submit form with error',  () => {
      const { getByTestId } = renderComponent(defaultProps);
      mockAxios.patch.mockImplementationOnce(() =>
          Promise.reject({
            response: {
              data: {
                message: 'Success'
              }
            }
          })
      );
      fireEvent.submit(getByTestId('form'));
      expect(mockAxios.patch).toHaveBeenCalled();
    });
  });
  describe('Test methods', () => {
    it('Test on change checkbox with checked true', () => {
      const { getAllByTestId } = renderComponent({
        ...defaultProps,
        question: {
          ...defaultProps.question,
          type: 'checkbox'
        }
      });
      const checkbox = getAllByTestId('checkbox-input')[0];
      fireEvent.change(checkbox, { checked: true, index: 0 });
    });
  });
});
