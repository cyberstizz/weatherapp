import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

console.log(process.env.REACT_APP_WEATHER_API_KEY)

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const newYork = 5128581;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mondayMin: 40,
      mondayMax: 40,
      tuesdayMin: 40,
      tuesdayMax: 40,
      wednesdayMin: 40,
      wednesdayMax: 40,
      thursdayMin: 40,
      thursdayMax: 40,
      fridayMin: 40,
      fridayMax: 40
    }
  }
  componentDidMount(){
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${newYork}&appid=${API_KEY}`)
    .then(res => console.log(res.data))
  }
    render(){
  return (
    <div className="App">
      <h1 id="topText">Weekly forecast</h1>
     <div id="daysDiv">
      <div id="mondayDiv">
         <div id="topRow">
           <br/>
           <br/>
          <strong><em>Monday</em></strong>
           </div><div id="imageRow"></div><div id="bottomRow">{this.state.temperature}</div>
      </div>
      <div id="tuesdayDiv">
        <div id="topRow">
        <br/>
        <br/>
        <strong><em>Tuesday</em></strong>
          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="wednesdayDiv">
        <div id="topRow">
        <br/>
        <br/>
        <strong><em>Wednesday</em></strong>
    
          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="thursdayDiv">
        <div id="topRow">
        <br/>
        <br/>
          <strong><em>Thursday</em></strong>

          </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="fridayDiv">
      <div id="topRow">
      <br/>
      <br/>
      <strong><em>Friday</em></strong>
        </div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>

     </div>
    </div>
  );
    }
}

export default App;
