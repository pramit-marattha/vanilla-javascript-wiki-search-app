import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";

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

}