import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'
import PageHeader from '../components/PageHeader'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

function Recipes(props) {

  const [recipes, setRecipes] = useState([]);

  let categoryName = ""
  debugger
  if(props.location.state) {
    categoryName = props.location.state.category.strCategory;
    localStorage.setItem('category', JSON.stringify(props.location.state.category));
  } else {
    categoryName = JSON.parse(localStorage.getItem('category')).strCategory;
  }
   

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=` + categoryName)
      .then(res => {
        console.log('RESPONSE');
        console.log(res);
        setRecipes(res.data.meals);
      })
  }, []);

  let subheader = categoryName + ' Recipes'


  return (
    <div className="App">
          <PageHeader subheader={subheader} />
          <div className="app__cardsWrapper">
            <div className="app__cardsContainer">
              {recipes.map(recipe => (
                <RecipeCard key={recipe.idMeal} recipe={recipe}  history={props.history}></RecipeCard>
              ))}
            </div>
          </div>
    </div>
  );
}

export default Recipes;
