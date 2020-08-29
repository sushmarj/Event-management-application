import React from 'react';

const TableRow =(props)=> {
    return(
        <tr key={props._id}>
           
            <td>{props.eventname}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td>{props.startbook}</td>
            <td>{props.endbook}</td>
            
        </tr>
    )
}

export default TableRow ;

