import React, { FC } from 'react';
import styles from './Orders.module.scss';
import Xiaomi from '../../../assets/Content/Orders/xiaomi.svg';
import Pages from '../../../assets/Content/Orders/pages.svg';
import ArrowUp from '../../../assets/Content/Orders/arrow_up.svg';

const OrderCard: FC = (props) => {
    return (
        <section className={styles.card}>
            <img className={styles.arrowUp} src={ArrowUp} alt="arrow-up" />
            <div className={styles.header}>
                <img className={styles.xiaomi} src={Xiaomi} alt="Xiaomi" />
                <div className={styles.name}>
                    <div className={styles.mark}>
                        Xiaomi
                    </div>
                    <div className={styles.date}>
                        21.12.2020
                    </div>
                </div>
                <div className={styles.detail}>
                    Подробнее
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.status}>
                    <div className={styles.cardTitle}>
                        Статус заказа
                    </div>
                    <div className={styles.cardInfo}>
                        Оплачен/Завершен
                    </div>
                </div> 
                <div className={styles.numberWrapper}>
                    <div className={styles.cardTitle}>
                        Номер заказа
                    </div>
                    <div className={styles.orderNumber}>
                        <div className={styles.cardInfo}>
                            &#35;664-333
                        </div>
                        <img className={styles.pagesImage} src={Pages} alt="pages" />
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.goodsCount}>
                    <div className={styles.cardTitle}>
                        Кол-во товаров
                    </div>
                    <div className={styles.cardInfo}>
                        4 шт.
                    </div>
                </div>
                <div className={styles.orderCost}>
                    <div className={styles.cardTitle}>
                        Стоимость заказа
                    </div>
                    <div className={styles.cardInfo}>
                        250 000 &#8381;
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.cardTitle}>
                        Адрес доставки
                    </div>
                    <div className={styles.cardInfo}>
                        ул. Коммунистич...д.1, стр.1
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrderCard;
