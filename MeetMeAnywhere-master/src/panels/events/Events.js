import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Events extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink to="/home/events/new-event">Utwórz wydarzenie</NavLink></li>
          <li><NavLink to="/home/events/search-event">Szukaj wydarzenia</NavLink></li>
          <li><NavLink to="/home/events/your-events">Twoje wydarzenia</NavLink></li>
        </ul>
      </div>
    );
  }
}
 
export default Events;