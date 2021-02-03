import './CategoryCard.css';
import React from 'react';

function CategoryCard(props) {
  const { category } = props;

  const goToRecipes = () => {
    props.history.push({
      pathname: '/recipes',
      state: {
        selection: category.strCategory,
        queryParamType: "c="
      }
    });
  };

  return (
    <div role="button" className="categoryCard__wrapper" onClick={goToRecipes}>
      <div className="categoryCard__imgWrapper">
        <img role="category-card-img" className="categoryCard__img" src={category.strCategoryThumb} alt="category cover" />
      </div>
      <div>
        <header className="categoryCard__header">{category.strCategory}</header>
      </div>
    </div>
  );
};

export default CategoryCard;
