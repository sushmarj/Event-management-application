import React, { Component } from 'react';
import  createHistory from 'history/createBrowserHistory';
import axios from 'axios';
const history= createHistory();
class AddEvent extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/event";
        this.state = {
            post:[{
            eventname: "",
            start: "",
            end:"",
            startt: "",
            endt:"",
            image:" ",
            location:"",
            adultprice:"",
            childprice:"",
            vegprice:"",
            nonvegprice:"",
            drinksprice:"",
            startbook:"",
            endbook:"",
            startbookt:"",
            endbookt:"",
            description: ""
        }]
    }
}
    onChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        alert("posted");
        this.props.history.push('/');
        window.location.reload();
        let newPost=[...this.state.post];
            let newpost={
                eventname:this.state.eventname,
                start:this.state.start,
                end:this.state.end,
                startt:this.state.startt,
                endt:this.state.endt,
                image:this.state.image,
                location:this.state.location,
                adultprice:this.state.adultprice,
                childprice:this.state.childprice,
                vegprice:this.state.vegprice,
                nonvegprice:this.state.nonvegprice,
                drinksprice:this.state.drinksprice,
                startbook:this.state.startbook,
                endbook:this.state.endbook,
                startbookt:this.state.startbookt,
                endbookt:this.state.endbookt,
                description:this.state.description
            }

            axios.post(this.serviceUrl,newpost).then((res)=>{
                newPost.push(newpost);
                this.setState({post:newPost});
            })
    }
       componentDidMount() {
          let _id = this.props.match.params._id;
          axios.get(this.serviceUrl + _id).then((res) => {
             this.setState({
                event: res.data
             })
          })
        }
        cancelClick=()=>{
            this.props.history.push('/');
        }
    render() {
        const {  eventname, start, end, startt, endt, image, location, adultprice, childprice, vegprice, nonvegprice, drinksprice, startbook, endbook, startbookt, endbookt, description} = this.state;
        return (
  <div className="row">
   <div className="col-sm-offset-2 col-sm-8">
  <div className="well"  >
  <h2 className="col-md-offset-4" >Create a Event</h2> <hr/>
 
                <form onSubmit={this.onSubmit} >
                    <div className="form-group"  >
                        <label> Event Name :</label>
                        <input name="eventname" onChange={this.onChanged}
                            value={eventname} type="text" className="form-control"  placeholder="Enter the Event Name" required/>                  
                    </div>
                    <div className="form-group">
                        <label> Description :</label>
                        <input name="description" onChange={this.onChanged}
                            value={description} type="text" className="form-control" placeholder="Enter Description about the Event" required/>
                    </div>
                    <div ><lable><b>Event Date and Time</b> <br/> 
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
                    <div><br/><lable><b>Booking Date and time</b> <br/>
                    <div className="form-group" className="col-sm-3">
                        <label> Start Date :</label>
                        <input name="startbook" onChange={this.onChanged}
                            value={startbook} type="date" className="form-control" placeholder="Enter the start booking Date " />
                    </div>
                    <div className="form-group" className="col-sm-3">
                        <label> End Date :</label>
                        <input name="endbook" onChange={this.onChanged}
                            value={endbook} type="date" className="form-control" placeholder="Enter the End booking Date " />
                    </div>
                    <div className="form-group" className="col-sm-3">
                        <label> Start Time :</label>
                        <input name="startbookt" onChange={this.onChanged}
                            value={startbookt} type="time" className="form-control" placeholder="Enter the start booking Time " />
                    </div>
                    <div className="form-group" className="col-sm-3">
                        <label> End Time :</label>
                        <input name="endbookt" onChange={this.onChanged}
                            value={endbookt} type="time" className="form-control" placeholder="Enter the End booking Time " />
                    </div>
                    </lable></div><br/><br/>
                   <br></br><br></br>
                    <div className="form-group"><br/>                       
                    <label> Image:</label>
                        <input name="images" onChange={this.onChanged}
                            value={image} src="url" className="form-control" type="file" />
                    </div>
                    <div className="form-group">
                        <label> Location :</label>
                        <input name="location" onChange={this.onChanged}
                            value={location} type="text" className="form-control"  placeholder="Enter location" required/>
                    </div>
                    <div><lable><b>Entry Price</b> <br/>
                    <div className="form-group" className="col-sm-6">   
                        <label> Adult ticket :</label>
                        <input name="adultprice" onChange={this.onChanged}
                            value={adultprice} type="number" className="form-control"  placeholder="Enter price for adult" required/>
                    </div>
                    <div className="form-group" className="col-sm-6">
                       <label> Child ticket :</label>
                        <input name="childprice" onChange={this.onChanged}
                            value={childprice} type="number" className="form-control" placeholder="Enter price for child" />
                    </div>
                    </lable></div><br/><br/>
                    <br/>
                    <div><br/><lable><b>Food Price</b> <br/>
                    <div className="form-group" className="col-sm-4">
                        <label> Veg :</label>
                        <input name="vegprice" onChange={this.onChanged}
                            value={vegprice} type="number" className="form-control" placeholder="Enter price for Veg" />
                    </div>
                    <div className="form-group" className="col-sm-4">
                        <label> Non-veg :</label>
                        <input name="nonvegprice" onChange={this.onChanged}
                            value={nonvegprice} type="number" className="form-control" placeholder="Enter price for Non-veg" />
                    </div>
                    <div className="form-group" className="col-sm-4">
                        <label> Drinks :</label>
                        <input name="drinksprice" onChange={this.onChanged}
                            value={drinksprice} type="" className="form-control" placeholder="Enter price for Drinks Price" />
                    </div>
                    <br/>
                    </lable></div><br/><br/>
                    <br/>
                    <div className="col-md-offset-4">
                    <button  className="btn btn-primary" type="submit">Submit</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={this.cancelClick} className="btn btn-danger">Cancel</button></div>
                </form>
                
            </div>
            </div></div>
        )
    }
}
export default AddEvent;