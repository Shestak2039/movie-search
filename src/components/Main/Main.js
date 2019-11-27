import React, { useState, useEffect } from 'react';

import Movies from './components/Movies/Movies';
import Search from './components/Search/Search';
import Error from './components/Error/Error';

import {
    API_KEY,
    OMDB_URL
} from './constants'

const Main = () => {
    const [ movies, setMovies ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ error, setError ] = useState('');


    useEffect(() => {
        fetch(`${OMDB_URL}?s=${search || 'iron man'}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(({ Search, Response, Error }) => {
                if (Response === 'False') {
                    setError(Error)
                } else if (Response === 'True') {
                    setMovies(Search)
                    setError('')
                }
            })
    }, [search, error])

    return (
        <>
            <Search setSearch={ setSearch }/>
            {
                error ? <Error error={ error } /> : <Movies movies={ movies } />
            }  
        </>
    )
}

export default Main