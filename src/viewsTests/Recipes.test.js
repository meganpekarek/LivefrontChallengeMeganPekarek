import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Recipes from "../views/Recipes";
import { act, render, cleanup, waitFor } from "@testing-library/react";
import axios from "axios";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/",
  }),
}));

const recipes = {
  meals: [
    {
      idMeal: "52772",
      strMeal: "testMeal",
      strIngredient1: "Chicken",
      strMeasure1: "1",
      strInstructions: "Instructions to cook this meal are here",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    },
    {
      idMeal: "52773",
      strMeal: "testMeal2",
      strIngredient1: "Beef",
      strMeasure1: "1",
      strInstructions: "Instructions to cook this meal 1 are here",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals2/svprys1511176755.jpg",
    },
    {
      idMeal: "52774",
      strMeal: "testMeal3",
      strIngredient1: "Shrimp",
      strMeasure1: "1",
      strInstructions: "Instructions to cook this meal 2 are here",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals3/svprys1511176755.jpg",
    },
  ],
};

const routeComponentPropsMock = {
  history: {},
  location: {
    state: {
      recipe: {
        idMeal: "52772",
      },
    },
  },
  match: {},
};

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: recipes }));
});
afterEach(cleanup);

describe("Recipes", () => {
  it("displays proper elements when loading state is true", () => {
    const recipes = shallow(<Recipes {...routeComponentPropsMock} />);

    expect(recipes.find("PageHeader")).toHaveLength(1);
    expect(recipes.find(".app__cardsWrapper")).toHaveLength(1);
    expect(recipes.find(".app__cardsContainer")).toHaveLength(1);
    expect(recipes.find("RecipeCardLoader")).toHaveLength(8);
  });
  it("displays the recipe details after content loads", async () => {
    const recipes = shallow(<Recipes {...routeComponentPropsMock} />);

    expect(recipes.find("PageHeader")).toHaveLength(1);
    expect(recipes.find(".app__cardsWrapper")).toHaveLength(1);
    expect(recipes.find(".app__cardsContainer")).toHaveLength(1);

    await act(async () => {
      const { getByText, getAllByRole } = render(
        <Recipes {...routeComponentPropsMock} />
      );
      await waitFor(() => getByText("testMeal"));
      getByText("testMeal2");
      getByText("testMeal3");
      expect(getAllByRole("recipe-card-img")[0]).toHaveAttribute(
        "src",
        "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg"
      );
      expect(getAllByRole("recipe-card-img")[1]).toHaveAttribute(
        "src",
        "https://www.themealdb.com/images/media/meals2/svprys1511176755.jpg"
      );
      expect(getAllByRole("recipe-card-img")[2]).toHaveAttribute(
        "src",
        "https://www.themealdb.com/images/media/meals3/svprys1511176755.jpg"
      );
    });
  });
});
