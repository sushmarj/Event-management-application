import React, { Component } from 'react';
import axios from 'axios';
import  createHistory from 'history/createBrowserHistory';
const history= createHistory();


export class EventRegistration extends Component {

    constructor(props) {
        super(props);
        this.serviceUrl = "http://localhost:5000/api/eventreg/";
        
        this.state = {
            
            reg:[{
            _id:'',
            fullname: '',
            email: '',
            mobileno: '',
            headcountadult: '',
            headcountchild:'',
            headcountbaby:'',
            id:'',
            veg:'',
            nonveg:'',
            drinks:''
        }],
            fullnameError: '',
            emailError: '',   
            mobilenoError: '',
            headcountadultError: '',
            headcountchildError:'',
            headcountbabyError:''
           
      
            
        }
    }

    onChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validate = () => {
        let isError = false;
        const errors = {
            fullnameError: '',
            emailError: '',
            mobilenoError: '',
            headcountadultError: '',
            headcountchildError:'',
            headcountbabyError:''
           
        };
        if (this.state.fullname.length < 5) {
            isError = true;
            errors.fullnameError = "Full name needs to be atleast 5 characters long";
        }
        if (this.state.fullname === '') {
            isError = true;
            errors.fullnameError = "Full name Required ";
        }

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        }
        if (this.state.mobileno === '') {
            isError = true;
            errors.mobilenoError = "Mobile Number Required ";
        }
        if (this.state.mobileno === 10) {
            isError = true;
            errors.mobilenoError = "Mobile Number must be 10 digits";
        }
        if (this.state.headcountadult === '') {
            isError = true;
            errors.headcountadultError = "Adult headcount Required ";
        }
       
        
       
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };



    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        alert("Congratulation! You have successfully Registered for the Event");
        this.props.history.push('/');
        

        let newPost=[...this.state.reg];
            let newpost={
                _id:this.state._id,
                fullname:this.state.fullname,
                email:this.state.email,
                mobileno:this.state.mobileno,
                headcountadult:this.state.headcountadult,
                headcountchild:this.state.headcountchild,
                headcountbaby:this.state.headcountbaby,
                id:this.state._id,
                veg:this.state.veg,
                nonveg:this.state.nonveg,
                drinks:this.state.drinks
            }
            axios.post(this.serviceUrl, newpost).then((res)=>{
                newPost.push(newpost);
                this.setState({reg:newPost});
            })
    }
    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(this.serviceUrl +_id).then((res) => {
           this.setState({
            _id:res.data._id,
      
            fullname:res.data.fullname,
            email:res.data.email,
            mobileno:res.data.mobileno,
            headcountadult:res.data.headcountadult,
            headcountchild:res.data.headcountchild,
            headcountbaby:res.data.headcountbaby,
            id:res.data._id,
            veg:res.data.veg,
            nonveg:res.data.nonveg,
            drinks:res.data.drinks
           })
        })
      }
      cancelClick=()=>{
        this.props.history.push('/');
    }
    render() {

        const {  fullname, email, mobileno, headcountadult, headcountchild, headcountbaby, veg, nonveg, drinks} = this.state;

        return (
            <div className="row">
            <div className="col-sm-offset-2 col-sm-8">
            <div className="well">
                <h2 className="col-md-offset-4">Event Registration</h2> <hr/>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label> Full Name :</label>
                    
                        <input name="fullname" onChange={this.onChanged}
                            value={fullname} type="text" className="form-control" placeholder="Enter the Fullname" required />
                   <span style={{color: "red"}}>{this.state.fullnameError}</span>
                    </div>
                    <div ><lable><b>Contact details </b> <br/>
                    <div className="form-group" className="col-sm-6">
                        <label> Email Id :</label>
                        <input name="email" onChange={this.onChanged}
                            value={email} type="email" className="form-control" placeholder="Enter the Email Id" required/>
                    <span style={{color: "red"}}>{this.state.emailError}</span>
                    </div>
                    <div className="form-group" className="col-sm-6">
                        <label> Mobile Number :</label>
                        <input name="mobileno" onChange={this.onChanged}
                            value={mobileno} type="number" className="form-control" placeholder="Enter 10 digits phone Number" required/>
                    <span style={{color: "red"}}>{this.state.mobilenoError}</span>
                    </div>
                    </lable></div>
                    <br/>
                    <br/><br/>
                    <div ><br/>
                    <lable><b>HeadCount Member to attend Event</b> <br/>
                    <div className="form-group" className="col-sm-4">
                        <label> Adult :</label>
                        <input name="headcountadult" placeholder="15-80 years" onChange={this.onChanged}
                            value={headcountadult} type="text" className="form-control" placeholder="age of 15-80 years" required/>
                    <span style={{color: "red"}}>{this.state.headcountadultError}</span>
                    </div>
                    <div className="form-group" className="col-sm-4">
                        <label> child :</label>
                        <input name="headcountchild" placeholder="0-6 years" onChange={this.onChanged}
                            value={headcountchild} type="Number" className="form-control" placeholder="Enter age of 06-15 years"/>
                    
                    </div>
                    <div className="form-group" className="col-sm-4">
                        <label> baby :</label>
                        <input name="headcountbaby" placeholder="6-15 years" onChange={this.onChanged}
                            value={headcountbaby} type="Number" className="form-control" placeholder="Enter age of 0-06 years" />
        
                    </div>
                    </lable></div>
                    <br/>
                    <br/><br/>
                    <div ><br/>
                        <lable><b>Food options</b> <br/>
                    <div className="form-group" className="col-sm-4">
                        <label> Veg :</label>
                        <input name="veg" onChange={this.onChanged} className="form-control" placeholder="Enter Quality of Veg"
                            value={veg} type="number"/> 
                            </div>
                    <div className="form-group" className="col-sm-4">
                        <label> Non-Veg :</label>
                        <input name="nonveg" onChange={this.onChanged} className="form-control" placeholder="Enter Quality of Non-Veg"
                        value={nonveg} type="number" />  
                    </div>
                    <div className="form-group" className="col-sm-4">
                        <label>Drinks :</label>
                         <input name="drinks" onChange={this.onChanged} className="form-control" placeholder="Enter Quality of Drinks"
                            value={drinks} type="number"  /> 
                    </div>
                    </lable></div>
                    <br/><br/><br/>
                    <div className="form-group">
                        <input onChange={this.onChanged} type='checkbox' required/>By registering, I accept the <a>Terms & Conditions</a>
                    </div>

                    <button className="btn btn-success" type="submit">Submit</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={this.cancelClick} className="btn btn-danger">Cancel</button>
                
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default EventRegistration;


