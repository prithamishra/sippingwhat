import React from "react";
import {Footer} from 'react-materialize'
import "./Footer.css";

const PageFooter = props => (

<Footer className="footer" copyrights = "2018 Copyright"
  moreLinks={
    <a className="grey-text text-lighten-4 right footer" rel="noopener noreferrer" href="http://www.nathanieljansen.com" target="_blank">Sippin What</a>
  }
>
</Footer>);

export default PageFooter;