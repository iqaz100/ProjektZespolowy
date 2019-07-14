import React, { Component } from "react";
import { TextInput } from "../../elements";
import LoginButton from "../../elements/LoginButton";

class ChangePassword extends Component {

  EditUserData() {
    var oldPassField = document.getElementById('oldPassField')
    var newPassField1 = document.getElementById('newPassField1')
    var newPassField2 = document.getElementById('newPassField2')

    if(newPassField1.value === newPassField2.value)
      {
      if(oldPassField.checkValidity() && newPassField1.checkValidity() && newPassField2.checkValidity()){
        alert("Zmieniono hasło");
        window.location.href = ('#/home/account/account-data');
      } else {
        alert("Conajmniej jedno pole nie jest wypełnione prawidłowo");
      }
    } else {
      alert("Podane hasła nie są jednakowe");
    }
  }

  render() {
    return (
      <div>
        <h2>Zmiana hasła</h2> 
        <TextInput id="oldPassField" type="password" name="password" placeholder="Obecne hasło"/>
        <TextInput id="newPassField1" type="password" name="password" placeholder="Nowe hasło"/>
        <TextInput id="newPassField2" type="password" name="repaeatPassword" placeholder="Powtórz nowe hasło"/>
        <LoginButton func={this.EditUserData.bind(this)} name="Zatwierdź zmiany"/>  
      </div>
    );
  }
}
 
export default ChangePassword;