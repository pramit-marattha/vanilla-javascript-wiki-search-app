export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm;
}

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
    const wikiSearchResults = await requestData(wikiSearchString);

}

const getWikiSearchString = (searchTerm) => {
    const maxCharacter = getMaxCharacter();
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxCharacter}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const serachString = encodeURI(rawSearchString);
    return serachString;
}

const getMaxCharacter = () => {
    const width = window.innerWidth || document.body.clientWidth;
    let maxCharacter;
    if (width < 414) maxCharacter = 65;
    if (width >= 414 && width < 1400) maxCharacter = 105;
    if (width >= 1400) maxCharacter = 130;
    return maxCharacter;
}

const requestData = async (searchString) => {
    try {
        const response = await fetch(serachString);
        const data = await response.json();
        return data;
    }
}