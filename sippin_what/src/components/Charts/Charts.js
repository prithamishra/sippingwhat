import React from "react";
import {Row, Col, Button, Input} from 'react-materialize'
import "./Charts.css";

const Charts = ({
    foodCount,
    ZipCount,
    AgeCount,
    FirstMatchCount
  }) => {

  return ( 
    <div className="Charts">
      <Row className="container charts">
      </Row>
    </div>
)
};

export default Charts;