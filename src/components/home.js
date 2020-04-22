import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const newYork = 5128581;

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mondayImage: "",
      tuesdayImage: "",
      wednesdayImage: "",
      thursdayImage: "",
      fridayImage: "",
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
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${newYork}&appid=${API_KEY}&units=imperial`)
    .then(res => {
      let call = res.data;
      console.log(call)
      this.setState({
      mondayMin: call.list[0].main.temp_min,
      mondayMax: call.list[0].main.temp_max,
      tuesdayMin: call.list[8].main.temp_min,
      tuesdayMax: call.list[8].main.temp_max,
      wednesdayMin: call.list[16].main.temp_min,
      wednesdayMax: call.list[16].main.temp_max,
      thursdayMin: call.list[24].main.temp_min,
      thursdayMax: call.list[24].main.temp_max,
      fridayMin: call.list[32].main.temp_min,
      fridayMax: call.list[32].main.temp_max
      })
    })
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
           </div><div id="imageRow">
             {this.state.mondayImage}
             </div><div id="bottomRow"><br/>Low:{this.state.mondayMin}<br/><br/>High:{this.state.mondayMax}</div>
      </div>
      <div id="tuesdayDiv">
        <div id="topRow">
        <br/>
        <br/>
        <strong><em>Tuesday</em></strong>
        </div><div id="imageRow"></div><div id="bottomRow"><br/>Low:{this.state.tuesdayMin}<br/><br/>High:{this.state.tuesdayMax}</div>
      </div>
      <div id="wednesdayDiv">
        <div id="topRow">
        <br/>
        <br/>
        <strong><em>Wednesday</em></strong>
    
        </div><div id="imageRow"></div><div id="bottomRow"><br/>Low:{this.state.tuesdayMin}<br/><br/>High:{this.state.mondayMax}</div>
      </div>
      <div id="thursdayDiv">
        <div id="topRow">
        <br/>
        <br/>
          <strong><em>Thursday</em></strong>

          </div><div id="imageRow"></div><div id="bottomRow"><br/>Low:{this.state.mondayMin}<br/><br/>High:{this.state.mondayMax}</div>
      </div>
      <div id="fridayDiv">
      <div id="topRow">
      <br/>
      <br/>
      <strong><em>Friday</em></strong>
      </div><div id="imageRow"></div><div id="bottomRow"><br/>Low:{this.state.mondayMin}<br/><br/>High:{this.state.mondayMax}</div>
      </div>

     </div>
    </div>
  );
    }
}

