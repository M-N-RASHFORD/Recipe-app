import React from 'react';
import RecipeComponent from '../Components/Recipe';
import { apiKey } from '../Components/Api';

const Search = () => {
    const [searchRecipe, setSearchRecipe] = React.useState('');
    const [results, setResults] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchRecipe}&number=30&offset=0`)
        .then(response => response.json())
        .then((data) => {
            setResults(Array.isArray(data.results)? data.results: []);
        });
    }, [searchRecipe]);
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter ingredient, nutrient or key word"
                    onChange={(event) => {setSearchRecipe(event.target.value)}}
                />
             </form>
             <div>
                <RecipeComponent recipes={results}/>
             </div>
        </div>
    );
}

export default Search;
