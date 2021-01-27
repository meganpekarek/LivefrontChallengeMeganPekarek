import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextCard from '../components/TextCard'
import PageHeader from '../components/PageHeader'
import TextCardLoader from '../components/TextCardLoader'

function ByIngredient(props) {

    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then(res => {
                setIngredients(res.data.meals);
                setLoading(false);
            })
    }, []);

    const loadingCardCount = 16;
    let cards = ([...Array(loadingCardCount)].map((e, i) => <TextCardLoader key={i} />));

    if(!loading) {
        let sortedIngredients = ingredients.sort((a, b) => {
            var ingA = a.strIngredient.toUpperCase();
            var ingB = b.strIngredient.toUpperCase();
            if (ingA < ingB) {
                return -1;
            }
            if (ingA > ingB) {
                return 1;
            }
            return 0;
        });
    
        cards = (
            sortedIngredients.map(ingredient => (
                <TextCard key={ingredient.idIngredient} cardText={ingredient.strIngredient} queryParamType="i=" history={props.history}></TextCard>
            ))
        );
    }

    return (
        <div className="App">
            <PageHeader history={props.history} />
            <div className="app__cardsWrapper">
                <div className="app__cardsContainer">
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default ByIngredient;
