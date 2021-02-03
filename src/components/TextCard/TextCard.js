import './TextCard.css';
import React from 'react';

function TextCard(props) {
  const { cardText, queryParamType } = props;

  const goToRecipes = () => {
    props.history.push({
      pathname: '/recipes/' + cardText,
      state: {
        selection: cardText,
        queryParamType: queryParamType
      }
    });
  };

  return (
      <div role="button" className="textCard__wrapper" onClick={goToRecipes}>
          <header className="textCard__header">{cardText}</header>
      </div>
  );
};

export default TextCard;
