import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
// import Para from './Component/para';
import  BasicForm  from './Component/forms/BasicForm';


function App() {
  return (
    <div>

          <Navbar/>

          {/* <Para/> */}
          <BasicForm/>

          <Footer/>

    </div>
  );
}

export default App;
