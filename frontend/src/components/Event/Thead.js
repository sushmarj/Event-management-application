import React from 'react';

 

const Thead=()=> {

    return(

        <thead style={{background:'black', color:'white'}}>

            <tr>

                <th rowSpan="2" Style="text-align:center">Event Name</th>

                <th rowSpan="2" Style="text-align:center">Location</th>

                <th colSpan="2" Style="text-align:center">Event Date </th>

                <th colSpan="5" Style="text-align:center">Price</th>

                <th colSpan="2" Style="text-align:center">Booking Date and Time</th>

                <th  rowSpan="2"></th>

            </tr>

            <tr>           
            <td>Start Date</td>
            <td>End Date</td>
            
            <td >Adult Price</td>
                <td>Child Price</td>
                <td>Veg Price</td>
                <td>Non-veg Price</td>
                <td>Drinks Price</td>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
        </thead>

    )

}
export default Thead ;