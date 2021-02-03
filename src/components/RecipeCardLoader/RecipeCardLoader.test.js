import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import RecipeCardLoader from './RecipeCardLoader';

configure({ adapter: new Adapter() });

describe('RecipeCardLoader', () => {
  it('displays correct elements while loading', () => {

    const recipeCardLoader = shallow(<RecipeCardLoader />);

    expect(recipeCardLoader.find('.recipeCardLoader__wrapper')).toHaveLength(1);
    expect(recipeCardLoader.find('.recipeCardLoader__header')).toHaveLength(1);
  });
});