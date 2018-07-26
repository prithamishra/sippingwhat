import React from "react";
import {Row, Input, Button} from 'react-materialize'
import "./Login.css";

const Login = ({
  getInput
}) => {


  return(
<div className="LoginComponent">
<form  className="loginForm container">
        <div className="container">
            <Row >
                <Input name="email"  type="email" label="Email" s={12} 
                   />
            </Row>
            <Row >
                <Input name="password" type="password" label="Password" s={12} 
                   />
            </Row>
            <Row >
            <Button type="submit" waves='light'>Submit</Button>
            </Row>
            <Row><a className="signUpHere" href="/signup">Sign Up Here!</a></Row>
        </div>

    </form>
    </div>
  )
}
export default Login;