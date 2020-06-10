import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  width: 100%;
  display: block;
  margin: 15px 0px;
  font-size: 1.5rem;
  cursor: pointer;
  padding-left: 20px;
  position: relative;
`;

const Input = styled.input`
  &:after {
    width: 34px;
    height: 34px;
    background: ${(props) => props.theme.colors.white};
    content: '';
    border: 1px solid ${(props) => props.theme.colors.blue};
    position: absolute;
    border-radius: 3px;
    left: 0;
    top: 0;
  }
  &:checked:before {
    content: 'L';
    width: 34px;
    height: 34px;
    left: 1px;
    top: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    transform: rotateZ(40deg) rotateY(180deg);
    color: ${(props) => props.theme.colors.blue};
  }
`;

interface ChackboxProps {
  onChange: (checked: boolean, index: number) => void;
  label: string;
  idx: number;
}

const Checkbox: React.FC<ChackboxProps> = ({ onChange, label, idx }) => {
  return (
    <Label>
      <Input
        onChange={(event) => onChange(event.target.checked, idx)}
        type="checkbox"
        data-testid="checkbox-input"
      />{' '}
      {label}
    </Label>
  );
};

export default Checkbox;
