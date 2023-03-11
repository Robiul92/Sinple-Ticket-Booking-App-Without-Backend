import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";




const styles = StyleSheet.create({
  pdfViewer: {
    height: "600",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  // pdfViewerScrollbar: {
  //   display: "none",
  // },
  pdfViewerDiv: {
    width: "80%",
    height: "600",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    overflow: "hidden",
    
    
  },
  page: {
    backgroundColor: "#fff",
    padding: "20px",
    overflow: "hidden",
  },
  section: {
    marginBottom: "20px",
  },
  h1: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  p: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  img: {
    maxWidth: "100%",
    marginBottom: "20px",
  },
});



const UserDocument = ({ sitNo, price, passengerData }) => (
  <Document>
    <Page pageNumber={1} size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Selected New seats: {sitNo}</Text>
        <Text>Total Price: {price}</Text>
        <Text>Passenger Name: {passengerData?.name}</Text>
        <Text>Passenger Email: {passengerData?.email}</Text>
        <Text>Passenger Gender: {passengerData?.gender}</Text>
        <Text>Passenger Age: {passengerData?.age}</Text>
      </View>
    </Page>
  </Document>
);

const BookedTicket = () => {
  const [sitNo, setSitNo] = useState(null);
  const [price, setPrice] = useState(null);
  const [passengerData, setPassengerData] = useState({});

  useEffect(() => {
    const storedSitNo = JSON.parse(localStorage.getItem("sitNo"));
    const storedPrice = JSON.parse(localStorage.getItem("price"));
    const storedPassengerData = JSON.parse(
      localStorage.getItem("passengerData")
    );
    setSitNo(storedSitNo);
    setPrice(storedPrice);
    setPassengerData(storedPassengerData);
  }, []);

  return (
    <div style={styles.pdfViewer} >
      <PDFViewer style={styles.pdfViewerDiv} border="none">
        {sitNo && price && Object.keys(passengerData).length > 0 && (
          <UserDocument
            sitNo={sitNo}
            price={price}
            passengerData={passengerData}
          />
        )}
      </PDFViewer>
    </div>
  );
};

export default BookedTicket;
