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
import ShowSitData from '../../../hooks/SitData';

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
console.log(sitNo);
const MyDocument = ({price}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Slect{price}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3</Text>
      </View>
    </Page>
  </Document>
);






const TicketDetails = () => {
  const [ sitNo, price] = ShowSitData();
    return (
        <MyDocument
        sitNo ={sitNo}
        price = {price} />
    );
};

export default TicketDetails;