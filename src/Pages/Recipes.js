import React from 'react';
import RecipeComponent from '../Components/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = React.useState([]);
    const loadData = async () => {
        const resp = await fetch('https://api.spoonacular.com/recipes/random?apiKey=7ad225348b6449479c3055f80e810621&number=1&tags=vegetarian,dessert');
        const data = await resp.json();
        setRecipes(data.recipes);
        console.log(recipes);
    }
    React.useEffect(() => {
        loadData();
    }, []);
    return (
        <center>
            <h1>...recipes</h1>
            <RecipeComponent recipes={recipes}/>
        </center>
    );
}

export default Recipes;
