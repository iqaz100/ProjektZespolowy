import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import { 
  Home, 
  Account, 
  Events, 
  Help, 
  Logout, 
  Login, 
  Register, 
  Start, 
  NewEvent, 
  SearchEvent, 
  YourEvents, 
  About,
  AboutUs,
  Contact,
  FAQ,
  Harmonogram,
  AccountData,
  Friends,
  EditData,
  ChangePassword
} from './panels'

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>MeetMeAnywhere</h1>
            <div className="content">
              <Route exact path="/" component={Start}/>
              <Route path="/home" component={Home}/>
              <Route path="/home/about" component={About}/>

              <Route path="/home/account" component={Account}/>
              <Route path="/home/account/friends" component={Friends}/>
              <Route path="/home/account/harmonogram" component={Harmonogram}/>
              <Route path="/home/account/account-data" component={AccountData}/>
              <Route path="/home/account/edit-data" component={EditData}/>
              <Route path="/home/account/edit-password" component={ChangePassword}/>
              
              <Route path="/home/events" component={Events}/>
              <Route path="/home/events/new-event" component={NewEvent}/>
              <Route path="/home/events/search-event" component={SearchEvent}/>
              <Route path="/home/events/your-events" component={YourEvents}/>

              <Route path="/home/help" component={Help}/>
              <Route path="/home/help/about-us" component={AboutUs}/>
              <Route path="/home/help/contact" component={Contact}/>
              <Route path="/home/help/FAQ" component={FAQ}/>

              <Route path="/logout" component={Logout}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;