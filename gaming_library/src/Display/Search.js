
import { Dropdown } from 'bootstrap'
import React, { useState, useEffect } from 'react'

const Search = () => {
    const [searchValue, setSearchValue ] = useState('')
    const [ results, setResults ] = useState([])

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
        }, [url, setSearchValue])        
   
  return (
    <div>
        <input 
            type='text'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Search'
        />
         {results.map((game) => (
            <select key={game.id} value = {game.id}>
                {game.name} 
            </select>
        ))}   
      
    </div>
  )
}


export default Search
