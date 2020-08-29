import React, { Component } from 'react';

 

class Register extends Component {

 

    constructor() {

        super();

        this.serviceUrl = "http://localhost:5000/api/account";

        this.state = {

            username: '',

            password: '',

            email: '',

            confirmpassword: '',

            gender: '',

            mobileno:'',

            usernameError: '',

            passwordError: '',

            confirmpasswordError: '',

            emailError: '',

            genderError: '',

            mobilenoError:''

        }

    }

 

    onChanged = (event) => {

        this.setState({ [event.target.name]: event.target.value })

    }

 

    validate = () => {

        let isError = false;

        const errors = {

            usernameError: "",

            emailError: "",

            passwordError: "",

            confirmpasswordError: '',

            genderError: '',

            mobilenoError: '',

            dobError: ''

        };

        if (this.state.username.length < 4) {

            isError = true;

            errors.usernameError = "Username needs to be atleast 4 characters long";

        }

        if (this.state.username === '') {

            isError = true;

            errors.usernameError = "Username Required ";

        }

 

       

        if (this.state.password === '') {

            isError = true;

            errors.passwordError = "Password Required ";

        }

       

 

        if (this.state.confirmpassword === '' ) {

            isError = true;

            errors.confirmpasswordError = "Confirm Password Required ";

        }

        if(this.state.password !== this.state.confirmpassword){

            isError = true;

            errors.confirmpasswordError = "Password Mismatch";

        }

 

        if (this.state.gender === '') {

            isError = true;

            errors.genderError = "Gender Required ";

        }

        if (this.state.mobileno === '') {

            isError = true;

            errors.mobilenoError = "Mobile Number Required ";

        }

        if (this.state.mobileno.length < 10 || this.state.mobileno.length > 10)  {

            isError = true;

            errors.mobilenoError = "Enter 10 digits mobile number ";

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

        let newPost=[...this.state.account];

            let newpost={

                username:this.state.username,

                password:this.state.password,

                email:this.state.email,

                gender:this.state.gender,

                mobileno:this.state.mobileno

            }

            axios.post(this.serviceUrl,newpost).then((res)=>{

                newPost.push(newpost);

                this.setState({account:newPost});

            })

            alert("Registered successfully")

 

            this.props.history.push('/login');

        }

        componentDidMount() {

            let _id = this.props.match.params._id;

            axios.get(this.serviceUrl + _id).then((res) => {

               this.setState({

                  account: res.data

               })

            })

          }

 

    render() {

 

        const { username, password, email, confirmpassword, gender, mobileno, dob } = this.state;

 

        return (

            <div className="row">

            <div className="col-sm-offset-2 col-sm-8">

            <div className="well">

                <h2>Create a Account</h2>

                <hr/>

                <form onSubmit={this.onSubmit}>

 

                    <div className="form-group">

                        <label> User Name :</label>

                        <input name="username" onChange={this.onChanged}

                            value={username} type="text" placeholder="Full name" className="form-control" required/>

                   <span style={{color: "red"}}>{this.state.usernameError}</span>

                    </div>

 

                    <div className="form-group">

                        <label> Password :</label>

                        <input name="password" onChange={this.onChanged}

                            value={password} type="password"  placeholder="Enter password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

                    <span style={{color: "red"}}>{this.state.passwordError}</span>

                    </div>

 

                    <div className="form-group">

                        <label> Confirm Password :</label>

                        <input name="confirmpassword" onChange={this.onChanged}

                            value={confirmpassword} type="password" placeholder="Enter right password" className="form-control" required/>

                    <span style={{color: "red"}}>{this.state.confirmpasswordError}</span>

                    </div>

 

                    <div className="form-group">

                        <label htmlFor="email"> Email :</label>

                        <input name="email" onChange={this.onChanged}

                            value={email} type="email"  placeholder="Enter valid e-mail Id" className="form-control" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required/>

                    <span style={{color: "red"}}>{this.state.emailError}</span>

                    </div>

 

                    <div className="form-group">

                        <label> Gender :</label>&nbsp; &nbsp;

                        <input name="gender" onChange={this.onChanged}

                            value={gender} type="radio"  value="Male" /> Male &nbsp; &nbsp;

                        <input name="gender" onChange={this.onChanged}

                            value={gender} type="radio"  value="Female" /> Female &nbsp; &nbsp;

                            

                        <input name="gender" onChange={this.onChanged}

                            value={gender} type="radio"  value="Others" /> Others

                        <span style={{color: "red"}}>{this.state.genderError}</span>

                    </div>

                    <div className="form-group">

                        <label> Mobile Number :</label>

                        <input name="mobileno" onChange={this.onChanged}

                            value={mobileno} type="Number" placeholder="10 digits mobile number" className="form-control" required/> 

                    <span style={{color: "red"}}>{this.state.mobilenoError}</span>

                    </div>

                    <div className="form-group">

                        <label htmlFor="date"> Date Of Birth :</label>

                        <input name="dob" onChange={this.onChanged}

                            value={dob} type="date" className="form-control" /> 

                    <span style={{color: "red"}}>{this.state.mobilenoError}</span>

                    </div>

 

                    <input type = "checkbox" required/>By creating an account, I accept the <a>Terms & Conditions</a> <br/>

                    <button className="btn btn-success" type="submit">Sign Up</button>

 

                    

                </form>

            </div>

            </div></div>

        )

    }

}

 

export default Register;