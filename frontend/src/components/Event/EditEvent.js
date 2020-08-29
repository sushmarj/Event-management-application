import React , { Component } from 'react';
import axios from 'axios';

export class EditEvent extends Component {

    constructor(props){
        super(props);
        this.serviceUrl = "http://localhost:5000/api/event/";
        this.state={
            _id:'',
            eventname:"",
            start: "",
            startt: "",
            end:"",
            endt:"",
            location:"",
            adultprice:"",
            childprice:"",
            vegprice:"",
            nonvegprice:"",
            drinksprice:"", 
            startbook:"",
            endbook:"",

            description: ""
        }
    }

    componentDidMount(){
        let _id=this.props.match.params._id;
        axios.get(this.serviceUrl+_id).then((res)=>{
            this.setState({
                _id:res.data._id,
                eventname:res.data.eventname,
                start:res.data.start,
                startt:res.data.startt,
                end:res.data.end,
                endt:res.data.endt,
                location:res.data.location,
                adultprice:res.data.adultprice,
                childprice:res.data.childprice,
                vegprice:res.data.vegprice,
                nonvegprice:res.data.nonvegprice,
                drinksprice:res.data.drinksprice,
                startbook:res.data.startbook,
                endbook:res.data.endbook,
                description:res.data.description});
        })
    }

    cancelClick=()=>{
        this.props.history.push('/event');
    }

    onChanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSaveClick=(e)=>{
        e.preventDefault();
        axios.put(this.serviceUrl +this.state._id, this.state).then((res)=>{
            alert('Data Updated');
            this.props.history.push('/event');
        }) 
    }


    render(){
        const {  _id, eventname, start, end, startt, endt, location, adultprice, childprice, vegprice, nonvegprice, drinksprice, startbook, endbook,startbookt, endbookt, description} = this.state;
        return(
            <div className="row">
            <div className="col-sm-offset-2 col-sm-8">
            <div className="well">
            <h2 className="col-md-offset-4" >Update an Event</h2> <hr/>
            <form onSubmit={this.onSaveClick}>
             {/*<div className="form-group">
            <label>Id</label>
            <input name="id" value={_id}
            onChange={this.onChanged} className="form-control" />
            </div> */}
            <div className="form-group">
            <label>Event Name</label>
            <input name="eventname" value={eventname}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>Description</label>
            <input name="description" value={description}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group">
            <label>location</label>
            <input name="location" value={location}
            onChange={this.onChanged} className="form-control" />
            </div>
            <div ><lable><b>Event Dates and Time</b> <br/> 
                    <div className="form-group" className="col-sm-3">
                        <label> Start Date :</label>
                        <input name="start" onChange={this.onChanged}
                            value={start} type="date" className="form-control"  placeholder="Enter Start date of Event" required/>
                    </div>
                    <div className="form-group" className="col-sm-3">
                        <label> End Date :</label>
                        <input name="end" onChange={this.onChanged}
                            value={end} type="date" className="form-control"  placeholder="Enter End date of Event" required/>
                    </div>
                   
                    <div className="form-group" className="col-sm-3">
                        <label> Start Time :</label>
                        <input name="startt" onChange={this.onChanged}
                            value={startt} type="time" className="form-control"  placeholder="Enter Start Time of Event" required/>
                    </div>
                    <div className="form-group" className="col-sm-3">
                        <label> End Time :</label>
                        <input name="endt" onChange={this.onChanged}
                            value={endt} type="time" className="form-control"  placeholder="Enter End Time of Event" required/>
                    </div>
                    </lable></div>
                    <br/><br/><br/>
                    <div> <br/><lable><b>Booking Date and Time </b> <br/>
                    <div className="form-group" className="col-sm-6">
    <label> Start date :</label>
    <input name="startbook" onChange={this.onChanged}
        value={startbook} type="date" className="form-control" placeholder="Enter start booking Date " />
</div>
<div className="form-group" className="col-sm-6">
    <label> End date :</label>
    <input name="endbook" onChange={this.onChanged}
        value={endbook} type="date" className="form-control" placeholder="Enter End booking Date " />
</div>
</lable></div><br/><br/><br/>
            <div><br/><lable><b>Entry Price</b> <br/>
            <div className="form-group" className="col-sm-6">
            <label>Adult Price</label>
            <input name="adultprice" type="number" value={adultprice} type="number"
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group" className="col-sm-6">
            <label>Child Price</label>
            <input name="childprice" type="number" value={childprice} type="number"
            onChange={this.onChanged} className="form-control" />
            </div>
            </lable></div>
                    <br/><br/><br/>
            <div><br/><lable><b>Food Price</b> <br/>
            <div className="form-group" className="col-sm-4">
            <label>Veg </label>
            <input name="vegprice" value={vegprice} type="number"
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group" className="col-sm-4">
            <label>Non-Veg </label>
            <input name="nonvegprice" value={nonvegprice} type="number"
            onChange={this.onChanged} className="form-control" />
            </div>
            <div className="form-group" className="col-sm-4">
            <label>Drinks price</label>
            <input name="drinksprice" value={drinksprice} type="number"
            onChange={this.onChanged} className="form-control" />
            </div>
            </lable></div>
                    <br/><br/><br/>

<div className="col-md-offset-4">
    <br/><br/>
   
            <button type="submit" className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.cancelClick}
            className="btn btn-warning">Cancel</button>
            </div>
                </form>                
            </div>
            </div></div>
        )
    }
} 