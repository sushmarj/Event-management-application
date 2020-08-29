import React, { Component } from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import axios from 'axios';

class Notification  extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/event/"; 
        this.state = { 
            event: []
     } 
     this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
           this.setState({
              event: res.data
           })
        })
     }
    render() { 
        return (
            <div>
            <div className="well">
            <h1> Notification of Upcoming events </h1> <hr/><br/>
            <table className="table table-bordered table-striped">
                <Thead />
                <tbody>
                    {this.state.event.map((i)=>
                    <TableRow key={i.id}
                    _id={i._id}
                    eventname={i.eventname}
                    start={i.start}
                    end={i.end}
                    startbook={i.startbook}
                    endbook={i.endbook}
                   
                   /> )}
                </tbody>
            </table>
          
            </div> 
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>);
    }
}
 




export default Notification;  