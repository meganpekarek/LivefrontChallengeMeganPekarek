import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import PageHeader from '../components/PageHeader'
import CategoryCardLoader from '../components/CategoryCard/CategoryCardLoader'

function Categories(props) {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadingCardCount = 8; // Or something else
  let cards = ([...Array(loadingCardCount)].map((e, i) => <CategoryCardLoader key={i} />));
  if(!loading) {
    cards = (
        categories.map(category => (
          <CategoryCard key={category.idCategory} category={category} history={props.history}></CategoryCard>
        ))
    )
  }

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res => {
        setCategories(res.data.categories);
        setLoading(false);
      })
  }, []);

  return (
    <div className="App">
          <PageHeader subheader="Categories" history={props.history} />
          <div className="app__cardsWrapper">
            <div className="app__cardsContainer">
              {cards}
            </div>
          </div>
    </div>
  );
}

export default Categories;
