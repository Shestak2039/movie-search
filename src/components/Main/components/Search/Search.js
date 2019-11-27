import React, { useState } from 'react';

import styles from './Search.module.css';

const Search = ({ setSearch }) => {
    const [ searchValue, setSearchValue ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSearch(searchValue);
    }

    const handleSearchChanges = event => {
        setSearchValue(event.target.value)
    }


    return (
        <form className={ styles['form-search'] } onSubmit={ handleSubmit }>
            <input className={ styles['form-search__text-input'] } onChange={ handleSearchChanges } type="text" />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search;