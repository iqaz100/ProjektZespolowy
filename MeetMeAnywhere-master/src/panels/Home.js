import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink exact to="/home/about">Strona główna</NavLink></li>
          <li><NavLink to="/home/account">Konto</NavLink></li>
          <li><NavLink to="/home/events">Wydarzenia</NavLink></li>
          <li><NavLink to="/home/help">Pomoc</NavLink></li>
        </ul>
        <hr />
      </div>
    );
  }
}
 
export default Home;

