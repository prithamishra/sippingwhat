import React from "react";
import {Row, Col, Button, Input} from 'react-materialize'
import "./Homepage.css";

const Homepage = ({
    getInput,
    getResults,
    getLatLong
  }) => {

  return ( 
    <div className="HomepageComponent">
      <Row className="container foodInput">
        <div>
        <form >
        <Col s={8}>
        <Input onChange={e => getInput(e.target.value)} s={12} name="food" className="food" type="text" label="Enter a food and find a wine" />
        </Col>
        <Col className="submitButton" s={4}>
        <Button onClick={e => getResults( e.preventDefault())}  onKeyPress={e => getResults( e.preventDefault())} s={12} waves='light'  type="submit"  value="submit">Get to   Sippin</Button>
        </Col>
        </form>
        </div>
      </Row>
    </div>
  
)
};

export default Homepage;

