import React  from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';



function Data(props) {


  const weekDayShort = moment.weekdaysShort();






  const weekDayShortName = weekDayShort.map(day => {

    return (
        <th key={day} className="week-day">
          {day}
        </th>
    )

  })
  return(
      <div>
        {
          weekDayShortName
        }
      </div>
  )
}


Data.propTypes = {
  data: PropTypes.string,
  isSelect: PropTypes.bool,
  isToday: PropTypes.bool,
  event: PropTypes.arrayOf(PropTypes.shape({
    isIn: PropTypes.bool,
  })),
};

Data.defaultProps = {

  isSelect: false,
  events: [],
};
export default Data;