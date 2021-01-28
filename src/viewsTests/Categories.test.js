import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Categories from '../views/Categories';
import { act, render, cleanup, waitFor } from '@testing-library/react'
import axios from 'axios'

configure({ adapter: new Adapter() });
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/"
  })
}));

const categories = {
  categories: [
    {
      idCategory: '52772',
      strCategory: 'testMeal',
      strCategoryThumb: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg'
    },
    {
      idCategory: '52773',
      strCategory: 'testMeal2',
      strCategoryThumb: 'https://www.themealdb.com/images/media/meals2/svprys1511176755.jpg'
    },
    {
      idCategory: '52774',
      strCategory: 'testMeal3',
      strCategoryThumb: 'https://www.themealdb.com/images/media/meals3/svprys1511176755.jpg'
    }
  ]
}

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: categories }))
})
afterEach(cleanup)

describe('Categories', () => {
  it('displays proper elements before cards load', () => {

    const categories = shallow(<Categories />);

    expect(categories.find('PageHeader')).toHaveLength(1);
    expect(categories.find('.app__cardsWrapper')).toHaveLength(1);
    expect(categories.find('.app__cardsContainer')).toHaveLength(1);
    expect(categories.find('CategoryCardLoader')).toHaveLength(8);
  });
  it('displays proper elements after content loads', async () => {
    const categories = shallow(<Categories />);

    expect(categories.find('PageHeader')).toHaveLength(1);
    expect(categories.find('.app__cardsWrapper')).toHaveLength(1);
    expect(categories.find('.app__cardsContainer')).toHaveLength(1);

    await act(async () => {
      const { getByText, getAllByRole } = render(<Categories />);
      await waitFor(() => getByText('testMeal'));
      getByText('testMeal2');
      getByText('testMeal3');
      expect(getAllByRole('category-card-img')[0]).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg');
      expect(getAllByRole('category-card-img')[1]).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals2/svprys1511176755.jpg');
      expect(getAllByRole('category-card-img')[2]).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals3/svprys1511176755.jpg');
    });
  });
});