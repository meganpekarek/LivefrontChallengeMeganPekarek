import './RecipeCard.css';
import React from 'react';

function RecipeCard(props) {
  const { recipe } = props;

  const goToRecipe = () => {
    props.history.push({
      pathname: '/recipe-details',
      state: {
        recipe: recipe
      }
    });
  };

  return (
    <div className="App">
      <React.Fragment>
        <div className="recipeCard__wrapper" onClick={goToRecipe}>
          <img role="recipe-card-img" className="recipeCard__img" src={recipe.strMealThumb} alt="recipe cover" />
          <div className="recipeCard__headerWrapper">
            <header className="recipeCard__header">{recipe.strMeal}</header>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default RecipeCard;