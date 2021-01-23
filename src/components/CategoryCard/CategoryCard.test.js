import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import CategoryCard from './CategoryCard';

configure({adapter: new Adapter()});
test('Category card is displaying correct title', () => {
  // Render a checkbox with label in the document

  const category = {
    strCategory: "test category",
    strCategoryDescription: "test category description",
    strCategoryThumb: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg"
  }

  const categoryCard = shallow(<CategoryCard category={category} />);

  expect(categoryCard.find('.categoryCard__header').text()).toEqual('test category');

  expect(categoryCard.find('.categoryCard__desc').text()).toEqual('test category description');
});