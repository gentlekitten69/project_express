import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadGames from './Function/LoadGames';
import GameDetails from "./Function/GameDetails";
import './style.css';
import NavBar from "./Display/NavBar";



function App() {
 
  return (
    <div className="App">
    <header> 
      <NavBar />
    </header>
   
      <Routes>
       <Route path='/' Component={LoadGames} />
        <Route path= "/GameDetails/:id" element={<GameDetails />} />
      </Routes>
    
    </div>
  );
}

export default App;

