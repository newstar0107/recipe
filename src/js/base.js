export const elements = {
    searchForm: document.querySelector(".search"),
    searchLabel: document.querySelector(".search__field"),
    searchList: document.querySelector(".results__list"),
    resultSearchEvent: document.querySelector(".results"),
    recipeSearchEvent: document.querySelector(".recipe"),
};
export const searchEvent = (dev) => {
    const loaderHtml = `
<div class="loader">
    <svg>
        <use href="img/icons.svg#icon-cw"></use>
    </svg>
</div>
    `;
    if (dev === 0) elements.resultSearchEvent.insertAdjacentHTML("beforeend", loaderHtml);
    else elements.recipeSearchEvent.insertAdjacentHTML("beforeend", loaderHtml);
};
export const clearEvent = () => {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
};
