import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import RecipeCard from './RecipeCard';

configure({ adapter: new Adapter() });

describe('RecipeCard', () => {
  it('renders with proper recipe name and image', () => {

    const recipe = {
      strMeal: "test meal",
      strMealThumb: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg"
    };

    const recipeCard = shallow(<RecipeCard recipe={recipe} />);

    expect(recipeCard.find(".recipeCard__header").text()).toEqual('test meal');
    expect(recipeCard.find("img").prop("src")).toEqual('https://www.themealdb.com/images/media/meals/svprys1511176755.jpg');
  });
});