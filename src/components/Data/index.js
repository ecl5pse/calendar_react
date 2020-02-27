import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import styles from './Data.module.css';



function Data(props) {


const showData = ()=>{
  const  weekdays = moment.weekdays();

  return weekdays;



};





  return (

    <div>
      {
        showData()
      }
    </div>
  )

}


Data.propTypes = {
  data:PropTypes.string,
  isSelect:PropTypes.bool,
  isToday:PropTypes.bool,
  event:PropTypes.arrayOf(PropTypes.shape({
    isIn:PropTypes.bool
  }))
};


Data.defaultProps = {

  isSelect:false,
  events:[],
};
export default Data;