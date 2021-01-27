import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import Recipes from '../views/Recipes';

configure({adapter: new Adapter()});

const routeComponentPropsMock = {
    history: {},
    location: {
        state: {
            recipe: {
                idMeal: '12345'
            }
        }
    },
    match: {}
}

describe('Recipes', () => {
  it('displays proper elements when loading state is true', () => {

    const recipes = shallow(
        <Recipes
            {...routeComponentPropsMock}
        />
    );

    expect(recipes.find('PageHeader')).toHaveLength(1);
    expect(recipes.find('.app__cardsWrapper')).toHaveLength(1);
    expect(recipes.find('.app__cardsContainer')).toHaveLength(1);
    expect(recipes.find('RecipeCardLoader')).toHaveLength(8);
  });
});