import React from 'react';

import Movie from './Movie/Movie'

import styles from './Movies.module.css';

const Movies = ({ movies }) => (
    <ul className={ styles.movies }>
        {
            movies.map(({ Title, imdbID, Poster, Year }) => (
                <Movie title={ Title } key={ imdbID } poster={ Poster } year={ Year } />
            ))
        }
    </ul>
)

export default Movies;