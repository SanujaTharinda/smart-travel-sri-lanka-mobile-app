import React from 'react';
import renderer from 'react-test-renderer';
import About from '../../../app/screens/about';

test('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});