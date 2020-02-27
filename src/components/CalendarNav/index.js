import React from 'react';
import styles from './CalendarNav.module.css';

class CalendarNav extends React.Component {

  render() {
    return (
        <nav>
          <div className={styles.header}>
            <div>Prev</div>
            <div className={styles.dropdown}>
              Current

              <div className={styles.dropdownContent}>
                <div>January</div>
                <div>February</div>
                <div> March</div>
              </div>
            </div>
            <div>Next</div>
          </div>
        </nav>
    );

  }

}

export default CalendarNav;