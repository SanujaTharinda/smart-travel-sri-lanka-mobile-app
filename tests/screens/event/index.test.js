import React from 'react';
import renderer from 'react-test-renderer';
import Event from '../../../app/screens/event';

test('renders correctly', () => {
  const tree = renderer.create(<Event />).toJSON();
  expect(tree).toMatchSnapshot();
});