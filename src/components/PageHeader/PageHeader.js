import './PageHeader.css';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../../images/myMealLogo.svg'

function PageHeader(props) {

  let loc = useLocation();
  console.log(loc)

  const [categoriesActive, setCategoriesActive] = useState(false);
  const [ingredientsActive, setIngredientsActive] = useState(false);
  const [regionsActive, setRegionsActive] = useState(false);
  let [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    if(loc.pathname === '/') {
      setActiveFilter('categories')
    } else if (loc.pathname === '/byingredient') {
      setActiveFilter('ingredients')
    } else if (loc.pathname === '/byregion') {
      setActiveFilter('regions')
    }
  })

  const goToFilter = (filter) => {
    props.history.push(filter);
  }

  return (
      <React.Fragment>
        <div className="page__headerWrapper">
          <header className="page__headerText">MY <img  className="page__headerLogo" src={Logo} alt="my meal logo" /> MEAL</header>
          <div className="page__filtersWrapper">
            <span className={`page__filterOption ${activeFilter === 'categories' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/')}>By Category</span>
            <span className={`page__filterOption ${activeFilter === 'ingredients' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/byingredient')}>By Ingredient</span>
            <span className={`page__filterOption ${activeFilter === 'regions' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/byregion')}>By Region</span>
          </div>
        </div>
      </React.Fragment>
  );
}

export default PageHeader;