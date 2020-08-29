import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=> {
        return(
            <nav className="navbar navbar-inverse" >
            <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false" ><span className="sr-only">Event</span>
            
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand glyphicon glyphicon-th-list" to="#" style={{color:'pink'}}> Event</Link>
            </div>
            <div  className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                <li className="active"><Link to="/" className="glyphicon glyphicon-home" style={{color:'pink'}}> Home</Link><span className="sr-only">(current)</span></li>
                <li ><Link to="/addEvent" className="glyphicon glyphicon-plus-sign" style={{color:'pink'}}> Add Event </Link></li>
                <li ><Link to="/event" className="glyphicon glyphicon-list-alt" style={{color:'pink'}}> List of Events </Link></li>
                <li ><Link to="/notification" className="glyphicon glyphicon-bell"style={{color:'pink'}}> Upcoming Events </Link></li>
                </ul>
                 
                
   <ul className="nav navbar-nav navbar-right">
   <button  fab icon="facebook-f" type="submit"> <a href="www.facebook.com">facebook</a></button> 
                <li ><Link to="/login" className="glyphicon glyphicon-user"style={{color:'pink'}}> Login</Link></li>
                <li><Link to="/register" className="glyphicon glyphicon-cloud"style={{color:'pink'}}> Sign Up</Link></li>
                </ul>
            </div>
            </div>
            </nav>
        )
}

export default Header;