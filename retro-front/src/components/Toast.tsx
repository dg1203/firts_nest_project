import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import ToastContext from '../context/toast/toastContext';

interface ToastMessageInterface {
  showToast: boolean;
  type: string;
}

const ToastMessage = styled.div<ToastMessageInterface>`
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px ${props => props.theme.colors.black};
  width: 360px;
  padding: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.type === 'error'
      ? props.theme.colors.red
      : props.type === 'success'
      ? props.theme.colors.green
      : props.type === 'info'
      ? props.theme.colors.blue
      : props.theme.colors.grey};
  position: fixed;
  bottom: 15px;
  right: 15px;
  transition: .3s;
  opacity: ${props => props.showToast ? 1 : 0};
  transform: translateY(${props => props.showToast ? 0 : 20}px);
  visibility: ${props => props.showToast ? 'visible' : 'hidden'};
`;

const Toast: FunctionComponent = () => {
  const toastContext = useContext(ToastContext);
  const { message, type } = toastContext;

  return (
    <ToastMessage data-testid="toast-message" showToast={message !== '' && type !== ''} type={type}>
      { message }
    </ToastMessage>
  );
};

export default Toast;
