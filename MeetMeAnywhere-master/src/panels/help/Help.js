import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Help extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink to="/home/help/FAQ">FAQ</NavLink></li>
          <li><NavLink to="/home/help/contact">Kontakt</NavLink></li>
          <li><NavLink to="/home/help/about-us">O nas</NavLink></li>
        </ul>
      </div>
    );
  }
}
 
export default Help;