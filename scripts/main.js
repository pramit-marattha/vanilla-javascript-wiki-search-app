import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm,retrieveSearchResults } from "./dataFunctions.js";
import {buildSearchResults, deleteSearchResults} from "./searchResults"

document.addEventListener("readystatechange",(event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () =>{
    //focus on text input 
    setSearchFocus();
    // 3 listeners 
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch)
}

// procude workflow function 

const submitTheSearch = (event) =>{
    event.preventDefault();
    // delete results 

    // process 
    processTheSearch();

    // set the focus
    setSearchFocus();
};


//procedural function 
const processTheSearch = async () =>{
    // clear the stats 
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray)// building search results
    // set stats

};