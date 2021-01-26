import './PageHeader.css';
import React from 'react'
import Logo from '../../images/myMealLogo.svg'

function PageHeader(props) {
  const {subheader} = props;

  const goToHomePage = () => {
    props.history.push('/');
  }

  const goToFilter = (filter) => {
    props.history.push(filter);
  }

  return (
      <React.Fragment>
        <div className="page__headerWrapper">
          <header className="page__headerText" onClick={goToHomePage}>MY <img  className="page__headerLogo" src={Logo} alt="my meal logo" /> MEAL</header>
          {/* <span className="page__subHeader">{subheader}</span> */}
          <div className="page__filtersWrapper">
            <span className="page__filterOption" onClick={() => goToFilter('/')}>By Category</span>
            <span className="page__filterOption" onClick={() => goToFilter('/byingredient')}>By Ingredient</span>
            <span className="page__filterOption" onClick={() => goToFilter('/byregion')}>By Region</span>
          </div>
        </div>
      </React.Fragment>
  );
}

export default PageHeader;