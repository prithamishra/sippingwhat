import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import About from "./components/About";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import LoginContainer from "./components/Login/LoginContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import ChartsContainer from "./components/Charts/ChartsContainer";


class App extends Component {

  render() {
    return (
      
     <div>
      <HeaderContainer />
      < Router >
        <Switch>
            < Route path="//" component={HomepageContainer} />
            < Route path="/about" component={About} />
            < Route path="/contact" component={ContactFormContainer} />
            < Route path="/statistics" component={ChartsContainer} />
             < Route path = "/login"
             component = {
               LoginContainer
             }
             />
             < Route path = "/signup"
             component = {
               SignUpContainer
             }
             />
        </Switch>
        </Router>
        <FooterContainer />
        </div>
        
     
    )
  } 
}

export default App;