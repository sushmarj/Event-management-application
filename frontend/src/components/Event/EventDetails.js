import React, { Component } from 'react';
import { EventRegistration } from './EventRegistration';
import axios from 'axios';
class EventDetails extends Component {
   constructor() {
      super();
      this.serviceUrl = "http://localhost:5000/api/event/";
      
      this.state = {
        
         event: [ ],
         user:[]

      }
   }
  
   componentDidMount() {
      let _id = this.props.match.params._id;
      axios.get(this.serviceUrl + _id).then((res) => {
         this.setState({
            event: res.data
         })
      })
   }
   
   apply = (_id) => {
      alert(_id);
      this.props.history.push('/eventregistration/'+ _id);
      

  }
   render() {
  
      return (
         <div className="row">
   <div className="col-sm-offset-2 col-sm-8">
            <div className="well">

            <img className="col-md-offset-4" className="img-fluid"  src={this.state.event.image} alt="not found" width="400" height="300"/>
            <h3 className="text-left">{this.state.event.eventname}</h3>
            <h4 className="text-left" > <b>Event dates and Timing : </b> {this.state.event.start}&nbsp;&nbsp;&nbsp;{this.state.event.end}&nbsp;&nbsp;&nbsp;{this.state.event.startt}&nbsp;&nbsp;&nbsp;{this.state.event.endt}</h4>
            
            <br/>
           
            <button className="col-md-offset-4" className="btn btn-success" onClick={()=>this.apply(this.state.event._id)}>Register</button>
            </div>
            <div className="well">
            <b>Event Description:</b> {this.state.event.description} <br/>
            <br/>
            <b>Location:</b>{this.state.event.location}<br/>
            <br/>
            <b>Price for Tickets</b> <br/>
            <b>Adult : </b>{this.state.event.adultprice}&nbsp;&nbsp;
            <b className="col-sm-offset-3">Child : </b>{this.state.event.childprice}<br/>
            <br/>
            <b>Price for Food</b><br/>
            <b>Veg food : </b>{this.state.event.vegprice} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b className="col-sm-offset-2">Non-veg food : </b>{this.state.event.nonvegprice}
            <b className="col-sm-offset-2" >Drinks : </b>{this.state.event.drinksprice}<br/><br/>
            <b>Booking Date </b><br/>
            <b>Starts on : </b>{this.state.event.startbook}
            <b className="col-sm-offset-2">Ends on : </b>{this.state.event.endbook}<br/>
            <b>Start Time : </b>{this.state.event.startbookt}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b className="col-md-offset-2">End Time : </b>{this.state.event.endbookt}<br/><br/>
            </div>
          </div>
         </div>
      );
   }
}
export default EventDetails;