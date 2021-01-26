import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'
import PageHeader from '../components/PageHeader'
import CategoryCardLoader from '../components/CategoryCardLoader'

function Recipes(props) {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  let categoryName = ""
  if(props.location.state) {
    categoryName = props.location.state.category.strCategory;
    localStorage.setItem('category', JSON.stringify(props.location.state.category));
  } else {
    categoryName = JSON.parse(localStorage.getItem('category')).strCategory;
  }
   

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=` + categoryName)
      .then(res => {
        setRecipes(res.data.meals);
        setLoading(false);
      })
  });

  let subheader = categoryName + ' Recipes'

  const loadingCardCount = 8;
  let cards = ([...Array(loadingCardCount)].map((e, i) => <CategoryCardLoader key={i} />));
  if(!loading) {
    cards = (
      recipes.map(recipe => (
        <RecipeCard key={recipe.idMeal} recipe={recipe}  history={props.history}></RecipeCard>
      ))
    )
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
