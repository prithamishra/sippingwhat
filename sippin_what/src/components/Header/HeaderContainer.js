import React from "react";
import Header from "./Header"
import Geocode from "react-geocode";

export default class HeaderContainer extends React.Component {
   constructor(props) {
     super(props);
     this.getLatLong()
   }
  
    getLatLong = () => {
      let lat = ""
      let long = ""
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( (position) => {
        lat = position.coords.latitude
        long = position.coords.longitude
        console.log (lat);
        console.log (long);

        Geocode.setApiKey("AIzaSyA6bL6UJOG73Si1xEJg19r_BJOKMLIFnjM");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();

        // Get address from latidude & longitude.
        Geocode.fromLatLng(lat, long).then(
          response => {
            const address = response.results[0].address_components.find(({
              types
            }) => types.includes('postal_code')).long_name;
            console.log(address);
          },
          error => {
            console.error(error);
          }
        );
        });
    }
    else {
      console.log("hi")
    }
  }

  render() {
    return <Header />
  };
};