import React, { useState } from "react";
import SearchInput from './Components/SearchInput';
import List from './Components/List';
import useDebounce from "./Components/useDebounce";

function Search(){
    const [searchValue, setSearchValue] = useState('');

    const debouncedSearchValue = useDebounce(searchValue, 1000);

    return(
        <>
        <SearchInput 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
        />
        <List searchTerm = {debouncedSearchValue}/>
        
        </>
    )
}
export default Search;