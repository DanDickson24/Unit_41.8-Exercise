
import React from 'react';
import { render } from '@testing-library/react';
import ColorBoxMaker from '../ColorBoxMaker';

test('ColorBoxMaker snapshot test', () => {
  const { container } = render(<ColorBoxMaker />);
  expect(container).toMatchSnapshot();
});

test('ColorBoxMaker smoke test', () => {
  const { getByText } = render(<ColorBoxMaker />);
  expect(getByText('Color Box Maker')).toBeInTheDocument();
});
