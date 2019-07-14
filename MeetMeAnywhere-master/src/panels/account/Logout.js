import React, { Component } from "react";
import { LinkButton } from "../../elements"
 
class Logout extends Component {
  render() {
    return (
      <div>
        <h2>Wylogowano pomyślnie</h2>
        <p>Chcesz zalogować się ponownie? <LinkButton link="/login" name="Zaloguj"/></p>
      </div>
    );
  }
}
 
export default Logout;