import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({ inputSearch, setInputSearch }) => {


    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search products...' value={inputSearch}
                onChange={(event) => { setInputSearch(event.target.value) }} />
            <FaSearch />

        </div>
    )
}

export default SearchInput