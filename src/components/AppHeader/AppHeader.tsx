
import React from 'react';
import styles from './header.module.css';

import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';


class AppHeader extends React.Component {



  render() {
    return (
      <header className={`${styles.header}`}>

        <a href="/" className={`${styles.burgerIcon} ${styles.link} ${styles.link_active}`}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2">Конструктор</p>
        </a>

        <a href="/" className={`${styles.listIcon} ${styles.link} ${styles.link_active}`}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Лента заказов</p>
        </a>

        <Logo />

        <a href="/" className={`${styles.profileIcon} ${styles.link} ${styles.link_active}`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </a>

      </header>
    )
  }
}
export default AppHeader;
