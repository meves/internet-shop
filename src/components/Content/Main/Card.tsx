import React, { FC } from 'react';
import { JsxElement } from 'typescript';
import styles from './Main.module.scss';

type PropsType = {
    tags: Array<JSX.Element>
}

const Card: FC<PropsType> = (props) => {
    return (
        <div className={styles.card} >
            <div className={styles.cardSection}>
                <div className={styles.image}></div>
                <div className={`${styles.tagsBlock} ${styles.tags}`}>
                    { props.tags }
                </div>
                <div className={styles.text}>
                    Длинное название товара в одну строчку п ...
                </div>
                <div className={styles.minPrice}>
                    от 350 000 &#8381;
                </div>
                <div className={styles.discount}>
                    <div className={styles.oldPrice}>
                        450 000 &#8381;
                    </div>
                    <div className={styles.percent}>
                        -10%
                    </div>
                </div>
            </div>
            <button>
                Добавить в корзину
            </button>                            
        </div>
    )
}

export default Card;
