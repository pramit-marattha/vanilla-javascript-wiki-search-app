import { setSearchFocus,showClearTextButton,clearSearchText,clearPushListener } from "./searchBar.js";
import { getSearchTerm,retrieveSearchResults } from "./dataFunctions.js";
import {buildSearchResults, deleteSearchResults,clearStatsLine,setStatsLine} from "./searchResults.js"

document.addEventListener("readystatechange",(event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () =>{
    //focus on text input 
    setSearchFocus();
    // 3 listeners 
    const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);
  // 
  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener)
  //
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch)
}

// procude workflow function 
const submitTheSearch = (event) =>{
    event.preventDefault();
    // delete results 
    deleteSearchResults();
    // process 
    processTheSearch();

    // set the focus
    setSearchFocus();
};

//procedural function 
const processTheSearch = async () =>{
    // clear the stats 
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray)// building search results
    // set stats
    setStatsLine(resultArray.length);
};