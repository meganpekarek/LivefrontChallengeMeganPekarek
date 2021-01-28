import React from 'react';
import RecipeDetails from '../views/RecipeDetails';
import { act, render, cleanup, waitFor } from '@testing-library/react'
import axios from 'axios'


const recipe = {
    meals: [
        {
            idMeal: '52772',
            strMeal: 'testMeal',
            strIngredient1: 'Chicken',
            strMeasure1: '1',
            strInstructions: 'Instructions to cook this meal are here',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg'
        }
    ]
}

const routeComponentPropsMock = {
    history: {},
    location: {
        state: {
            recipe: {
                idMeal: '52772'
            }
        }
    },
    match: {}
}
beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: recipe }))
})
afterEach(cleanup)

describe('RecipeDetails', () => {
    it('displays the loading screen before content loads', async () => {
        await act(async () => {
            const { getByRole } = render(<RecipeDetails {...routeComponentPropsMock} />);
            getByRole('loaderHeader');
        });
    });
    it('displays the recipe details after content loads', async () => {
        await act(async () => {
            const { getByText, getByRole } = render(<RecipeDetails {...routeComponentPropsMock} />);
            await waitFor(() => getByText('testMeal'));
            getByText('Instructions');
            getByText('Instructions to cook this meal are here');
            getByText('Ingredients');
            getByText('1 Chicken');
            expect(getByRole('recipe-image')).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg');
        });
    });
});