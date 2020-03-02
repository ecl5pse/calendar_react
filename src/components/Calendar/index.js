import React  from 'react';
import moment from 'moment';
import styles from './Calendar.module.scss'



const weekDaysShort=  moment.weekdaysShort();


class  Calendar extends  React.Component{

constructor() {
  super();

  this.state = {
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: null,
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
  }
}
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  showMonth = (e, month) => {
    this.setState({
                    showMonthTable: !this.state.showMonthTable,
                    showDateTable: !this.state.showDateTable
                  });
  };
  setMonth = month => {
    const  monthNo = this.state.allmonths.indexOf(month);
    const  dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
                    dateObject: dateObject,
                    showMonthTable: !this.state.showMonthTable,
                    showDateTable: !this.state.showDateTable
                  });
  };
  MonthList = props => {
   let   months = [];
    props.data.map(data => {
      months.push(
          <td
              key={data}
              className="calendar-month">
            <span>{data}</span>
          </td>
      );
    });

    let  rows = [];
    let   cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });
    return (
        <table className="calendar-month">
          <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
          </thead>
          <tbody>{monthlist}</tbody>
        </table>
    );
  };
  getDates(startDate, stopDate) {
    const dateArray = [];
    const  currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  YearTable = props => {
    const  months = [];
    const  nextten = moment().set("year", props).add("year", 12).format("Y");

    const  tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      months.push(
          <td
              key={data}
              className="calendar-month">

            <span>{data}</span>
          </td>,
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
        <table className="calendar-month">
          <thead>
          <tr>
            <th colSpan="4">Select a Yeah</th>
          </tr>
          </thead>
          <tbody>{yearlist}</tbody>
        </table>
    );
  };

  render() {

    const  weekDayShortName = weekDaysShort.map(day => {
      return <th key={day}>{day}</th>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
          <td key={d} className={`calendar-day ${currentDay}`}>
          <span>{d}
          </span>
          </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
        <div className={styles.calendar}>
            {
              this.month()
            }
          <div className={styles.calendar.date}>
            <table className="calendar-day">
              <thead>
              <tr>{weekDayShortName}</tr>
              </thead>
              <tbody>{daysinmonth}</tbody>
            </table>
          </div>
        </div>
    );
  }

}

export default Calendar;