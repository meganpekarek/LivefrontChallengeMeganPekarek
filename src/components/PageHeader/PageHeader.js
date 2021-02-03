import './PageHeader.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/myMealLogo.svg';
import BackArrow from '../../images/backArrow.svg';

function PageHeader(props) {

  let loc = useLocation();
  let [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    if (loc.pathname === '/') {
      setActiveFilter('categories');
    } else if (loc.pathname === '/byingredient') {
      setActiveFilter('ingredients');
    } else if (loc.pathname === '/byregion') {
      setActiveFilter('regions');
    };
  }, [loc.pathname]);

  const goToFilter = (filter) => {
    props.history.push(filter);
  };

  const goBack = () => {
    props.history.goBack();
  };

  const subheader = props.subheader ? (
    <span className="page__filterOption">{props.subheader}</span>
  ) : (
    <React.Fragment>
      <span className={`page__filterOption ${activeFilter === 'categories' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/')}>By Category</span>
      <span className={`page__filterOption ${activeFilter === 'ingredients' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/byingredient')}>By Ingredient</span>
      <span className={`page__filterOption ${activeFilter === 'regions' ? "page__filterActive" : ""}`} onClick={() => goToFilter('/byregion')}>By Region</span>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="page__headerWrapper">
        {loc.pathname === '/recipes' && (
          <img className="page__backArrow app__backArrow" src={BackArrow} onClick={goBack} alt="go back" />
        )}
        <header className="page__headerText">MY <img className="page__headerLogo" src={Logo} alt="my meal logo" /> MEAL</header>
        <div className="page__filtersWrapper">
          {subheader}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeader;