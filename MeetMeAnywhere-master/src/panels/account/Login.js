import React, { Component } from "react";
import { TextInput } from "../../elements"
import { NavLink } from "react-router-dom";
import LoginButton from "../../elements/LoginButton";
 
class Login extends Component {

  LoginUser(){
    var login = document.getElementById('loginField')
    var password = document.getElementById('passwordField')
    var headers = new Headers();

    if(login.checkValidity() && password.checkValidity()){
     
      headers.append('Accept', 'application/json'); 

<<<<<<< HEAD
        fetch('https://mmabackend.azurewebsites.net/api/Users', {
=======
      fetch('http://localhost:50418/api/Users', {
>>>>>>> master
        method: 'GET',
        headers: headers

      }).then(res => res.json())
      .then(res => {
        console.log(res);
        res.forEach(user => {
          console.groupCollapsed(`Użytkownik ${user.id}`)
          console.log(`Login: ${user.login}`);
          console.log(`Hasło: ${user.password}`);
          console.groupEnd();
        });
        alert("Poprawnie zalogowano");
        window.location.href = ('#/home')})
      .catch(error => {
        console.error('Error:', error);
        alert("Nie udało się zalogować")}
      );

    } else {
      alert("Wszystkie pola muszą być wypełnione");
    }
  }

  render() {
    return (
      <div className="login">
        <h2>Logowanie</h2>
        <TextInput id="loginField" type="text" name="login" placeholder="Login"/>
        <TextInput id="passwordField" type="password" name="password" placeholder="Hasło"/>
        <LoginButton func={this.LoginUser.bind(this)} name="Zaloguj"/>
        <p>Nie masz jeszcze konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
      </div> 
    );
    
  }
}
 
export default Login;