import React from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const ListofEvent=(props)=> {

    const editClick=(_id)=>{
        
        props.history.push('/editevent/'+_id);
    }
    
        return(
            <div  >
            <h2 className="col-md-offset-4"> Make change to Event </h2>
            <table className="table table-bordered table-striped">
                <Thead />
                <tbody>
                    {props.event.map((i,j)=>
                    <TableRow key={i.id}
                    _id={i._id}
                    eventname={i.eventname}
                    start={i.start.toString()}
                    end={i.end.toString()}
                    
                    location={i.location}
                    adultprice={i.adultprice}
                    childprice={i.childprice}
                    vegprice={i.vegprice}
                    nonvegprice={i.nonvegprice}
                    drinksprice={i.drinksprice}
                    startbook={i.startbook.toString()}
                    endbook={i.endbook.toString()}
                   
                    description={i.description}
                    deleteEvent={props.deleteEvent}
                    editClick={editClick} /> )}
                </tbody>
            </table>
            
            </div>
        )
}

export default withRouter(ListofEvent) ;
