import './TextCard.css';
import React from 'react';

function TextCard(props) {
  const { cardText, queryParamType } = props;

  const goToRecipes = () => {
    props.history.push({
      pathname: '/recipes',
      state: {
        selection: cardText,
        queryParamType: queryParamType
      }
    });
  };

  return (
    <React.Fragment>
      <div className="textCard__wrapper" onClick={goToRecipes}>
        <div>
          <header className="textCard__header">{cardText}</header>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextCard;
