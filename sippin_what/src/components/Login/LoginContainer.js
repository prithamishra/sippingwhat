import React from "react";
import Login from "./Login"

export default class LoginContainer extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    email: '',
    password: '',
  }
}

   getInput = input => {
     console.log(input)
     this.setState({
       email: input
     })
   }



  render() {
    return <Login />
  };

};
