import React, { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchValue, setSearchValue ] = useState('')
    const [ results, setResults ] = useState([])
    // const [ userInput, setUserInput ] = useState(false)
   

    const url = `https://api.rawg.io/api/games?key=ef855fc72b30488f8dc0e80014dbfc6a&page=2&search=${searchValue}`

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.results) {
                setResults(data.results);
                }
            } catch (error) {
                console.error('Error fetching games:', error)
                }
            };
              fetchGames()   
       }, [ url, setSearchValue])   

       const handleInput = (event) => {
        setSearchValue(event.target.value)
       }

       const handleSelected = () => {
        setSearchValue('')
       }

       
   return (
    <div className='container'>
        <input 
            type='text'
            value={searchValue}
            onChange={handleInput}
            placeholder='Search'
        />
        {searchValue !== '' && results.length !== 0 &&(
         <div class='container'
            style={{backgroundColor:'gray'}}>  
           {results.map((game) => (
            <div key={game.id} value = {game.id} onClick={() => handleSelected(game.id)}>
                {game.name} 
                <Link to={`/GameDetails/${game.id}`}>
                <button>Details</button>
                </Link>
             </div> 
           ))}   
           </div>
        )}
    </div>
  )
}


export default Search
