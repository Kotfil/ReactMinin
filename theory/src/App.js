import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2010},
      {name: 'Vaz', year: 1998},
      {name: 'Skoda', year: 2007},
      {name: 'Lanos', year: 2007},
      {name: 'Mercedez', year: 2016}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = () => {
      console.log('ClickOn')
  };

  render() {
    const divStyle = {
      textAlign: "center"
    }; 

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change title</button>


        <Car name={cars[0].name} year={cars[0].year}/>
        <Car name={cars[1].name} year={cars[1].year}/>
        <Car name={cars[2].name} year={cars[2].year}/>
        <Car name={cars[3].name} year={cars[3].year}/>
        <Car name={cars[4].name} year={cars[4].year}/>
      </div>
    );
  }
}

export default App;
