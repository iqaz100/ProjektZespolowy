import React, { Component } from "react";
import { LinkButton } from "../../elements";

class AccountData extends Component {
  render() {
    return (
      <div>
        <h2>Dane konta</h2> 
        <ul>
          <p>Login</p>
          <p>Imię</p>
          <p>Nazwisko</p>
          <p>Email</p>
        </ul>
        <LinkButton link="/home/account/edit-data" name="Edytuj dane"/>
        <LinkButton link="/home/account/edit-password" name="Zmień hasło"/>
      </div>
    );
  }
}
 
export default AccountData;