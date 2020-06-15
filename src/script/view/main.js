import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/makanan-list.js";

const main = _ => {
    const searchElement = document.querySelector("search-bar");
    const makananListElement = document.querySelector("makanan-list");

    const onButtonSearchClicked = _ => {
        DataSource.searchMakanan(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        makananListElement.makanans = results;
    };

    const fallbackResult = message => {
        makananListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

}

export default main;