import Skeleton from "react-loading-skeleton";
import React from "react";
import "./RecipeDetailsLoader.css";
import "../../App.css";

function RecipeDetailsLoader() {
  const ingredientCount = 8;

  return (
    <React.Fragment>
      <section role="loaderHeader" className="recipeDetails__headerWrapper">
        <Skeleton className="app__backArrow" />
      </section>
      <section className="recipeDetails__contentWrapper">
        <div className="recipeDetails__recipeContent">
          <Skeleton className="recipeDetails__recipeContentHeader" />
          <ul className="recipeDetails__ingredientsList recipeDetailsLoader__ingredientsList">
            {[...Array(ingredientCount)].map((e, i) => (
              <Skeleton className="recipeDetailsLoader__ingredients" key={i} />
            ))}
          </ul>
        </div>
        <div className="recipeDetails__recipeContent">
          <Skeleton className="recipeDetails__recipeContentHeader" />
          <Skeleton className="recipeDetails__instructionsText recipeDetailsLoader__instructions" />
        </div>
        <Skeleton
          className="recipeDetailsLoader__mealImage"
          height={250}
          width={250}
        />
      </section>
    </React.Fragment>
  );
}

export default RecipeDetailsLoader;
