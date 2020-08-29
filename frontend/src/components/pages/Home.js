import React, { Component } from 'react';
import axios from 'axios';
import eventdetails from '../Event/EventDetails'
import Pagination from '../Event/Pagination';

class Home extends Component {
    constructor() {
        super(); 
        this.serviceUrl = "http://localhost:5000/api/event";
        this.state = {
            event: [],activePage: 2, pageOfItems:3

        }
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ event: res.data });
        })
    }

    showDetails = (_id) => {
    
        this.props.history.push('/event/'+_id);
    }   
     
    render(){
        return(
            <div style={{
                background:'black',
                color:'black'
            }}>
                
                <h1 className="text-center" style={{color:'pink'}}>Welcome to Events</h1> <hr/>
            <div className="row" className="pagination justify-content-center">
                {this.state.event.map((j, i) => <div className="col-md-4">
                    <div className="thumbnail" width="50" height="50">
                        <img src={j.image} alt="not found" width="350" height="100"/>
                        <b>{j.eventname}</b><br />
                        {j.start} &nbsp;&nbsp;&nbsp;
                        {j.end} &nbsp;&nbsp;&nbsp;
                        {j.startt}&nbsp;&nbsp;&nbsp;{j.endt}<br/>
                        {j.location}<br/><br/>
        <button className="btn btn-info" onClick={() => this.showDetails(j._id)}>Show More Details</button></div></div>)}
        
        </div>
       
       
        <div className="row">
            <div className="col-sm-offset-4 col-sm-8">
         <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" >1</a></li>
    <li className="page-item"><a className="page-link" >2</a></li>
    <li className="page-item"><a className="page-link" >3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul></div></div>
  
        </div>
        );
}
}
export default Home;