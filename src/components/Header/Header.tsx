import React, { FC } from 'react';
import styles from './Header.module.scss';
import Cart from '../../assets/Header/cart.svg';
import Tag from '../../assets/Header/tag.svg';
import Search from '../../assets/Header/search.svg';

const Header: FC = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>React</div>
            <div className={styles.location}>
                <img src={Tag} alt="tag" />
                <p className={styles.place}>Александровск-Са...</p>
            </div>
            <div className={styles.authUser}>
                <div className={styles.inputSearch}>
                    <input type="text" placeholder="Поиск бренда, товара, категории..."/>
                    <div className={styles.searchButton}>
                        <img src={Search} alt="search" />
                    </div>
                </div>    
                <div className={styles.cart}>
                    <img src={Cart} alt="Cart" />
                    <div className={styles.productsCount}>10+</div>
                </div>
                <div className={styles.avatar}></div>                
            </div>
        </header>
    )
}

export default Header;
