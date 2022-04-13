import React, { FC } from 'react';
import styles from './Main.module.scss';
import Ryzen from '../../../assets/Content/ryzen.png';
import Card from './Card';

const tagsNames = [
    {name: 'Игрушка', color: 'accent-blue'},
    {name: 'Мартышка', color: 'accent-green'},
    {name: 'Мишка', color: 'accent-yellow'},
    {name: 'Подарок', color: 'accent-light-pink'},
    {name: 'Подарок коллегам', color: 'accent-yellow'},
    {name: 'День рождения Гриши', color: 'transparent'}
];

const cardsArray: Array<number> = [];
for (let i = 0; i < 16; i++) {
    cardsArray.push(i);
}

const Main: FC = (props) => {
    const tags = tagsNames.map((tag, i) => (
        <div className={styles.tag} key={String(i)} style={{backgroundColor:`var(--${tag.color})`}}>
            { tag.name }
        </div>
    ));
    return (
        <main className={styles.main}>
            <div className={styles.categoryWrapper}>
                <div className={styles.titles}>
                    <div className={styles.categoryTitle}>
                        Категории товаров
                    </div>
                    <div className={styles.settingsTitle}>
                        Настройки
                    </div> 
                </div>
                <div className={styles.tags}>
                    { tags }
                </div>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={styles.cards}>
                    {cardsArray.map(i => (
                        <Card key={String(i)} tags={tags}/>
                    ))}
                </div>
                <div className={styles.moreBtn}>
                    <button>
                        Показать больше товаров
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Main;
