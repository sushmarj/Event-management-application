import React, { Component } from 'react';
import axios from 'axios';
import  createHistory from 'history/createBrowserHistory';
const history= createHistory();

class Login extends Component {

    constructor() {
        super();
       
        this.serviceUrl = "http://localhost:5000/api/user";
        this.state = {
            user:[{
            username: " ",
            password: " ",

            usernameError: '',
            passwordError: ''
        }]
           
        };
    }
    onChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validate = () => {
        let isError = false;
        const errors = {
            usernameError: "",
            passwordError: ""
        };

        if (this.state.username.length < 5) {
            isError = true;
            errors.usernameError = "Username needs to be atleast 5 characters long";
        }
        if (this.state.username === '') {
            isError = true;
            errors.usernameError = "Username Required ";
        }
        if (this.state.password === '') {
            isError = true;
            errors.passwordError = "Password Required ";
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };


    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const err = this.validate();
        let newPost=[...this.state.user];
            let newpost={
                username:this.state.username,
                password:this.state.password
            }
            axios.post(this.serviceUrl, newpost).then((res)=>{
                newPost.push(newpost);
                this.setState({user:newPost});
            })
            alert("Successfully logged in")
            this.props.history.push('/');
        }
        componentDidMount() {
            let _id = this.props.match.params._id;
            axios.get(this.serviceUrl  ).then((res) => {
               this.setState({
                  user: res.data
               })
            })
          }

    render(){
       const {username, password}= this.state;
        return(
            <div className="row">
               <br/><br/>
            <div className="col-sm-offset-3 col-sm-6">
            <div className="well">
            <h3>Welcome to Login Page</h3>
            <hr/>
            <form onSubmit={this.onSubmit}>
                    <div className="form-group" >
                        <label>User Name</label>
                        <input name="username" className="form-control"  onChange={this.onChanged}
                value={username} type="email" placeholder="Enter valid e-mail Id" className="form-control" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required/>
                        <span style={{color: "red"}}>{this.state.usernameError}</span>
                    </div>
                    
                    <div className="form-group" >
                        <label>Password</label>
                        <input name="password" onChange={this.onChanged}
                value={password} type="password"  placeholder="Enter password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required ></input>
                        <span style={{color: "red"}}>{this.state.passwordError}</span>
                    </div>
                    <input type = "checkbox" required/>Remember Me <br/>
                    <button className="btn btn-primary" type="submit" >Login</button>
                </form>
        </div>
        <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/>
        </div></div>
        )
    }
}


export default Login;