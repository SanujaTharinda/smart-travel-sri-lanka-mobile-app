import React from 'react';
import renderer from 'react-test-renderer';
import Second from '../../../app/screens/register/secondScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Second />).toJSON();
  expect(tree).toMatchSnapshot();
});