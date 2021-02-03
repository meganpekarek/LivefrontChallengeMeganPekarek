import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import RecipeDetailsLoader from "./RecipeDetailsLoader";

configure({ adapter: new Adapter() });

describe("RecipeDetailsLoader", () => {
  it("displays correct elements while loading", () => {
    const recipeDetailsLoader = shallow(<RecipeDetailsLoader />);

    expect(
      recipeDetailsLoader.find(".recipeDetails__headerWrapper")
    ).toHaveLength(1);
    expect(recipeDetailsLoader.find(".app__backArrow")).toHaveLength(1);
    expect(
      recipeDetailsLoader.find(".recipeDetails__contentWrapper")
    ).toHaveLength(1);
    expect(
      recipeDetailsLoader.find(".recipeDetails__recipeContent")
    ).toHaveLength(2);
    expect(
      recipeDetailsLoader.find(".recipeDetails__recipeContentHeader")
    ).toHaveLength(2);
    expect(
      recipeDetailsLoader.find(".recipeDetailsLoader__ingredientsList")
    ).toHaveLength(1);
    expect(
      recipeDetailsLoader.find(".recipeDetailsLoader__ingredients")
    ).toHaveLength(8);
    expect(
      recipeDetailsLoader.find(".recipeDetailsLoader__instructions")
    ).toHaveLength(1);
    expect(
      recipeDetailsLoader.find(".recipeDetailsLoader__mealImage")
    ).toHaveLength(1);
  });
});
