import Login from "./Login"
import React, { Component } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";

class cApp extends Component{
  
  state ={
    proteins: ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({proteins: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/proteinInput');
    const body = await response.json();
    return body;
  }
}

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          
          <Route path="/" element={ <Login/> } />
            
          
        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;