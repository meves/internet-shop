import React, { FC } from 'react';
import styles from './Orders.module.scss';
import OrderCard from './OrderCard';

const Orders: FC = (props) => {
    return (
        <main className={styles.orders}>
            <div className={styles.title}>
                История заказов
            </div>
            <div className={styles.cards}>
                <OrderCard/>
                <OrderCard/>
                
            </div>
        </main>
    )
}

export default Orders;
