import React from 'react';
import './App.css';

console.log(process.env.REACT_APP__API_KEY)

function App() {
  return (
    <div className="App">
     <div id="daysDiv">
      <div id="mondayDiv">
         <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="tuesdayDiv">
        <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="wednesdayDiv">
        <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="thursdayDiv">
        <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
      </div>
      <div id="fridayDiv">
      <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
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
