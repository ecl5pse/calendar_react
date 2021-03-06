import React from 'react';
import styles from './CalendarNav.module.scss';

class CalendarNav extends React.Component {
    constructor(props) {
      super(props);
    }




  render() {
    return (
        <nav>
          <div className={styles.header}>
            <div>Prev</div>
            <div className={styles.dropdown}>
              March
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