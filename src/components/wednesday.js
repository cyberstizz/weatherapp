import React from 'react';
import './App.css';

export default class Wednesday extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data: []
        }
    }
    
    
    render(){
  return (
    <div id="mondaySolo" >
      <h1> Wednesday forecast</h1>
         <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
    </div>
  );
}

}