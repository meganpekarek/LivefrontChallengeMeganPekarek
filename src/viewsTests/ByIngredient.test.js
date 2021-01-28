import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import ByIngredient from '../views/ByIngredient';
import { act, render, cleanup, waitFor } from '@testing-library/react'
import axios from 'axios'

configure({ adapter: new Adapter() });
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/"
    })
}));

const ingredients = {
    meals: [
        {
            strIngredient: 'Avocado',
            idIngredient: '57722'
        },
        {
          strIngredient: 'Oranges',
          idIngredient: '57723'
      },
      {
        strIngredient: 'Apples',
        idIngredient: '57724'
    },
    ]
}

beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve({ data: ingredients }))
})
afterEach(cleanup)

configure({adapter: new Adapter()});

describe('ByIngredient', () => {
  it('displays proper elements before content load', () => {

    const byIngredient = shallow(<ByIngredient />);
    
    expect(byIngredient.find('PageHeader')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsWrapper')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsContainer')).toHaveLength(1);
    expect(byIngredient.find('TextCardLoader')).toHaveLength(16);
  });
  it('displays proper elements after content loads', async () => {
    const byIngredient = shallow(<ByIngredient />);

    expect(byIngredient.find('PageHeader')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsWrapper')).toHaveLength(1);
    expect(byIngredient.find('.app__cardsContainer')).toHaveLength(1);

    await act(async () => {
        const { getByText } = render(<ByIngredient />);
        await waitFor(() => getByText('Avocado'));
        getByText('Oranges');
        getByText('Apples');
    });
});
});