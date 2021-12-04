import React from 'react';
import renderer from 'react-test-renderer';
import Help from '../../../app/screens/help';

test('renders correctly', () => {
  const tree = renderer.create(<Help />).toJSON();
  expect(tree).toMatchSnapshot();
});