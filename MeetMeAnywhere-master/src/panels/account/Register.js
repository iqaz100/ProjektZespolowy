import React, { Component } from "react";
import { TextInput } from "../../elements"
import LoginButton from "../../elements/LoginButton";
 
class Register extends Component {

  RegisterUser() {
    var login = document.getElementById('loginField')
    var pass1 = document.getElementById('passField1')
    var pass2 = document.getElementById('passField2')
    var name = document.getElementById('nameField')
    var surname = document.getElementById('surnameField')
    var email = document.getElementById('emailField')

    if(pass1.value === pass2.value)
      {
      if(login.checkValidity() && pass1.checkValidity() && pass2.checkValidity() && name.checkValidity() && surname.checkValidity() && email.checkValidity()){
        alert("Login: " + login.value + "\nHasło: " + pass1.value + "\nHasło2: " + pass2.value + "\nImię: " + name.value + "\nNazwisko: " + surname.value + "\nemail: " + email.value);
        window.location.href = ('#/home');
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
        <h2>Rejestracja</h2>  
        <TextInput id="loginField" type="text" name="login" placeholder="Login"/>
        <TextInput id="passField1" type="password" name="password" placeholder="Hasło"/>
        <TextInput id="passField2" type="password" name="repaeatPassword" placeholder="Powtórz hasło"/>
        <TextInput id="nameField" type="text" name="name" placeholder="Imię"/>
        <TextInput id="surnameField" type="text" name="surname" placeholder="Nazwisko"/>
        <TextInput id="emailField" type="email" name="email" placeholder="e-mail"/>
        <LoginButton func={this.RegisterUser.bind(this)} name="Zarejestruj"/>  
      </div>
    );
  }
}
 
export default Register;