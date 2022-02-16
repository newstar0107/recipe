require("@babel/polyfill");
import Search from "./model/search";
let search = new Search("pasta");
let recipes = search.doSearch().then((r) => r);
console.log(recipes);
