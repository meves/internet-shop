import React, { FC } from 'react';
import styles from './Cart.module.scss';

const Statistic: FC = (props) => {
    return (
        <div className={styles.statistics}>
            <div className={`${styles.sold} ${styles.statistic}`}>
                120 шт.
            </div>
            <div className={`${styles.time} ${styles.statistic}`}>
                за 12:48:35
            </div>
            <div className={styles.total}>
                Куплено 150 шт.
            </div>
        </div>
    )
}

export default Statistic;
