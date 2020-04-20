import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

console.log(process.env.REACT_APP_WEATHER_API_KEY)

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  return (
    <div className="App">
      <h1 id="topText">Weekly forecast</h1>
     <div id="daysDiv">
      <div id="mondayDiv">
         <div id="topRow">
          <h3>Monday</h3> 
           </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="tuesdayDiv">
        <div id="topRow">
        <h3>Tuesday</h3> 
          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="wednesdayDiv">
        <div id="topRow">
        Wednesday
          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="thursdayDiv">
        <div id="topRow">
        Thursday

          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="fridayDiv">
      <div id="topRow">
      Friday
        </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="saturdayDiv">
      <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="sundayDiv">
      <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>

     </div>
    </div>
  );
}

export default App;
