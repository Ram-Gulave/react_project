
const SearchInput = ({searchValue, setSearchValue}) => {
    return(
        <input 
            className="search-input"
            type= "text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search"
        />
    )
}
export default SearchInput;