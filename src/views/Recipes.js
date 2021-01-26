import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'
import PageHeader from '../components/PageHeader'
import RecipeCardLoader from '../components/RecipeCardLoader'

function Recipes(props) {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  let selectionName = ""
  let queryType = ""
  if(props.location.state) {
    selectionName = props.location.state.selection;
    queryType = props.location.state.queryParamType;
    localStorage.setItem('selection', JSON.stringify(props.location.state.selection));
    localStorage.setItem('queryType', JSON.stringify(props.location.state.queryParamType));
  } else {
    selectionName = JSON.parse(localStorage.getItem('selection'));
    queryType = JSON.parse(localStorage.getItem('queryType'));
  }
   

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?` + queryType + selectionName)
      .then(res => {
        setRecipes(res.data.meals);
        setLoading(false);
      })
  });

  let subheader = selectionName + ' Recipes'

  const loadingCardCount = 8;
  let cards = ([...Array(loadingCardCount)].map((e, i) => <RecipeCardLoader key={i} />));
  if(!loading) {
    if(recipes && recipes.length > 0) {
      cards = (
        recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe}  history={props.history}></RecipeCard>
        ))
      )
    } else {
      cards = <span className="app__infoSpan">No recipes found for your selection</span>
    }
  }

  return (
    <div className="App">
          <PageHeader subheader={subheader} history={props.history} />
          <div className="app__cardsWrapper">
            <div className="app__cardsContainer">
              {cards}
            </div>
          </div>
    </div>
  );
}

export default Recipes;
