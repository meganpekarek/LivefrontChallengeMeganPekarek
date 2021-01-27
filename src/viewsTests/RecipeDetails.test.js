import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import RecipeDetails from '../views/RecipeDetails';

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

describe('RecipeDetails', () => {
  it('displays proper elements when loading state is true', () => {

    const recipeDetails = shallow(
        <RecipeDetails
            {...routeComponentPropsMock}
        />
    );

    expect(recipeDetails.find('RecipeDetailsLoader')).toHaveLength(1);
  });
});