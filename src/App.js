
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Navbar/Header/Header';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Booking from './Component/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='Home' element={<Home></Home>} ></Route>
      <Route path='Booking' element ={
          <Booking></Booking>
        }></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
