import React from "react";
import SignUp from "./SignUp"

export default class SignUpContainer extends React.Component {
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
    return <SignUp />
  };

};
