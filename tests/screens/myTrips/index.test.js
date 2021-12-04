import React from 'react';
import renderer from 'react-test-renderer';
import MyTrips from '../../../app/screens/myTrips';

test('renders correctly', () => {
  const tree = renderer.create(<MyTrips />).toJSON();
  expect(tree).toMatchSnapshot();
});