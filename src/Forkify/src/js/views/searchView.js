import { elements } from './base'

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
    const markup = `
            <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">P${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
}

export const renderResults = recipes => {
    recipes.foreach(renderRecipe)
}