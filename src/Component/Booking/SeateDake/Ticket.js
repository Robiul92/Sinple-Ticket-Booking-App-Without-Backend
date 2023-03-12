import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    // height: '100%'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    // height: 'calc(100% - 40px)' // 40px is the total of margin and padding,
  }
});

const ticketData = () => ({
    eventTitle: "Music Festival",
    eventName: "Lollapalooza",
    eventLocation: "Chicago, IL",
    eventDate: "August 1-4, 2023",
    ticketPrice: "$150.00",
    ticketQuantity: "2",
    totalPrice: "$300.00",
    customerName: "John Smith",
    customerEmail: "john.smith@example.com",
    customerPhone: "555-123-4567"
});

const MyTicket = ({ ticketData }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <Text>Ticket ID: {ticketData.ticketPrice}</Text>
        <Text>Event Name: {ticketData.eventName}</Text>
        <Text>Event Date: {ticketData.eventDate}</Text>
        <Text>Event Date: <h1>{ticketData.paragraph }</h1></Text>
      </View>
    </Page>
  </Document>
);

const Ticket = () => 
<div style={{ height: '100vh' }}>
<PDFViewer style={{ height: '100%', width: '100%' } }wrap={false}>
  <MyTicket ticketData={ticketData()} />
  </PDFViewer>
</div>
export default Ticket;
