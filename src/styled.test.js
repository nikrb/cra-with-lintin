import React from 'react';
import renderer from 'react-test-renderer';
import { CoolStyledButton } from './styled';

test('renders cool button', () => {
  const btn = renderer.create(
    <CoolStyledButton>Test</CoolStyledButton>
  ).toJSON();
  expect(btn).toMatchSnapshot();
});
