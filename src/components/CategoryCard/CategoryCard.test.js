import React from 'react';
import renderer from 'react-test-renderer';
import CategoryCard from './CategoryCard';

test('Card color changes on hover', () => {
  const categoryObj = {
      strCategory: 'testCat',
      strCategoryDescription: 'description of testCat',
      strCategoryThumb: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'
  }
  const component = renderer.create(
    <CategoryCard category={categoryObj}></CategoryCard>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  console.log(tree)
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});