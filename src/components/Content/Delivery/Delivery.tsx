import React, { FC } from 'react';
import styles from './Delivery.module.scss';

const Delivery: FC = (props) => {
    return (
        <main className={styles.delivery}>
            <div className={styles.title}>
                Доставка
            </div>
            <form className={styles.deliveryForm}>
                <div className={styles.info}>
                    <div className={styles.deliveryWrapper}>
                        <div className={styles.deliveryTime}>
                            Когда доставить?
                        </div>
                        <div className={styles.select}>
                            <div>
                                Выберите дату
                            </div>
                            <div>
                                Выберите время
                            </div>
                        </div>                        
                    </div>   
                    <div className={styles.inputWrapper}>
                        <div className={styles.title}>
                            Имя
                        </div>
                        <div className={styles.input}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.title}>
                            Телефон    
                        </div>
                        <div className={styles.input}>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className={styles.total}>
                    <div className={styles.totalInfo}>
                        <div className={styles.totalInfoRow}>
                            <div className={styles.text}>Стоимость товаров</div>
                            <div className={`${styles.text} ${styles.bigText}`}>200 584&#8381;</div>
                        </div>
                        <div className={styles.totalInfoRow}>
                            <div className={styles.text}>Стоимость доставки</div>
                            <div className={styles.text}>200&#8381;</div>
                        </div>
                        <div className={styles.totalInfoRow}>
                            <div className={`${styles.text} ${styles.bigText}`}>Итого</div>
                            <div className={`${styles.text} ${styles.boldText}`}>200 784&#8381;</div>
                        </div>
                    </div>
                    <div className={styles.makeOrder}>                        
                        <button>
                            Сделать заказ
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Delivery;
