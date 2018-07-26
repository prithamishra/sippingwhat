import React from "react";
import Homepage from "./Homepage"

export default class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInput : " "
    }
  }

 

  getInput = input => {
    console.log(input)
    this.setState({
      foodInput: input
    })
  }

  getResults = () => {
    console.log(this.state.foodInput)
  }

  render() {
    return <Homepage 
      getInput={this.getInput} 
      getResults={this.getResults}
      getLatLong={this.getLatLong} />
  };
};


