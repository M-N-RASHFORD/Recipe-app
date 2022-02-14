import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const RecipeComponent = ({ recipes }) => {
    return (
        <div>
            <ul>
                {recipes.map((recipe) => {
                    return (
                        <li key={recipe.id}>
                            <div>
                                <img scr={recipe.image} width="150" height="200" alt=""/>
                            </div>
                            <h2>{recipe.title}</h2>
                            <p>{recipe.summary}</p>
                            <Link to={recipe.spoonacularSourceUrl}><button type="button">View</button></Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default RecipeComponent;
