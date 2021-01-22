import './CategoryCard.css';
import Tooltip from '../Tooltip'
import React from 'react'

function CategoryCard(props) {
  const {category} = props;

  return (
    <div className="App">
      <React.Fragment>
            <div className="categoryCard__wrapper">
              <div className="categoryCard__imgWrapper">
                <img className="categoryCard__img" src={category.strCategoryThumb} alt="food-category-image" />
              </div>
              <div>
                <header className="categoryCard__header">{category.strCategory}</header>
                <p className="categoryCard__desc" dataTitle='Add New Item'>{category.strCategoryDescription}</p>
              </div>
            </div>
      </React.Fragment>
    </div>
  );
}

export default CategoryCard;
