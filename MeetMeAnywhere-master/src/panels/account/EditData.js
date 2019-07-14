import React, { Component } from "react";
import { TextInput } from "../../elements";
import LoginButton from "../../elements/LoginButton";

class EditData extends Component {

  EditUserData() {
    var login = document.getElementById('loginField')
    var name = document.getElementById('nameField')
    var surname = document.getElementById('surnameField')
    var email = document.getElementById('emailField')

      if(login.checkValidity() && name.checkValidity() && surname.checkValidity() && email.checkValidity()){
        alert("Login: " + login.value + "\nImię: " + name.value + "\nNazwisko: " + surname.value + "\nemail: " + email.value);
        window.location.href = ('#/home/account/account-data');
      } else {
        alert("Conajmniej jedno pole nie jest wypełnione prawidłowo");
      }
  }

  render() {
    return (
      <div>
        <h2>Edycja danych konta</h2> 
        <TextInput id="loginField" type="text" name="login" placeholder="Login"/>
        <TextInput id="nameField" type="text" name="name" placeholder="Imię"/>
        <TextInput id="surnameField" type="text" name="surname" placeholder="Nazwisko"/>
        <TextInput id="emailField" type="email" name="email" placeholder="e-mail"/>
        <LoginButton func={this.EditUserData.bind(this)} name="Zatwierdź zmiany"/>  
      </div>
    );
  }
}
 
export default EditData;