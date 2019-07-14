import React, { Component } from "react";
import {TextInput} from "../../elements"
import LoginButton from "../../elements/LoginButton";

class NewEvent extends Component {

  createEventFunction(){
    var name = document.getElementById('name')
    var date = document.getElementById('date')
    var place = document.getElementById('place')
    var description = document.getElementById('description')

    var headers = new Headers();
   

    if(name.checkValidity() && date.checkValidity() && place.checkValidity() && description.checkValidity()){
      
      var object = {
<<<<<<< HEAD
        id: 80, 
=======
        id: 40, 
>>>>>>> master
        title: name.value, 
        date: date.value, 
        idOwner: 3, 
        idParticipants: 3, 
        idOwnerNavigation: null, 
        idParticipantsNavigation: null, 
        users: []}

      headers.append('Content-Type', 'application/json');
<<<<<<< HEAD
        fetch('https://mmabackend.azurewebsites.net/Events', {
=======
      fetch('http://localhost:50418/api//Events', {
>>>>>>> master
        method: 'POST',
        headers : headers,
        body: JSON.stringify(object),
      }).then(res => res)
      .then(response => {
        console.log('Success:', response);
        alert("Wydarzenie utworzone");
        window.location.reload()})
      .catch(error => {
        console.error('Error:', error);
        alert("Wydarzenie utworzone");  //------mamy error 500  ale dopisuje
        window.location.reload()}       //------mamy error 500 ale dopisuje
        //alert("Nie udało się utworzyć wydarzenia")}
      );

    } else {
      alert("Wszystkie pola muszą być wypełnione prawidłowo");
    }

    
  }

  render() {
    return (
      <div>
        <h2>Nowe wydarzenie</h2> 
        <TextInput id="name" type="text" name="eventName" placeholder="Nazwa wydarzenia"/>
        <TextInput id="date" type="date" name="eventDate" placeholder="Data Wydarzenia"/>
        <TextInput id="place" type="text" name="eventPlace" placeholder="Miejsce wydarzenia"/>
        <TextInput id="description" type="text"  name="eventDescription"  placeholder="Opis"/>
        <LoginButton func={this.createEventFunction.bind(this)} name="Utwórz wydarzenie"/>
      </div>
    );
  }
}

export default NewEvent;