//jshint: esversion 6

import React from "react";
import "./ContactForm.css";
import {Row, Input, Button,} from "react-materialize";
import { PropTypes } from "prop-types";

const ContactForm = (props) => {

    console.log(props)

    return (
        <div className="ContactFormComponent">
    <form  className="contactForm container" onSubmit={props.handleFormSubmit}>
        <div className="container">
            <Row>
                <Input name="name" s={12} label="Name"
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
                <Input name="email"  type="email" label="Email" s={12} 
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
                <Input name="message" type="textarea" label="Message" s={12} 
                    onChange={(e) => props.handleInputChange(e) }/>
            </Row>
            <Row >
            <Button type="submit" waves='light'>Submit</Button>
            </Row>
            
        </div>

    </form>
    </div>
    );
};

ContactForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default ContactForm;