import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TextCard from "../components/TextCard";
import PageHeader from "../components/PageHeader";
import TextCardLoader from "../components/TextCardLoader";

function ByIngredient(props) {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setIngredients(res.data.meals);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setLoadError(true);
      });
  }, []);

  const loadingCardCount = 16;
  let cards = [...Array(loadingCardCount)].map((e, i) => (
    <TextCardLoader key={i} />
  ));

  if (!loading) {
    let sortedIngredients = ingredients.sort((a, b) => {
      const ingA = a.strIngredient.toUpperCase();
      const ingB = b.strIngredient.toUpperCase();
      if (ingA < ingB) {
        return -1;
      }
      if (ingA > ingB) {
        return 1;
      }
      return 0;
    });

    cards = sortedIngredients.map((ingredient) => (
      <TextCard
        key={ingredient.idIngredient}
        cardText={ingredient.strIngredient}
        queryParamType="i="
        history={props.history}
      />
    ));
  }

  return (
    <div className="App">
      <PageHeader history={props.history} />
      <div className="app__cardsWrapper">
        <div className="app__cardsContainer">
          {!loadError ? cards : <span>Could not load ingredients</span>}
        </div>
      </div>
    </div>
  );
}

export default ByIngredient;
