import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Contact from './Pages/Contact/Contact'
import Reviews from './Pages/Reviews/Reviews'
import Login from './Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element= {<Contact></Contact>}></Route>
        <Route path = '/reviews' element={<Reviews></Reviews>}></Route>
        <Route path = '/login' element= {<Login></Login>}></Route>
        <Route path='/appointment' element= {<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
