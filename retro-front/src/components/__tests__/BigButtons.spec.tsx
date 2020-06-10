import React from 'react';
import BigButton from '../BigButton';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '../../utils/theme';

const renderComponent = (props: any) =>
  render(
    <ThemeProvider theme={theme}>
      <BigButton {...props} />
    </ThemeProvider>
  );

describe('<BigButton />', () => {
  it('To match snapshot', () => {
    const { asFragment } = renderComponent({});
    expect(asFragment()).toMatchSnapshot();
  });
});
