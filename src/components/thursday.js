import React from 'react';
import './App.css';

export default class Thursday extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            data: []
        }
    }
    
    
    render(){
  return (
    <div id="mondaySolo" >
      <h1> Thursday forecast</h1>
         <div id="topRow"></div><div id="imageRow"></div><div id="bottomRow"></div>
    </div>
  );
}

}