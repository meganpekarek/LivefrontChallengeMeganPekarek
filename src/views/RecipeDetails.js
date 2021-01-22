import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RecipeDetails(props) {

  const [recipe, setRecipe] = useState({})

  let mealId = ""
  if(props.location.state) {
    mealId = props.location.state.recipe.idMeal;
    localStorage.setItem('meal', JSON.stringify(props.location.state.recipe));
  } else {
    mealId = JSON.parse(localStorage.getItem('meal')).idMeal;
  }

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + mealId)
      .then(res => {
        console.log('RESPONSE');
        console.log(res);
        setRecipe(res.data.meals[0]);
      })
  }, [])

  return (
    <div className="App">
      <React.Fragment>
          <section className="recipeDetails__headerWrapper">
            <header className="recipeDetails__headerText">{recipe.strMeal}</header>
          </section>
          <section className="recipeDetails__contentWrapper">
            <div className="recipeDetails__recipeContent">
              <span className="recipeDetails__recipeContentHeader">Ingredients</span>
              <hr className="recipeDetails__contentSeparator"/>
              <ul>
                
              </ul>
            </div>
            <div className="recipeDetails__contentWrapper">
              <div className="recipeDetails__recipeContent">
                <span className="recipeDetails__recipeContentHeader">Instructions</span>
                <hr className="recipeDetails__contentSeparator"/>
              </div>
            </div>
            <img className="recipeDetails__mealImage" src={recipe.strMealThumb} alt="recipe-cover" />
          </section>
      </React.Fragment>
    </div>
  );
}

export default RecipeDetails;
