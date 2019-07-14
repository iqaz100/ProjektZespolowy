import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LinkButton extends Component {
    render() {
      return (
        <div>
          <NavLink className="button" exact to={this.props.link}>
            <p>{this.props.name}</p>
          </NavLink>
        </div>
      );
    }
  }
   
  export default LinkButton;