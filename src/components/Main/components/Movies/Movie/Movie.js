import React from 'react';

import styles from './Movie.module.css';

const Movie = ({ title, poster, year }) => (
    <li className={ styles['movies__movie-item'] }>
        <h4 className={ styles['movies__movie-item_title']}>{ title }</h4>
        <img className={ styles['movies__movie-item_poster'] } height="400" src={ poster } alt={ '' }/>
        <p className={ styles['movies__movie-item_year'] }>{ `(${year})` }</p>
    </li>
);

export default Movie;