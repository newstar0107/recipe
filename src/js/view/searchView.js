import { elements } from "../base";

// image_url: "http://forkify-api.herokuapp.com/images/pestoa0e7.jpg"
// publisher: "The Pioneer Woman"
// publisher_url: "http://thepioneerwoman.com"
// recipe_id: "47025"
// social_rank: 100
// source_url: "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/"
// title: "Pasta with Pesto Cream Sauce"

const printRecipe = (recipe) => {
    console.log(recipe);
    let htmlText = `<li>
<a class="results__link " href="#${recipe.recipe_id}">
      <figure class="results__fig">
          <img src="${recipe.image_url}" alt="Test">
             </figure>
                <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
      </div>
  </a>
</li>`;
    elements.searchList.insertAdjacentHTML("beforeend", htmlText);
};

export const getInput = () => elements.searchLabel.value;
export const printRecipes = (recipes) => recipes.forEach((el) => printRecipe(el));
export const clearQueryKey = () => (elements.searchLabel.value = "");
export const clearList = () => (elements.searchList.innerHTML = "");
