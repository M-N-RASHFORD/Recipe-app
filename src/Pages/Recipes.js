import React from 'react';
import RecipeComponent from '../Components/Recipe';

const Recipes = () => {
    const loadData = async () => {
        const resp = await fetch('https://api.spoonacular.com/recipes/random?apiKey=7ad225348b6449479c3055f80e810621&number=1&tags=vegetarian,dessert');
        const data = await resp.json();
        console.log(data);
    }
    React.useEffect(() => {
        loadData();
    }, []);
    return (
        <center>
            <h1>.....</h1>
        </center>
    );
}

export default Recipes;
