import React from "react";
import {  Routes, Route } from "react-router-dom";
import LoadGames from './Function/LoadGames';
import GameDetails from "./Function/GameDetails";
import './style.css';
import NavBar from "./Display/NavBar";
import MoreGenre from "./Function/MoreGenre";




function App() {
 
  return (
    <div className="App">
      <NavBar />
    
        <Routes>
          <Route path='/' Component={LoadGames} />
          <Route path= "/GameDetails/:gameId" element={<GameDetails />} />
          <Route path="/MoreGenre/:id" element={<MoreGenre />} />
        </Routes>
       
    </div>
  );
}

export default App;

