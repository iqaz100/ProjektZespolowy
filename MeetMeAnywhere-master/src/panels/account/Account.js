import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Account extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink to="/home/account/friends">Znajomi</NavLink></li>
          <li><NavLink to="/home/account/harmonogram">Harmonogram</NavLink></li>
          <li><NavLink to="/home/account/account-data">Dane konta</NavLink></li>
          <li><NavLink to="/logout">Wyloguj</NavLink></li>
        </ul>
      </div>
    );
  }
}
 
export default Account;