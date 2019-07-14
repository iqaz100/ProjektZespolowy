import React, { Component } from "react";

class LoginButton extends Component {
    render() {
      return (
        <div>
          <button className="button" onClick={this.props.func}>
            <p>{this.props.name}</p>
          </button>
        </div>
      );
    }
  }
   
  export default LoginButton;