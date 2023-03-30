import Login from "./Login"
import React, { Component } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AFoutput from "./AFoutput";

class cApp extends Component{
  
  
}

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          
          <Route path="/" element={ <Login/> } />
          <Route path="/Login/*" element={ <AFoutput/> } />
          
        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;