import React from 'react';
import renderer from 'react-test-renderer';
import TripPlanner from '../../../app/screens/tripPlanner';

test('renders correctly', () => {
  const tree = renderer.create(<TripPlanner />).toJSON();
  expect(tree).toMatchSnapshot();
});