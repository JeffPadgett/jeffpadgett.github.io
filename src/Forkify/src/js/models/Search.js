import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;     
    }
    async getResults() {
        const key = 'bba33b7f9da7ca2b284fc64d7181046f';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
            //console.log(this.result);
        }
        catch (error) {
            alert(error);
        }
    }
}