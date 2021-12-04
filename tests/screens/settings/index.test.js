import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../../../app/screens/settings';

test('renders correctly', () => {
  const tree = renderer.create(<Settings />).toJSON();
  expect(tree).toMatchSnapshot();
});