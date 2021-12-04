import React from 'react';
import renderer from 'react-test-renderer';
import First from '../../../app/screens/register/firstScreen';

test('renders correctly', () => {
  const tree = renderer.create(<First />).toJSON();
  expect(tree).toMatchSnapshot();
});