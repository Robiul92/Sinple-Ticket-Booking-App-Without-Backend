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

const BookTickets = () => {
    return (
        <div >
            <PDFViewer className='bg-white' width="90%" height="100%">
                <h1>Hello</h1>
            </PDFViewer>
        </div>
    );
};

export default BookTickets;