
import React, { SyntheticEvent, useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import SeatesDake from "../SeatesDake";
import SeatIcon from "../SeatIcon";
import styles from '../test.css'
import BookingModel from '../BookingModel';
import BookingData from "../BookingData";
import { useNavigate } from "react-router-dom";
import PassangerDetails from "./PassangerDetails";
import Context from ".././Context/Context" 
import useSitData from "../../hooks/SitData";





const HandelContext = (props ) =>{

  const {booking, setBooking, sitNo, price} = useSitData();
  
  
  console.log()
  return(
    <Context.Provider value = { price}>
{props.children}
  </Context.Provider>
  );
};



const SeateDake = (props) => {

const data = "I am from child";
const {booking, setBooking, sitNo, price} = useSitData();

console.log(sitNo, price);

// const [booking, setBooking] = useState([]);
// useEffect(() => {
//   fetch('seates.json')
//     .then(res => res.json())
//     .then(data => setBooking(data)
//     );

// }, []);


  
  const [setData, setSitData] = useState(null);
  const Navagate = useNavigate();

  const NavagateToTicketDetails = () => {
    Navagate ("/BookedTicket")
  };

  

 

  

  // const booked = booking.filter((sit) => sit.isBooked === true);

  // const sitNo = booked.map(sit => <span> {sit.sitNo}, </span>)

  // const price = booked.reduce((acc, item) => {
  //   return acc + item.price;
  // }, 0);

  // props.oNsitData(sitNo);

  localStorage.setItem("sitNO", booking.length.sit);
  const ref = useRef('');

  const [passengerData, setPassengerData] = useState(null);
  const [temData, setTemData] = useState([]);

 


  const handleClick = (e, data) => {


    setBooking(prevState => {

      const newState = prevState.map(obj => {

        if (obj.sitNo === data.sitNo) {
          return {
            ...obj,
            isBooked: !obj.isBooked,

          };

        }
        return obj;

      });



      return newState;
    });



  };


  return (
    <div>
{/* <Test
price = {price}/> */}

      <div>

        {booking.length > 0 && (
          <Container className="mt-5">
            <Row key={Number(60596058969).toString()}>
              <Col className="py-3 border mb-3" key={Number(5000).toString()}>
                <div>

                  {
                    sitNo.length
                      ? (<div className="card text-center">
                        <div className="card-header">
                          <strong className="text-danger">{sitNo.length > 1 ? 'Booked Sits' : 'Booked Sit'} </strong>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{sitNo.length > 1 ? 'Slected Sits' : 'Slected Sit'}: {sitNo}</h5>
                          <p className="card-text"><b>Amount</b> : {price} </p>
                          <PassangerDetails passengerData={passengerData} setPassengerData={setPassengerData}
                          />


                          

                        </div>


                      </div>)

                      :
                      'No Sits Slected, Please Slect a sit'
                  }

                </div>
                
                

              </Col>
            </Row>
            <Row
              key={Number(605960589696590496094).toString()}
              className={`mt-1 mb-2 py-1 px-2`}
            >
              {booking.length > 0 &&
                booking.map((sit, index) => {
                  return (
                    <>
                      <Col
                        md="1"
                        className={`px-3  py-2`}
                        key={Number(index).toString()}
                        disabled={!sit.isBooked}

                      >
                        <Card className={`border mt-2 text-center`}>
                          <p className="mt-2">{sit.sitNo}</p>
                          <p>{sit.price}</p>
                          <p className={`seatIcon`} onClick={(e) => handleClick(e, sit)} >

                            <SeatIcon
                              for="BookingModel"
                              labelName={sit.sitNo}
                              fillColor={sit.isBooked === true ? 'green' : "#fff"}
                              booking = {booking}
                            />
                          </p>
                        </Card>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </Container>
        )}
      </div>



    </div>
  );
};




export {HandelContext};
export default SeateDake;



