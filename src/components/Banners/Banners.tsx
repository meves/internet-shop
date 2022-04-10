import React, { FC } from "react";
import styles from './Banners.module.scss';
import Chocolate from '../../assets/Sidebar/Banners/chocolate.png';
import River from '../../assets/Sidebar/Banners/river.png';

const images = new Array(Chocolate, River, Chocolate);

const Banners: FC = (props) => {
    const banners = images.map((image, i) => (
        <div className={styles.banner} key={String(i)} style={{backgroundImage:`url(${image})`}}>
            <div className={styles.text}>
                Новая коллекция                
            </div>
        </div>
    ))
    return (
        <div className={styles.banners}>
            { banners }
        </div>
    )
}

export default Banners;
