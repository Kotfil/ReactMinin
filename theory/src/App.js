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
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsGandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })

  }

  onChangeName(name, index) {
    console.log(name,index)
  }
 
  render() {
      console.log('Render')
    const divStyle = {
      textAlign: "center"
    }; 



    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
         onClick={this.toggleCarsGandler}>
             Toggle cars</button>

        { this.state.showCars 
          ?  this.state.cars.map((car, index) => {
            return (
                <Car 
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeName={event => this.onChangeName(event.taget.value,index)}
                />
            )
        })
        : null
    }
      </div>
        );
  }
  }
export default App;
