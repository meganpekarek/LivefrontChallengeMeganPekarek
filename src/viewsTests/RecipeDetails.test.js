import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
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
            strInstructions: 'Instructions',
            strMealThumb: ''
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
    it('displays the recipe details', async () => {
        await act(async () => {
            const { getByText } = render(<RecipeDetails {...routeComponentPropsMock} />)
            await waitFor(() => getByText('testMeal'))
        })
    })
})