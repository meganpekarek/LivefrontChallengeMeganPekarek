import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import PageHeader from "../components/PageHeader";
import CategoryCardLoader from "../components/CategoryCardLoader";

function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setLoadError(true);
      });
  }, []);

  const loadingCardCount = 8;
  let cards = [...Array(loadingCardCount)].map((e, i) => (
    <CategoryCardLoader key={i} />
  ));
  if (!loading) {
    cards = categories.map((category) => (
      <CategoryCard
        key={category.idCategory}
        category={category}
        history={props.history}
      />
    ));
  }

  return (
    <div className="App">
      <PageHeader history={props.history} />
      <div className="app__cardsWrapper">
        <div className="app__cardsContainer">
          {!loadError ? cards : <span>Could not load categories</span>}
        </div>
      </div>
    </div>
  );
}

export default Categories;
