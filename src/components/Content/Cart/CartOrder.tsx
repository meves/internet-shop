import React, { FC } from 'react';
import styles from './Cart.module.scss';
import Phones from '../../../assets/Content/Cart/phones.svg';
import Delete from '../../../assets/Content/Cart/delete.svg';
import Minus from '../../../assets/Content/Cart/minus.svg';
import Plus from '../../../assets/Content/Cart/plus.svg';

const CartOrder: FC = (props) => {
    return (
        <div className={styles.cartOrder}>
                        <img className={styles.phonesPhoto} src={Phones} alt="Phones" />
                        <div className={styles.description}>
                            Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый
                            {props.children}
                        </div>
                        <div className={styles.count}>
                            <button>
                                <img src={Minus} alt="minus" />
                            </button>
                            <span className={styles.number}>25</span>
                            <button>
                                <img src={Plus} alt="plus" />
                            </button>
                        </div>
                        <div className={styles.prices}>
                            <div className={styles.minPrice}>
                                от 350 000 &#8381;
                            </div>
                            <div className={styles.oldPrice}>
                                450 000 &#8381;
                            </div>
                        </div>
                        <img className={styles.delete} src={Delete} alt="delete item" />
                    </div>
    )
}

export default CartOrder;
