import React from 'react';
import { Card } from 'react-bootstrap';

const BookingData = ({sit, setSitData}) => {
    console.log(sit.sitNo)
    return (
        <div>

                           
             <>
{sit.sitNo.length < 2 ?
  <Card className={`border mt-2 text-center`}>
                      <p className="mt-2">Slected Sits: {sit.sitNo} </p>
                       <p>Ticket Price: {sit.price} Tk</p>
                       
                       
                       
                     </Card>
 : 
 
 <Card className={`border mt-2 text-center`}>
                      <p className="mt-2">Slected Sits: {sit.sitNo}</p>
                       <p>Ticket Price: {sit.price} Tk</p>
                       
                       
                       
                     </Card>
                     
                     }
                
                     
                     

                       

                      
                   
                 </>
                
                 {/* <label
                 for="booing-modal"
                 onClick={()=>setSitData(sit)}
                 className="bg-danger p-2 rounded mt-2"
                 >
                 Confrom Booking   
                 </label> */}
        </div>
    );
};

export default BookingData;