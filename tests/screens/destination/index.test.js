import React from 'react';
import renderer from 'react-test-renderer';
import Destination from '../../../app/screens/destination';

test('renders correctly', () => {
  const tree = renderer.create(<Destination />).toJSON();
  expect(tree).toMatchSnapshot();
});