import React from 'react';
import renderer from 'react-test-renderer';
import Category from '../../../app/screens/category';

test('renders correctly', () => {
  const tree = renderer.create(<Category />).toJSON();
  expect(tree).toMatchSnapshot();
});