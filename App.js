import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from './Main';
import Cart from './Cart';
import Navbar from './navbar/Navbar';
import Description from './Description';
import SingUp from './navbar/SingUp';
import Footer from './navbar/Footer';
function App() {
  const [filt, setfilt] = useState("")
  function filter(a){
    setfilt(a)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar data={filter} />
      <Routes>
      <Route path='/' element = {<Main data={filt}/>} />
      <Route path='/Description' element = {<Description/>} />
      <Route path='/Cart' element = {<Cart/>} />
      <Route path='/SingUp' element = {<SingUp/>} />
      </Routes>
      </BrowserRouter>
      {/* <SingUp/> */}
      <Footer/>
    </div>
  );
}

export default App;
