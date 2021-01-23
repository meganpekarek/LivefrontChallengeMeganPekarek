import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import PageHeader from '../components/PageHeader'

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
          <PageHeader subheader="Categories" history={props.history} />
          <div className="app__cardsWrapper">
            <div className="app__cardsContainer">
              {categories.map(category => (
                <CategoryCard key={category.idCategory} category={category} history={props.history}></CategoryCard>
              ))}
            </div>
          </div>
    </div>
  );
}

export default Categories;
