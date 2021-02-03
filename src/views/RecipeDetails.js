import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "../images/backArrow.svg";
import RecipeDetailsLoader from "../components/RecipeDetailsLoader";

function RecipeDetails(props) {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  let mealId = "";
  if (props.location.state) {
    mealId = props.location.state.recipe.idMeal;
    localStorage.setItem("meal", JSON.stringify(props.location.state.recipe));
  } else {
    mealId = JSON.parse(localStorage.getItem("meal")).idMeal;
  }

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + mealId)
      .then((res) => {
        setRecipe(res.data.meals[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setLoadError(true);
      });
  }, [mealId]);

  let ingredients = [];
  let measurements = [];
  for (const [key, value] of Object.entries(recipe)) {
    if (key.includes("Ingredient") && value !== null && value !== "") {
      ingredients.push(value);
    }
    if (key.includes("Measure") && value !== null && value !== "") {
      measurements.push(value);
    }
  }

  let ingredientsList = [];
  ingredients.forEach((ingredient, index) => {
    ingredientsList.push(measurements[index] + " " + ingredient);
  });

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="App">
      {loading && <RecipeDetailsLoader />}
      {!loading && (
        <React.Fragment>
          <section className="recipeDetails__headerWrapper">
            <button
              className="recipeDetails__backArrow app__backArrow"
              onClick={goBack}
            >
              <img
                className="app__backArrowImg"
                src={BackArrow}
                alt="go back"
              />
            </button>
            <header className="recipeDetails__headerText">
              {!loadError ? recipe.strMeal : "Couldn't load meal"}
            </header>
          </section>
          {!loadError && (
            <section className="recipeDetails__contentWrapper">
              <div className="recipeDetails__recipeContent">
                <span className="recipeDetails__recipeContentHeader">
                  Ingredients
                </span>
                <hr className="recipeDetails__contentSeparator" />
                <ul className="recipeDetails__ingredientsList">
                  {ingredientsList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="recipeDetails__recipeContent">
                <span className="recipeDetails__recipeContentHeader">
                  Instructions
                </span>
                <hr className="recipeDetails__contentSeparator" />
                <p className="recipeDetails__instructionsText">
                  {recipe.strInstructions}
                </p>
              </div>
              <img
                role="recipe-image"
                className="recipeDetails__mealImage"
                src={recipe.strMealThumb}
                alt="recipe cover"
              />
            </section>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default RecipeDetails;
