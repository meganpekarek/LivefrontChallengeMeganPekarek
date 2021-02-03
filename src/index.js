import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Categories from './views/Categories'
import ByIngredient from './views/ByIngredient'
import ByRegion from './views/ByRegion'
import Recipes from './views/Recipes'
import RecipeDetails from './views/RecipeDetails'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div className="app__wrapper">
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/by-ingredient" component={ByIngredient} />
        <Route path="/by-region" component={ByRegion} />
        <Route path="/recipes/:recipeType" component={Recipes} />
        <Route path="/recipe-details/:mealId" component={RecipeDetails} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();