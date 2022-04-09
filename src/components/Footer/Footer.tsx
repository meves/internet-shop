import React, { FC } from 'react';
import styles from './Footer.module.scss';
import Instagram from '../../assets/Footer/instagram.svg';
import Facebook from '../../assets/Footer/facebook.svg';
import VK from '../../assets/Footer/vk.svg';
import AppStore from '../../assets/Footer/GooglePlay.svg';
import GooglePlay from '../../assets/Footer/AppStore.svg';

const Footer: FC = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.otherInfo}>
                <div className={styles.title}>
                    React
                </div>
                <div className={styles.socials}>
                    <p className={styles.text}>
                        Присоединяйтесь к нам
                    </p>
                    <div className={styles.icons}>
                        <a className={styles.link} href="https://facebook.com">
                          <img src={Facebook} alt="Facebook" />                        
                        </a>
                        <a className={styles.link} href="https://vk.com">
                          <img src={VK} alt="VK" />
                        </a>
                        <a className={styles.link} href="https://instagram.com">
                          <img src={Instagram} alt="Instagram" />                        
                        </a>
                    </div>
                </div>
                <div className={styles.mobiles}>
                    <p className={styles.text}>
                        Устанавливайте приложение
                    </p>
                    <div className={styles.logos}>
                        <a className={styles.link} href="https://play.google.com/store">
                          <img src={GooglePlay} alt="GooglePlay" />                        
                        </a>
                        <a className={styles.link} href="https://www.apple.com/ru/app-store/">
                          <img src={AppStore} alt="AppStore" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.legalInfo}>
                <div>&copy; Sionic</div>
                <div>Полтика конфиденциальности</div>
                <div>Правовая информация</div>
            </div>
        </div>
    )
}

export default Footer;
