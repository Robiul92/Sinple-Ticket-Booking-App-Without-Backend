import React, { useContext } from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";

import Context from '../Context/Context';
import useSitData from '../../hooks/SitData';

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    flexDirection: 'row'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const UserDocument = ({ a, sitNo, price }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Slected [{a}] </Text>
        <Text>Slected Seats: {sitNo}</Text>
        <Text>Total Price: {price}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const BookedTicket = () => {
  const a = useContext(Context);
  const { sitNo, price } = useSitData();

  return (
    <div>
      <PDFViewer className='bg-white' width="90%" height="100%" border="none">
        <UserDocument
          a={a}
          sitNo={sitNo}
          price={price}
        />
      </PDFViewer>
    </div>
  );
};

export default BookedTicket;