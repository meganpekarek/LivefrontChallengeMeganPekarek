import './CategoryCard.css';
import React from 'react'

function CategoryCard(props) {
  const {category} = props;

  const goToRecipes = () => {
    props.history.push({
      pathname: '/recipes',
      state: {
        category: category
      }
    })
  }

  return (
      <React.Fragment>
        <div className="categoryCard__wrapper" onClick={goToRecipes}>
          <div className="categoryCard__imgWrapper">
            <img className="categoryCard__img" src={category.strCategoryThumb} alt="food-category" />
          </div>
          <div>
            <header className="categoryCard__header">{category.strCategory}</header>
          </div>
        </div>
      </React.Fragment>
  );
}

export default CategoryCard;
