import React from "react";
import {Row, Input, Button} from 'react-materialize'
import "./SignUp.css";

const SignUp = ({
  getInput
}) => {


  return(
<div className="SignUpComponent">
<form  className="signUp container">
        <div className="container">
        <Row>
            <Input name="name" s={12} label="Name"/>
        </Row>
        <Row >
            <Input name="email"  type="email" label="Email" s={12} />
        </Row>
        <Row >
            <Input name="password" type="password" label="Password" s={12} />
        </Row>
        <Row >
            <Button type="submit" waves='light'>Submit</Button>
        </Row> 
         <Row><a className="signUpHere" href="/login">Log In Here!</a></Row>
        </div>
    </form>
    </div>
  )
}
export default SignUp;