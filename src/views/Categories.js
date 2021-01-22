import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

function Categories() {

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
          <ol>
            {categories.map(category => (
              <li key={category.idCategory}>{category.strCategory}</li>
            ))}
          </ol>
          <img src="https://www.themealdb.com/images/category/beef.png"/>
      </React.Fragment>
    </div>
  );
}

export default Categories;
