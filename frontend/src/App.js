import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';

import AddEvent from './components/Event/AddEvent'
import Notification from './components/pages/Notification';
import EventDetails from './components/Event/EventDetails';
import Eventregistration from './components/Event/EventRegistration';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Event from './components/Event/Event'
import { EditEvent } from './components/Event/EditEvent';




class App extends Component {
  render() {
    return (
      <div style={{
        background:'black',
        color:'black'}}>
     <Router >
       <div>
         <Header  />
         <div className="container">
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/addEvent" component={AddEvent} />
           <Route exact path="/event" component={Event} />
           <Route exact path="/editevent/:_id" component={EditEvent} />
           <Route exact path="/notification" component={Notification} />
           <Route exact path="/event/:_id" component={EventDetails} />
           <Route exact path="/eventregistration/:_id" component={Eventregistration} />
           
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
           
         </Switch>
         </div>
        
       </div>
     </Router>
     </div>
    );
  }
}

export default App;
