import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/*******Global state of the app *******
 * Search object
 * Current recipe object
 * shopping list object
 * Liked recipes
*/
const state = {}

const controlSearch = async () => {
    // 1: Get query from view
    const query = searchView.getInput();
    console.log(query); //TODO

    if(query) {
        // 2: New search objectd and add to state
        state.search = new Search(query);

        /// 3: Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        //4 : Search for recipes
        await state.search.getResults();

        //5: render results on UI
        searchView.renderResults(state.search.result);

    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
search.getResults();

