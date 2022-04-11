import React, { FC } from 'react';
import styles from './Cart.module.scss';
import Bag from '../../../assets/Content/Cart/bag.svg';
import Bin from '../../../assets/Content/Cart/cart.svg';
import Percent from '../../../assets/Content/Cart/percent.svg';
import Statistic from './Statistic';
import CartOrder from './CartOrder';

const cartOrdersArray: Array<boolean> = [true, false, false, false, false];

const Cart: FC = (props) => {
    const cartOrdersElements = cartOrdersArray.map((value: boolean) => (
        <CartOrder>
            {value && <Statistic/>}
        </CartOrder>
    ))
    return (
        <main className={styles.cartContainer}>
            <div className={styles.titlesWrapper}>
                <div className={styles.cartTitle}>
                    Корзина
                </div>
                <div className={styles.cartClear}>
                    Очистить корзину
                </div>
            </div>
            <div className={styles.cartWrapper}>
                <div className={styles.cartHeader}>
                    <div className={styles.goodsTitle}>
                        Xiaomi
                    </div>
                    <div className={styles.costWrapper}>
                        <div className={styles.costText}>
                            Стоимость корзины
                        </div>
                        <div className={styles.price}>
                            1 185 000 &#8381;
                        </div>
                    </div>
                    <button className={styles.checkoutBtn}>
                        Оформить
                    </button>
                    <div className={styles.imagesWrapper}>
                        <img className={styles.bag} src={Bag} alt="Bag" />
                        <img className={styles.bin} src={Bin} alt="Bin" />
                        <img className={styles.percent} src={Percent} alt="Percent" />
                    </div>
                </div>
                
                <div className={styles.cartOrders}>
                    { cartOrdersElements }                   
                </div>
            </div>
        </main>
    )
}

export default Cart;
