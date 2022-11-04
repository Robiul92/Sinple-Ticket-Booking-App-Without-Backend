import React, { SyntheticEvent, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SeatesDake from "../SeatesDake";
import SeatIcon from "../SeatIcon";
import styles from "../test.css";
import BookingModel from "../BookingModel";
import BookingData from "../BookingData";

// const sitsInfo = [
//     {
//       sitNo: "A1",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "A2",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "A3",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "A4",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "B1",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "B2",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "B3",
//       price: 266,
//       isBooked: false,
//     },
//     {
//       sitNo: "B4",
//       price: 266,
//       isBooked: false,
//     },
//   ];

// const getSitsInfo = () => {
//   return new Promise((resolve) => resolve(sitsInfo));
// };

const SeateDake = () => {
  const [booking, setBooking] = useState([]);
  const [setData, setSitData] = useState(null);

  const isBooked = booking.filter((sit) => sit.isBooked === true);
  
  useEffect(() => {
    fetch("seates.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  localStorage.setItem("sitNO", booking.length.sit);

  const handleClick = (e, data) => {
    setBooking((prevState) => {
      const newState = prevState.map((obj) => {
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
      {/* <div>
            <Container className="mt-5">
                <Row>
                    <Col className="py-3 border mb-3">
                        <p>Selected Sits : { JSON.stringify(busSits.filter((sit)=> sit.isBooked === true))  }</p>
                    </Col>
                </Row>
                <Row>
                    {busSits.length > 0 &&
                        busSits.map((sit, index) => {
                            return (
                                <>
                                    <Col
                                        md="2"
                                        className={`border mt-2 text-center px-3 ${sit.isBooked === true ? "bg-success" : "bg-white"
                                            }`}
                                            key={index}
                                            disabled={!sit.isBooked}
                                        onClick={(e) => handleClick(e, sit)}
                                    >
                                        <p className="mt-2">{sit.sitNo}</p>
                                        <p>{sit.price}</p>
                                    </Col>
                                </>
                            );
                        })}
                </Row>
            </Container>
        </div>
   */}
      <div>
        {booking.length > 0 && (
          <Container className="mt-5">
            <Row key={Number(60596058969).toString()}>
              <Col className="py-3 border mb-3" key={Number(5000).toString()}>
                <div>
                  {booking
                    .filter((sit) => sit.isBooked === true)
                    .map((sit) => {
                      return (
                        <>
                          <BookingData
                            key={sit.id}
                            sit={sit}
                            setSitData={setSitData}
                          ></BookingData>

                          {/* <label
                    for="booing-modal"
                    onClick={()=>setSitData(sit)}
                    className="bg-danger p-2 rounded mt-2"
                    >
                    Confrom Booking   
                    </label> */}
                        </>
                      );
                    })}
                    
                    {isBooked.length > 0 && (
                    <form>
                      <div className="d-flex justify-content-around">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          required="required"
                        />
                        <input
                          type="email"
                          placeholder="Enter Your Phone Number"
                          required="required"
                        />
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          required="required"
                        ></input>
                      </div>

                      <div className=" p-2">
                        <div className="">
                          <label className="">Gender</label>
                          <div>
                            <input
                              type="radio"
                              id="male"
                              name="gender"
                              value="male"
                              required="required"
                            ></input>
                            <label for="male">Male</label>
                            <input
                              type="radio"
                              id="female"
                              name="gender"
                              value="female"
                              required="required"
                            ></input>
                            <label for="female">Female</label>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <div>
                          <input
                            name="age"
                            type="number"
                            placeholder="Age"
                            required="required"
                          ></input>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-danger p-2 rounded mt-2"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                    
                    
                  {/* {setData && <BookingModel setData={setData}></BookingModel>} */}
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
                          <p
                            className={`seatIcon`}
                            onClick={(e) => handleClick(e, sit)}
                          >
                            <SeatIcon
                              for="BookingModel"
                              labelName={sit.sitNo}
                              fillColor={
                                sit.isBooked === true ? "green" : "#fff"
                              }
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
