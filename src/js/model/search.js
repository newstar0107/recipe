require("@babel/polyfill");
import Axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async doSearch() {
        try {
            let result = await Axios("https://forkify-api.herokuapp.com/api/search?q=" + this.query);
            this.recipes = result.data.recipes;
            return this.recipes;
        } catch (error) {
            alert("asuudal garlaa:" + error);
        }
    }
}
