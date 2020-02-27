import React from 'react';
import styles from './CalendarNav.module.css';

class CalendarNav extends React.Component {

  render() {
    return (
        <nav>
          <div className={styles.header}>
            <div>Prev</div>
            <div>Current
                <div className={styles.menu}>January</div>
                <div className={styles.menu}>February</div>
                <div className={styles.menu}>March</div>
            </div>
            <div>Next</div>
          </div>
        </nav>
    );

  }

}

export default CalendarNav;