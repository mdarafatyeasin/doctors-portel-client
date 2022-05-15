import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Contact from './Pages/Contact/Contact'
import Reviews from './Pages/Reviews/Reviews'
import Login from './Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment'
import Footer from './Pages/Shared/Footer';
import Signup from './Pages/Login/Signup'
import RequairAuth from './Pages/Login/RequairAuth';


function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={
          <RequairAuth>
            <Appointment></Appointment>
          </RequairAuth>}>
        </Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      {/* footer part */}
      <Footer></Footer>
    </div>
  );
}

export default App;
