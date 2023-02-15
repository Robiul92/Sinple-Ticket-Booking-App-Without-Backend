
import React, { SyntheticEvent, useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SeatesDake from "../SeatesDake";
import SeatIcon from "../SeatIcon";
import styles from '../test.css'
import BookingModel from '../BookingModel';
import BookingData from "../BookingData";
import PassangerFrom from "../PassangerFrom";
import { useNavigate } from "react-router-dom";








const SeateDake = () => {





  const [booking, setBooking] = useState([]);
  const [setData, setSitData] = useState(null);
  const Navagate = useNavigate();

  const NavagateToTicketDetails = () => {
    Navagate ('/BookTickets')
  }

  useEffect(() => {
    fetch('seates.json')
      .then(res => res.json())
      .then(data => setBooking(data)
      );

  }, []);



  const booked = booking.filter((sit) => sit.isBooked === true);

  const sitNo = booked.map(sit => <span> {sit.sitNo}, </span>)

  const price = booked.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  localStorage.setItem("sitNO", booking.length.sit);
  const ref = useRef('');

  const [model, setModel] = useState(false);
  const [temData, setTemData] = useState([]);

  const updateDetails = () => {

    console.warn(model);
    return setModel(true);
  }


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


      <div>

        {booking.length > 0 && (
          <Container className="mt-5">
            <Row key={Number(60596058969).toString()}>
              <Col className="py-3 border mb-3" key={Number(5000).toString()}>
                <div>

                  {
                    sitNo.length
                      ? (<div class="card text-center">
                        <div class="card-header">
                          <strong className="text-danger">{sitNo.length > 1 ? 'Booked Sits' : 'Booked Sit'} </strong>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">{sitNo.length > 1 ? 'Slected Sits' : 'Slected Sit'}: {sitNo}</h5>
                          <p class="card-text"><b>Amount</b> : {price} </p>
                          {sitNo && <PassangerFrom setData={setData}></PassangerFrom>}
                          <Button
                            // for="booing-modal"
                            onClick={NavagateToTicketDetails}
                            class="btn btn-primary">
                            PROCEED TO BOOK
                          </Button>
                          {/* <label
                 for="booing-modal"
                 onClick={()=>setSitData(booking)}
                 className="bg-danger p-2 rounded mt-2"
                 >
                 PROCEED TO BOOK   
                 </label> */}


                        </div>


                      </div>)

                      :
                      'No Sits Slected, Please Slect a sit'
                  }






                  

                </div>
                
                {sitNo && <BookingModel setData={setData}></BookingModel>}

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





export default SeateDake;
