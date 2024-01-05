import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadGames from './Function/LoadGames';
import './style.css';



function App() {

 


  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path='/' Component={LoadGames} />
       
      </Routes>
     </Router> 
    </div>
  );
}

export default App;

