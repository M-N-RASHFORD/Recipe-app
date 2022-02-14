import React from 'react';

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
                            <p>{recipe.creditsText}</p>
                            <a href={recipe.spoonacularSourceUrl}><button type="button">View</button></a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default RecipeComponent;
