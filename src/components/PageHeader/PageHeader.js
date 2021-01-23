import './PageHeader.css';
import React from 'react'
import Logo from '../../images/myMealLogo.svg'

function PageHeader(props) {
  const {subheader} = props;

  const goToHomePage = () => {
    props.history.push('/');
  }

  return (
      <React.Fragment>
        <div className="page__headerWrapper">
          <header className="page__headerText" onClick={goToHomePage}>MY <img  className="page__headerLogo" src={Logo} alt="my meal logo" /> MEAL</header>
          <span className="page__subHeader">{subheader}</span>
        </div>
      </React.Fragment>
  );
}

export default PageHeader;