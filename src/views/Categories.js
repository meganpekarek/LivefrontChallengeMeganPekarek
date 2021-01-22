import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

function Categories(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res => {
        console.log('RESPONSE');
        console.log(res);
        setCategories(res.data.categories);
      })
  }, []);

  return (
    <div className="App">
      <React.Fragment>
          <div>categories component</div>
          <div className="categories__cardsWrapper">
            {categories.map(category => (
              <CategoryCard key={category.idCategory} category={category}></CategoryCard>
            ))}
          </div>
      </React.Fragment>
    </div>
  );
}

export default Categories;
