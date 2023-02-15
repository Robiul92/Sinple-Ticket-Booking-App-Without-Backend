import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

import sitNo from '../SeateDake/SeateDake';

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexDirection: 'row'
    // backgroundColor: '#E4E4E4'
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
console.log();
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Slect</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



const BookTickets = () => {
    return (
        <div >
            <PDFViewer className='bg-white' width="90%" height="100%" border="none">
              <p>{sitNo}</p>
                <MyDocument/>
            </PDFViewer>
        </div>
    );
};

export default BookTickets;