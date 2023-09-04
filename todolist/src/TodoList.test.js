import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('TodoList snapshot test', () => {
  const { container } = render(<TodoList />);
  expect(container).toMatchSnapshot();
});

test('TodoList smoke test', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Todo List')).toBeInTheDocument();
  });