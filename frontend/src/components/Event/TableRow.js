import React from 'react';

const TableRow =(props)=> {
    return(
        <tr key={props._id}>
          
            <td>{props.eventname}</td>
            <td>{props.location}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            
           
            <td>{props.adultprice}</td>
            <td>{props.childprice}</td>
            <td>{props.vegprice}</td>
            <td>{props.nonvegprice}</td>
            <td>{props.drinksprice}</td>
            <td>{props.startbook}</td>
            <td>{props.endbook}</td>
            
            <td><button
            onClick={()=>props.editClick(props._id)}
            className="btn btn-xs btn-primary glyphicon glyphicon-pencil"> Edit</button><br/>
        <button onClick={()=>props.deleteEvent(props)}
         className="btn btn-xs btn-danger glyphicon glyphicon-remove-circle"> Delete</button> </td>
        </tr>
    )
}

export default TableRow ;

