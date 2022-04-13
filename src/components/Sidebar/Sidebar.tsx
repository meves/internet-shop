import React, { FC } from 'react';
import styles from './Sidebar.module.scss';
import Discounts from '../../assets/Sidebar/discounts.svg';

const Sidebar: FC = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.freeGoods}>
                <div className={styles.discounts}>
                    <img src={Discounts} alt="Discounts" />
                </div>
                <div className={styles.textBlock}>
                    <p className={styles.text}>
                        Получай товары БЕСПЛАТНО!                    
                    </p>
                    <button className={styles.button}>
                        Узать подробнее
                    </button>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Sidebar;
