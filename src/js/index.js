//require("@babel/polyfill");

import { clearEvent, elements, searchEvent } from "./base";

import Search from "./model/search";
import * as searchView from "./view/searchView";

/**
 * Web app төлөв
 * - Хайлтын query, үр дүн
 * - Тухайн үзүүлж байгаа жор
 * - Лайкласан жорууд
 * - Захиалж байгаа жорын найрлаганууд
 */
let state = {};

const controlSearch = async () => {
    // console.log(" pressed");
    //1.Хайх лэйбэл дээр утгыг уншиж авна.
    const query = searchView.getInput();
    //const query = "pasta";
    searchView.clearList();
    // console.log(query);
    if (query) {
        // лэйбэл дээр утга байгаа эсэхийг шалгаж дараагйин үйлдэл хйинэ.
        //2.Уншсан утгаараа хайлтын обект үүсгэнэ.
        state.search = new Search(query);
        //3.үүсгэсэн обектоороо хайлт хийнэ.
        searchEvent(0);
        await state.search.doSearch();
        searchView.clearQueryKey();
        searchView.clearList();
        //4.хайлтын үр дүнг эмхэлнэ.
        //5.Бэлэн болсон датаг дэлэгцэнд хэвлэнэ.
        if (state.search.recipes === undefined) alert("Хайлтаар үр дүн олдсонгүй");
        else searchView.printRecipes(state.search.recipes);
        clearEvent();
    }
};

elements.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    controlSearch();
});
