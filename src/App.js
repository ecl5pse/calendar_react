import React       from 'react';
import './App.css';
import CalendarNav from './components/CalendarNav';
import Data        from './components/Data';
import Calendar    from './components/Calendar';


function App() {

  return(
  <span>
  <CalendarNav/>
    <Calendar/>
  </span>
  )

}

export default App;
