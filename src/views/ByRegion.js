import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextCard from '../components/TextCard'
import PageHeader from '../components/PageHeader'
import CategoryCardLoader from '../components/CategoryCardLoader'

function ByRegion(props) {

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then(res => {
        setRegions(res.data.meals);
        setLoading(false);
      })
  }, []);

    let cards = (
        regions.map(region => (
          <TextCard key={region.strArea} cardText={region.strArea} queryParamType="a=" history={props.history}></TextCard>
        ))
    )

  return (
    <div className="App">
          <PageHeader subheader="Regions" history={props.history} />
          <div className="app__cardsWrapper">
            <div className="app__cardsContainer">
              {cards}
            </div>
          </div>
    </div>
  );
}

export default ByRegion;
