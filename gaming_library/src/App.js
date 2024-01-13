import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadGames from './Function/LoadGames';
import GameDetails from "./Function/GameDetails";
import searchBar from "./Function/Search";

import './style.css';



function App() {
 
 


  return (
    <div className="App">
     
    <Router>
      <Routes>
       <Route path='/' Component={LoadGames} />
        <Route path= "/GameDetails/:id" element={<GameDetails />} />
      </Routes>
     </Router> 
    </div>
  );
}

export default App;

