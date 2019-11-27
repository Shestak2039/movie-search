import React from 'react';

import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.header__title}>
            Movie Search
        </h1>
    </header>
);

export default Header;